import express from "express"
import cors from "cors"
import dotenv from "dotenv"
dotenv.config()
// Locals
import HeadersParser from "./api/headersParser.route.js"

const port = process.env.PORT || 8000
const app = express()

app.use(cors({optionsSuccessStatus: 200}))
app.use(express.static("./public/"))
app.use(express.json())

app.get("/", (req, res, next) => {
    res.sendFile(process.cwd() + '/views/index.html')
})
app.use("/api", HeadersParser)
app.use("*", (req, res, next) => {
    res.status(404).json({ error: "Not found" })
})

var listener = app.listen(port, () => {
    console.log(`listening on port: ${listener.address().port}`)
})
