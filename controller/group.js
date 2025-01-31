import { pool } from "../db/db.js";
// getAll group
const getAllGroup = async (req, res) => {
  try {
    const groups = await pool.query(
      `SELECT 
    groups.id,
    groups.code,
    groups.is_group_finished,
    groups.name,
    TO_CHAR((groups.created_at AT TIME ZONE 'UTC')::timestamp, 'DD.MM.YYYY') AS created_at, 
    COALESCE(
        json_agg(
            json_build_object(
                'id', students.id,
                'first_name', TRIM(students.first_name),
                'second_name', TRIM(students.second_name),
                'passport_id', students.passport_id
            ) ORDER BY students.id ASC
        ) FILTER (WHERE students.id IS NOT NULL),  -- Filter out null student records
        '[]'::json  -- Default to an empty JSON array if no valid students exist
    ) AS students,
    TRIM(teachers.first_name) AS teacher_name,
    course.name AS course_name
    FROM groups
    LEFT JOIN students ON groups.id = students.group_id
    LEFT JOIN teachers ON groups.teacher_id = teachers.id  -- Adjust this line based on your schema
    LEFT JOIN course ON groups.course_id = course.id  -- Adjust this line based on your schema
    GROUP BY 
        groups.id, 
        groups.code, 
        groups.is_group_finished, 
        groups.name, 
        groups.created_at, 
        teachers.first_name, 
        course.name  -- Group by all non-aggregated columns
    ORDER BY groups.id ASC;`
    );
    return res.status(200).json(groups.rows);
  } catch (error) {
    console.log(error);

    return res.status(500).json({ error });
  }
};
// create a group
const createGroup = async (req, res) => {
  try {
    const { teacher_id, name } = req.body;
    // avoid sql inject code
    if (typeof name !== "string" || typeof teacher_id !== "string") {
      return res.status(400).send("Invalid input type");
    }
    await pool.query(`INSERT INTO groups (teacher_id,name) VALUES ($1,$2)`, [
      teacher_id,
      name,
    ]);
    return res.status(201).json({ message: "group created successfully" });
  } catch (error) {
    console.log(error);

    return res.status(500).json({ error });
  }
};
// get a group
const getGroup = async (req, res) => {
  try {
    const { id } = req.params;
    const group = await pool.query(
      `SELECT 
          groups.id,
          groups.code,
          groups.is_group_finished,
          groups.name,
          TO_CHAR((groups.created_at AT TIME ZONE 'UTC')::timestamp, 'DD.MM.YYYY') AS created_at, 
          COALESCE(
              json_agg(
                  json_build_object(
                      'id', students.id,
                      'first_name', TRIM(students.first_name),
                      'second_name', TRIM(students.second_name),
                      'passport_id', students.passport_id,
                      'gender', students.gender
                  ) ORDER BY students.id ASC
              ) FILTER (WHERE students.id IS NOT NULL),  -- Filter out null student records
              '[]'::json  -- Default to an empty JSON array if no valid students exist
          ) AS students,
          course.id as course_id
      FROM groups
      LEFT JOIN students ON groups.id = students.group_id
      LEFT JOIN course ON groups.course_id = course.id  -- Adjust this line based on your schema
      WHERE groups.id = $1
      GROUP BY 
          groups.id, 
          groups.code,  -- Added to the GROUP BY clause
          groups.is_group_finished, 
          groups.name, 
          groups.created_at, 
          course.id  -- Group by all non-aggregated columns
      ORDER BY groups.id ASC;`,
      [id]
    );
    if (group.rows.length === 0) {
      return res.status(404).json({ message: "Group topilmadi." });
    }
    return res.status(200).json(group.rows[0]);
  } catch (error) {
    console.log(error);

    return res.status(500).json({ error });
  }
};

export { getAllGroup, createGroup, getGroup };
