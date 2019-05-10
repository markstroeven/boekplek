import express from "express";
import {GenreController} from './controller/genre.controller';
import {ProductController} from "./controller/product.controller";
import {AuthService} from "./service/auth.service";

const port: number = 3000;
const application = express();

AuthService.refreshToken();

application.use('/api', GenreController);
application.use('/api', ProductController);

application.listen(port, () => console.log(`Example app listening on port ${port}!`));
