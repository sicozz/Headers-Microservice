import Parser from '../funcs/headersParser.js'

export default class HeadersCtrl {
    static apiGetHeaders (req, res, next) {
        try {
            const info = Parser.whoami(req.headers, req.connection.remoteAddress)
            res.json(info)
        } catch(err) {
            console.error(`Error in headers: ${err}`)
            res.json({ error: err })
        }
    }
}
