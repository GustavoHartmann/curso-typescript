import { Router } from "express";
import musicController from "../controllers/music-controller";
import validateMusicSchema from "../middleware/music-validation";
import { musicSchema } from "../schema/music-schema";

const musicRouter = Router();

musicRouter.get("/musics", musicController.getMusics);
musicRouter.post(
  "/musics",
  validateMusicSchema(musicSchema),
  musicController.createMusic
); // TODO: validação via Joi

export default musicRouter;
