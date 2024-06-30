import { Course } from "../models/course.js";
import { Group } from "../models/group.js";
export const checkGroup = async (value) => {
  const group = await Group.findOne(value);
  if (group) {
    return { group, exist: true };
  }
  return { exist: false };
};
export const checkCourse = async (value) => {
  const course = await Course.findOne(value);
  if (course) {
    return { course, exist: true };
  }
  return { exist: false };
};
