export const startGame = async () => {
  const response = await fetch('/api/game/start', { method: 'POST' });
  return response.json();
};
