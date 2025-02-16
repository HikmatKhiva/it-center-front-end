
DECLARE
    current_group_start INTEGER;
    current_group_end INTEGER;
BEGIN
    current_group_start := FLOOR(nextval('group_code_seq') / 100) + 100;
    current_group_end := FLOOR(nextval('group_code_seq') / 100) + 101;
    
    RETURN current_group_start || '-' || current_group_end;
END;
