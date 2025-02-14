
DECLARE
    v_current_debt numeric(10,2);
BEGIN
    -- Get the current debt of the student
    SELECT debt INTO v_current_debt
    FROM students
    WHERE id = NEW.student_id;

    -- Check if the payment amount exceeds the current debt
    IF NEW.amount > v_current_debt THEN
        RAISE EXCEPTION 'Payment amount exceeds current debt. Current debt: %, Payment amount: %', v_current_debt, NEW.amount;
    END IF;

    -- Update the student's debt by subtracting the payment amount
    UPDATE students
    SET debt = debt - NEW.amount
    WHERE id = NEW.student_id;

    RETURN NEW;
END;
