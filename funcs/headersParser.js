export default class Parser {
    static whoami(headers, remoteAddr) {
        const ipaddress = headers['x-forwarded-for'] || remoteAddr
        const language = headers['accept-language']
        const software = headers['user-agent']

        console.log({ ipaddress, language, software })

        return { ipaddress, language, software }
    }
}
