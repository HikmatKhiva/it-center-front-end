-- Table: public.news

-- DROP TABLE IF EXISTS public.news;

CREATE TABLE IF NOT EXISTS public.news
(
    id integer NOT NULL DEFAULT nextval('news_id_seq'::regclass),
    photo_url text COLLATE pg_catalog."default" NOT NULL,
    news_title text COLLATE pg_catalog."default" NOT NULL,
    news_description text COLLATE pg_catalog."default" NOT NULL,
    content text COLLATE pg_catalog."default" NOT NULL,
    created_at timestamp without time zone DEFAULT CURRENT_TIMESTAMP,
    CONSTRAINT news_pkey PRIMARY KEY (id)
)

TABLESPACE pg_default;

ALTER TABLE IF EXISTS public.news
    OWNER to postgres;