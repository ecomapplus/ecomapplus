export function compressImage(
  file: File,
  opts: { max?: number; square?: boolean; quality?: number } = {},
): Promise<string> {
  const max = opts.max ?? 1280;
  const quality = opts.quality ?? 0.72;
  return new Promise((resolve, reject) => {
    const type = (file.type || "").toLowerCase();
    if (type && !type.startsWith("image/")) {
      reject(new Error("not-image"));
      return;
    }
    const url = URL.createObjectURL(file);
    const img = new Image();
    img.onload = () => {
      const srcW = Math.max(1, img.width);
      const srcH = Math.max(1, img.height);
      let sx = 0;
      let sy = 0;
      let sw = srcW;
      let sh = srcH;
      if (opts.square) {
        const side = Math.min(srcW, srcH);
        sx = Math.floor((srcW - side) / 2);
        sy = Math.floor((srcH - side) / 2);
        sw = side;
        sh = side;
      }
      const scale = Math.min(1, max / Math.max(sw, sh, 1));
      const width = Math.max(1, Math.round(sw * scale));
      const height = Math.max(1, Math.round(sh * scale));
      const canvas = document.createElement("canvas");
      canvas.width = width;
      canvas.height = height;
      const ctx = canvas.getContext("2d");
      if (!ctx) {
        URL.revokeObjectURL(url);
        reject(new Error("canvas"));
        return;
      }
      ctx.drawImage(img, sx, sy, sw, sh, 0, 0, width, height);
      URL.revokeObjectURL(url);
      resolve(canvas.toDataURL("image/jpeg", quality));
    };
    img.onerror = () => {
      URL.revokeObjectURL(url);
      reject(new Error("load"));
    };
    img.src = url;
  });
}

/** Portrait for the profile page, plus a tiny thumb that can live on the session. */
export async function compressPortrait(file: File) {
  const [portrait, thumb] = await Promise.all([
    compressImage(file, { max: 480, square: true, quality: 0.7 }),
    compressImage(file, { max: 96, square: true, quality: 0.5 }),
  ]);
  return { portrait, thumb };
}

const UPLOAD_TARGET = 180_000;

/** Land, founder, and group photos: small enough to save without blowing the request. */
export async function compressUpload(file: File, opts: { square?: boolean } = {}): Promise<string> {
  const attempts = [
    { max: 720, quality: 0.62 },
    { max: 560, quality: 0.5 },
    { max: 420, quality: 0.4 },
  ];
  let last = "";
  let lastError: unknown;
  for (const attempt of attempts) {
    try {
      last = await compressImage(file, { ...attempt, square: opts.square });
      if (last.length <= UPLOAD_TARGET) return last;
    } catch (err) {
      lastError = err;
    }
  }
  if (last && last.length <= 280_000) return last;
  if (lastError) throw lastError;
  throw new Error("too-large");
}

export function uploadErrorMessage(err: unknown) {
  const code = err instanceof Error ? err.message : "";
  if (code === "not-image" || code === "load") {
    return "That file would not open as a photo. Try a JPG or PNG (iPhone: choose Most Compatible).";
  }
  if (code === "too-large" || code === "canvas") {
    return "That photo is still too large after shrinking. Try another shot.";
  }
  return "Could not read that photo. Try a JPG or PNG.";
}
