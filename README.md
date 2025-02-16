const pollSchema = new mongoose.Schema({
question: String,
options: [{ text: String, votes: Number }],
});

-https://quickpollingappapi.onrender.com/polls -https://quickpollingappapi.onrender.com/polls/:id/vote
