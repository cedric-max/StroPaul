import express, { Express, Request, Response } from 'express';
const app = express()
const port = 3000

app.get('/', (req: Request, res: Response) => {
    res.send('StroPaul back-end');
});

app.listen(port, () => {
    console.log(`⚡️[server]: Server is running at https://localhost:${port}`)
})
