module.exports = (io) => {
  io.on('connection', (socket) => {
    console.log('Socket connected:', socket.id);

    socket.on('startGame', (data) => {
      console.log('Game started with data:', data);
    });
  });
};
