import express from 'express'
import HeadersCtrl from './headersParser.controller.js'

const router = express.Router()

router.route("/whoami").get(HeadersCtrl.apiGetHeaders)

export default router
