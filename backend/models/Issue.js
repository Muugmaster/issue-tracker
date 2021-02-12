import mongoose from 'mongoose';

const IssueSchema = mongoose.Schema({
    description: String,
    assignTo: String,
    priority: String
});

export default mongoose.model('Issues', IssueSchema);