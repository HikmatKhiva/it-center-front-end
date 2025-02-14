
DECLARE
    new_code TEXT;
BEGIN
    LOOP
        new_code := (FLOOR(nextval('group_code_seq') / 100) + 100) || '-' || 
                    (FLOOR(nextval('group_code_seq') / 100) + 101);
        
        -- Check if code already exists
        IF NOT EXISTS (SELECT 1 FROM groups WHERE code = new_code) THEN
            RETURN new_code;
        END IF;
    END LOOP;
END;
