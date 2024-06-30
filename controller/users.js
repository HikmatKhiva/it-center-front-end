import { User } from "../models/user.js";
import { checkGroup } from "./checkExist.js";
// get all users
const getAllUsers = async (req, res) => {
  try {
    const { q } = req.query;
    const query = {};
    if (q) {
      query.groupId = q;
    }
    const users = await User.find(query);
    return res.status(200).json(users);
  } catch (error) {
    return res.status(500).json({ error });
  }
};
// get a user
const getAllUser = async (req, res) => {
  try {
  } catch (error) {
    return res.status(500).json({ error });
  }
};
// create a user
const createUser = async (req, res) => {
  try {
    const { idGroup } = req.params;
    const { exist, group } = await checkGroup({ _id: idGroup });
    if (!exist) {
      return res.status(404).json({ message: "group not found" });
    }
    const { name, surname, gender, courseId, date, groupId } = req.body;
    const newUser = new User({
      name,
      surname,
      gender,
      courseId,
      birth_date: date,
      groupId,
    });
    await newUser.save();
    group.users.push(newUser._id);
    await group.save();
    return res.status(201).json({ message: "User created successfully" });
  } catch (error) {
    return res.status(500).json({ error });
  }
};
// create a user
const deleteUser = async (req, res) => {
  try {
  } catch (error) {
    return res.status(500).json({ error });
  }
};
export { getAllUsers, createUser };
