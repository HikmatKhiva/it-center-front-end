-- Table: public.course

-- DROP TABLE IF EXISTS public.course;

CREATE TABLE IF NOT EXISTS public.course
(
    id integer NOT NULL GENERATED ALWAYS AS IDENTITY ( INCREMENT 1 START 1 MINVALUE 1 MAXVALUE 1234567890 CACHE 1 ),
    name character varying(255) COLLATE pg_catalog."default" NOT NULL,
    teacher_id integer,
    price bigint NOT NULL,
    created_at timestamp without time zone DEFAULT CURRENT_TIMESTAMP,
    CONSTRAINT course_pkey PRIMARY KEY (id),
    CONSTRAINT name UNIQUE (name),
    CONSTRAINT course_teacher_id_fkey FOREIGN KEY (teacher_id)
        REFERENCES public.teachers (id) MATCH SIMPLE
        ON UPDATE NO ACTION
        ON DELETE NO ACTION
)

TABLESPACE pg_default;

ALTER TABLE IF EXISTS public.course
    OWNER to postgres;