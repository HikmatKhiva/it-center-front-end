-- Table: public.messages

-- DROP TABLE IF EXISTS public.messages;

CREATE TABLE IF NOT EXISTS public.messages
(
    id integer NOT NULL DEFAULT nextval('messages_id_seq'::regclass),
    full_name character varying(255) COLLATE pg_catalog."default" NOT NULL,
    message text COLLATE pg_catalog."default" NOT NULL,
    created_at timestamp without time zone DEFAULT CURRENT_TIMESTAMP,
    CONSTRAINT messages_pkey PRIMARY KEY (id)
)

TABLESPACE pg_default;

ALTER TABLE IF EXISTS public.messages
    OWNER to postgres;