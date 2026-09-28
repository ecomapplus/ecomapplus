-- Plus members who chose to share a point on the atlas.
create table if not exists member_places (
  id text primary key,
  token_hash text not null,
  display_name text not null,
  lat double precision not null,
  lng double precision not null,
  updated_at timestamptz not null default now()
);
