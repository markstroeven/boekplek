import {Router, Request, Response} from "express";

const router: Router = Router();

router.get('/product', (req: Request, res: Response) => {
    res.send("Woop it works product");
});

export const ProductController: Router = router;
