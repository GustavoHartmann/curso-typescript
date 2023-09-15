import gamesRepository from "../repository/games-repository";
import { CreateGame, Game } from "./../protocols/game-protocol";

async function getGames(): Promise<Game[]> {
  return await gamesRepository.getGames();
}

async function createGame(game: Game): Promise<void> {
  if (await gameAlreadyExists(game)) {
    throw { message: "Game already exists" };
  }

  await gamesRepository.createGame(game);
}

async function gameAlreadyExists(game: Game): Promise<boolean> {
  const result = await gamesRepository.getGameByTitleAndPlatform(game);
  return result ? true : false;
}

const gamesService = {
  getGames,
  createGame,
};

export default gamesService;
