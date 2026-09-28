-- EcoMapPlus share codes and referral commissions (unowned; emails stored as hashes only).
create table if not exists plus_members (
  code text primary key,
  email_hash text not null unique,
  stripe_customer_id text not null default '',
  stripe_subscription_id text not null default '',
  created_at timestamptz not null default now()
);

create table if not exists plus_referrals (
  id text primary key,
  referrer_code text not null references plus_members (code),
  session_id text not null unique,
  commission_cents integer not null,
  credited boolean not null default false,
  bonus_applied boolean not null default false,
  created_at timestamptz not null default now()
);

create index if not exists plus_members_customer_idx on plus_members (stripe_customer_id);
create index if not exists plus_referrals_referrer_idx on plus_referrals (referrer_code);
