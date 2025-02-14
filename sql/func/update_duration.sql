
BEGIN
    IF NEW.is_group_finished THEN
        NEW.duration := age(NEW.finished_date, NEW.created_at);
    END IF;
    RETURN NEW;
END;
