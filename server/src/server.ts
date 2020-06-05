import express from "express"
import cors from "cors"
import routes from "./routes"
import path from 'path'
import { errors } from 'celebrate'

const app = express()

// Express middlewares
app.use(cors())
app.use(express.json())
app.use(routes)

app.use("/uploads", express.static(path.resolve(__dirname, "..", "uploads")))
app.use("/uploads/pointPictures", express.static(path.resolve(__dirname, "..", "uploads", "pointPictures")))

app.use(errors())
const port = 3333
app.listen(port, () => console.log(`listening on ${port}`))