import {get, RequestOptions} from 'http';
import {Router, Request, Response} from "express";
import {AuthService} from "../service/auth.service";

const router: Router = Router();

router.get('/genre', (req: Request, res: Response) => {
    const requestOptions: RequestOptions = {
        headers: {
            'Authorization': 'Bearer ' + AuthService.token,
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        }
    };
    get('http://localhost:8080/api/genres', requestOptions, (data) => {
        res.send(data);
    });
});

export const GenreController: Router = router;
