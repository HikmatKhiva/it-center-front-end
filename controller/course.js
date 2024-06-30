import { Course } from "../models/course.js";
import { checkCourse } from "./checkExist.js";
// getAll group
const getAllCourse = async (req, res) => {
  try {
    const courses = await Course.find();
    return res.status(200).json(courses);
  } catch (error) {
    return res.status(500).json({ error });
  }
};
// create a group
const createCourse = async (req, res) => {
  try {
    const { title, teacher } = req.body;
    const { exist } = await checkCourse({ title }); // check group before create from database
    if (exist) return res.status(400).json({ message: "already exist" });
    const newCourse = new Course({
      title,
      teacher,
    });
    console.log(newCourse);
    await newCourse.save();
    return res.status(201).json({ message: "course created successfully" });
  } catch (error) {
    return res.status(500).json({ error });
  }
};
export { getAllCourse, createCourse };
