const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const RoomSchema = new Schema({
  name: { type: String, required: true, unique: true },
  users: [{ type: Schema.Types.ObjectId, ref: "User" }],
});

module.exports = mongoose.model("Room", RoomSchema);
