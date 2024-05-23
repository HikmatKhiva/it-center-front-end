import { User } from "../models/user.js";
// get all users
const getAllUsers = async (req, res) => {
  try {
    const users = await User.find();
    return res.status(200).json({ users });
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
export { getAllUsers };
