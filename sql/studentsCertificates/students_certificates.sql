-- Table: public.students_certificates

-- DROP TABLE IF EXISTS public.students_certificates;

CREATE TABLE IF NOT EXISTS public.students_certificates
(
    id integer NOT NULL DEFAULT nextval('students_certificates_id_seq'::regclass),
    student_id integer NOT NULL,
    certificate_url text COLLATE pg_catalog."default" NOT NULL,
    group_id integer,
    created_at timestamp with time zone DEFAULT CURRENT_TIMESTAMP,
    CONSTRAINT students_certificates_pkey PRIMARY KEY (id),
    CONSTRAINT certificate_url UNIQUE (certificate_url)
        INCLUDE(certificate_url),
    CONSTRAINT student_id_fkey FOREIGN KEY (student_id)
        REFERENCES public.students (id) MATCH SIMPLE
        ON UPDATE NO ACTION
        ON DELETE CASCADE
)

TABLESPACE pg_default;

ALTER TABLE IF EXISTS public.students_certificates
    OWNER to postgres;