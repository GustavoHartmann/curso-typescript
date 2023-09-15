import { connection } from "../database/database";
import { CreateGame, Game } from "../protocols/game-protocol";

async function getGames() {
  const result = await connection.query<Game>(`SELECT * FROM games`);

  return result.rows;
}

async function createGame(game: CreateGame) {
  return await connection.query<CreateGame>(
    `INSERT INTO games (title, platform) VALUES ($1, $2)`[
      (game.title, game.platform)
    ]
  );
}

async function getGameByTitleAndPlatform(game: Game) {
  const result = await connection.query<Game>(
    `SELECT * FROM games WHERE title = $1 AND platform = $2`,
    [game.title, game.platform]
  );

  return result.rows;
}

const gamesRepository = {
  getGames,
  getGameByTitleAndPlatform,
  createGame,
};

export default gamesRepository;
