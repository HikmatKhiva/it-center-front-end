-- Table: public.students

-- DROP TABLE IF EXISTS public.students;

CREATE TABLE IF NOT EXISTS public.students
(
    first_name character varying(50) COLLATE pg_catalog."default" NOT NULL,
    second_name character varying(50) COLLATE pg_catalog."default" NOT NULL,
    group_id integer,
    passport_id character varying(9) COLLATE pg_catalog."default" NOT NULL,
    course_id integer NOT NULL,
    id integer NOT NULL DEFAULT nextval('students_id_seq'::regclass),
    gender character varying(6) COLLATE pg_catalog."default",
    debt numeric(10,2) DEFAULT 0.00,
    CONSTRAINT students_pkey PRIMARY KEY (id),
    CONSTRAINT course_id_fkey FOREIGN KEY (course_id)
        REFERENCES public.course (id) MATCH SIMPLE
        ON UPDATE NO ACTION
        ON DELETE NO ACTION
        NOT VALID,
    CONSTRAINT students_gender_check CHECK (gender::text = ANY (ARRAY['male'::character varying, 'female'::character varying]::text[]))
)

TABLESPACE pg_default;

ALTER TABLE IF EXISTS public.students
    OWNER to postgres;

-- Trigger: before_insert_student

-- DROP TRIGGER IF EXISTS before_insert_student ON public.students;

CREATE OR REPLACE TRIGGER before_insert_student
    BEFORE INSERT
    ON public.students
    FOR EACH ROW
    EXECUTE FUNCTION public.calculate_student_debt();