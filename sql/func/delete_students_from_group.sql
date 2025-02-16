
BEGIN
    DELETE FROM public.students
    WHERE group_id = OLD.id; -- OLD.id refers to the id of the group being deleted

    RETURN OLD; -- Optionally return the old record (the deleted group)
END;
