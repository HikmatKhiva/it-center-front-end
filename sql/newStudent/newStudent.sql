-- Table: public.newstudents

-- DROP TABLE IF EXISTS public.newstudents;

CREATE TABLE IF NOT EXISTS public.newstudents
(
    id integer NOT NULL DEFAULT nextval('newstudents_id_seq'::regclass),
    full_name text COLLATE pg_catalog."default" NOT NULL,
    phone text COLLATE pg_catalog."default" NOT NULL,
    course_id integer NOT NULL,
    course_time text COLLATE pg_catalog."default" NOT NULL,
    created_at timestamp without time zone DEFAULT CURRENT_TIMESTAMP,
    is_attend text COLLATE pg_catalog."default" DEFAULT 'pending'::text,
    CONSTRAINT newstudents_pkey PRIMARY KEY (id),
    CONSTRAINT course_id_fkey FOREIGN KEY (course_id)
        REFERENCES public.course (id) MATCH SIMPLE
        ON UPDATE NO ACTION
        ON DELETE NO ACTION
        NOT VALID,
    CONSTRAINT check_is_attend_value CHECK (is_attend = ANY (ARRAY['success'::text, 'pending'::text, 'reject'::text]))
)

TABLESPACE pg_default;

ALTER TABLE IF EXISTS public.newstudents
    OWNER to postgres;