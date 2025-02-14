-- Table: public.groups

-- DROP TABLE IF EXISTS public.groups;

CREATE TABLE IF NOT EXISTS public.groups
(
    id integer NOT NULL DEFAULT nextval('groups_id_seq'::regclass),
    code text COLLATE pg_catalog."default" NOT NULL DEFAULT ('100-'::text || lpad((nextval('group_code_seq'::regclass))::text, 3, '0'::text)),
    name text COLLATE pg_catalog."default" NOT NULL,
    teacher_id integer,
    is_group_finished boolean DEFAULT false,
    course_id integer,
    created_at timestamp without time zone DEFAULT CURRENT_TIMESTAMP,
    finished_date timestamp without time zone,
    price numeric(10,2),
    duration character varying(10) COLLATE pg_catalog."default",
    group_time character varying(20) COLLATE pg_catalog."default",
    CONSTRAINT groups_pkey PRIMARY KEY (id),
    CONSTRAINT groups_code_key UNIQUE (code),
    CONSTRAINT course_id_fkey FOREIGN KEY (course_id)
        REFERENCES public.course (id) MATCH SIMPLE
        ON UPDATE NO ACTION
        ON DELETE NO ACTION
        NOT VALID,
    CONSTRAINT teacher_id_fkey FOREIGN KEY (teacher_id)
        REFERENCES public.teachers (id) MATCH SIMPLE
        ON UPDATE NO ACTION
        ON DELETE NO ACTION
        NOT VALID
)

TABLESPACE pg_default;

ALTER TABLE IF EXISTS public.groups
    OWNER to postgres;

-- Trigger: delete_students_trigger

-- DROP TRIGGER IF EXISTS delete_students_trigger ON public.groups;

CREATE OR REPLACE TRIGGER delete_students_trigger
    AFTER DELETE
    ON public.groups
    FOR EACH ROW
    EXECUTE FUNCTION public.delete_students_from_group();

-- Trigger: set_duration

-- DROP TRIGGER IF EXISTS set_duration ON public.groups;

CREATE OR REPLACE TRIGGER set_duration
    BEFORE UPDATE 
    ON public.groups
    FOR EACH ROW
    WHEN (old.is_group_finished IS DISTINCT FROM new.is_group_finished)
    EXECUTE FUNCTION public.update_duration();

-- Trigger: set_finished_date

-- DROP TRIGGER IF EXISTS set_finished_date ON public.groups;

CREATE OR REPLACE TRIGGER set_finished_date
    BEFORE UPDATE 
    ON public.groups
    FOR EACH ROW
    WHEN (old.is_group_finished IS DISTINCT FROM new.is_group_finished)
    EXECUTE FUNCTION public.update_finished_date();