
BEGIN
    IF NEW.is_group_finished = TRUE THEN
        NEW.finished_date := CURRENT_TIMESTAMP;
    END IF;
    RETURN NEW;
END;
