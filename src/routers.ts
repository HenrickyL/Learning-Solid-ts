import { Router, Request, Response } from 'express';

const router = Router();

router.post('/users', (req: Request, res: Response) => {
    return res.status(201).send();
});

export { router }