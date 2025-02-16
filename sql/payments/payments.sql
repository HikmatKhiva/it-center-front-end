-- Table: public.payments

-- DROP TABLE IF EXISTS public.payments;

CREATE TABLE IF NOT EXISTS public.payments
(
    id integer NOT NULL DEFAULT nextval('payments_id_seq'::regclass),
    student_id integer NOT NULL,
    group_id integer NOT NULL,
    payment_date timestamp without time zone DEFAULT CURRENT_TIMESTAMP,
    amount numeric(10,2) NOT NULL,
    status text COLLATE pg_catalog."default" NOT NULL DEFAULT 'Paid'::text,
    CONSTRAINT payments_pkey PRIMARY KEY (id),
    CONSTRAINT fk_group FOREIGN KEY (group_id)
        REFERENCES public.groups (id) MATCH SIMPLE
        ON UPDATE NO ACTION
        ON DELETE CASCADE,
    CONSTRAINT fk_student FOREIGN KEY (student_id)
        REFERENCES public.students (id) MATCH SIMPLE
        ON UPDATE NO ACTION
        ON DELETE CASCADE
)

TABLESPACE pg_default;

ALTER TABLE IF EXISTS public.payments
    OWNER to postgres;

-- Trigger: after_insert_payment

-- DROP TRIGGER IF EXISTS after_insert_payment ON public.payments;

CREATE OR REPLACE TRIGGER after_insert_payment
    AFTER INSERT
    ON public.payments
    FOR EACH ROW
    EXECUTE FUNCTION public.update_student_debt();