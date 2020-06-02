import express, { Request, Response } from 'express'

const routes = express.Router()

routes.get("/", (req: Request, res: Response) => {
  res.json({
    name: "ハンス",
    message: "Next Level Weekへようこそ！"
  })
})

export default routes