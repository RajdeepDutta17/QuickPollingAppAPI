const pollSchema = new mongoose.Schema({
question: String,
options: [{ text: String, votes: Number }],
});

/polls
/polls/:id/vote
