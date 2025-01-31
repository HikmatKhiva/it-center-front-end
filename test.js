// let a = 5;
// function b() {
//   if (false) {
//     return "hello";
//   }
//   console.log(a);
// }

// b()
         {/* <TextInput
            required
            size="md"
            label="Telefon raqamingizni kiriting!"
            placeholder="+99 (___) ___-__-__"
            onChange={(event) => {
              console.log(event.target.value)
              form.setFieldValue("phone", event.target.value);
            }}
            // error={form.errors.phone && "Ism bo'lishi shart"}
            component={(
              inputProps: React.ComponentPropsWithoutRef<typeof TextInput>
            ) => (
              <InputMask
                mask="+99 (___) ___-__-__"
                replacement={{ _: /\d/ }}
                {...inputProps}
              />
            )}
            radius="md"
          />


          -- Table: public.groups

-- DROP TABLE IF EXISTS public.groups;

CREATE TABLE IF NOT EXISTS public.groups
(
    id integer NOT NULL DEFAULT nextval('groups_id_seq'::regclass),
    code character varying(255) COLLATE pg_catalog."default" NOT NULL DEFAULT generate_group_code(),
    teacher_id integer,
    is_group_finish boolean DEFAULT false,
    course_name character(50) COLLATE pg_catalog."default",
    created_at time with time zone DEFAULT CURRENT_TIMESTAMP,
    duration integer NOT NULL DEFAULT 2,
    CONSTRAINT groups_pkey PRIMARY KEY (id),
    CONSTRAINT groups_group_code_key UNIQUE (code),
    CONSTRAINT teacher_id_fkey FOREIGN KEY (teacher_id)
        REFERENCES public.teachers (id) MATCH SIMPLE
        ON UPDATE NO ACTION
        ON DELETE NO ACTION
        NOT VALID
)

TABLESPACE pg_default;

ALTER TABLE IF EXISTS public.groups
    OWNER to postgres;