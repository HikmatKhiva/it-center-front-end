
DECLARE
    v_duration_value integer;
    v_unit text;
BEGIN
    -- Split duration into value and unit (assuming format like '6 months')
    SELECT split_part(groups.duration, ' ', 1)::integer INTO v_duration_value
    FROM groups
    WHERE groups.id = NEW.group_id;

    SELECT split_part(groups.duration, ' ', 2) INTO v_unit
    FROM groups
    WHERE groups.id = NEW.group_id;

    IF lower(v_unit) = 'months' THEN
        NEW.debt := (SELECT groups.price * v_duration_value FROM groups WHERE groups.id = NEW.group_id);
    ELSIF lower(v_unit) = 'years' THEN
        NEW.debt := (SELECT groups.price * v_duration_value * 12 FROM groups WHERE groups.id = NEW.group_id); -- Assuming year has 12 months for simplicity
    ELSE
        RAISE EXCEPTION 'Unsupported duration unit: %', v_unit;
    END IF;

    RETURN NEW;
END;
