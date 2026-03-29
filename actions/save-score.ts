'use server'
export async function saveGameScore(gameId: string, score: number) {
  console.log("Puntaje recibido:", score);
  return { success: true };
}