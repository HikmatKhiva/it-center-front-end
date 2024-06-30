import { Group } from "../models/group.js";
import { checkGroup } from "./checkExist.js";
// getAll group
const getAllGroup = async (req, res) => {
  try {
    const groups = await Group.aggregate([
      {
        $lookup: {
          from: "users",
          localField: "users",
          foreignField: "_id",
          as: "users",
        },
      },
    ]);
    return res.status(200).json(groups);
  } catch (error) {
    return res.status(500).json({ error });
  }
};
// create a group
const createGroup = async (req, res) => {
  try {
    const { name } = req.body;
    const { exist } = await checkGroup({ name }); // check group before create from database
    if (exist) return res.status(400).json({ message: "already exist" });
    const newGroup = new Group({
      name,
    });
    await newGroup.save();
    return res.status(201).json({ message: "group created successfully" });
  } catch (error) {
    return res.status(500).json({ error });
  }
};
export { getAllGroup, createGroup };
