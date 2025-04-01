const mongoose = require('mongoose');

const GameSessionSchema = new mongoose.Schema({
  players: [{ type: mongoose.Schema.Types.ObjectId, ref: 'User' }],
  status: { type: String, default: 'waiting' },
});

module.exports = mongoose.model('GameSession', GameSessionSchema);
