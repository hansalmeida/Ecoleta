import express, { Request, Response } from "express"

const app = express()

app.get("/", (req: Request, res: Response) => {
  res.json({
    name: "ハンス",
    message: "Next Level Weekへようこそ！"
  })
})

const port = 3333
app.listen(port, () => console.log(`listening on ${port}`))