-- Table: public.admin

-- DROP TABLE IF EXISTS public.admin;

CREATE TABLE IF NOT EXISTS public.admin
(
    id integer NOT NULL DEFAULT nextval('admin_id_seq'::regclass),
    username character varying(50) COLLATE pg_catalog."default" NOT NULL,
    password character varying(255) COLLATE pg_catalog."default" NOT NULL,
    email character varying(100) COLLATE pg_catalog."default" NOT NULL,
    photo_url character varying(255) COLLATE pg_catalog."default",
    secret character varying(255) COLLATE pg_catalog."default",
    CONSTRAINT admin_pkey PRIMARY KEY (id),
    CONSTRAINT admin_email_key UNIQUE (email),
    CONSTRAINT admin_username_key UNIQUE (username)
)

TABLESPACE pg_default;

ALTER TABLE IF EXISTS public.admin
    OWNER to postgres;