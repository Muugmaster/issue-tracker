import mongoose from "mongoose";

const IssueSchema = mongoose.Schema({
  description: String,
  assignTo: String,
  priority: String,
  createdAt: { type: Date, default: Date.now() },
});

export default mongoose.model("Issues", IssueSchema);
