let xmlhttpRequest = require('xmlhttprequest').XMLHttpRequest

const fetch = (URL_api) => {
    return new Promise((resolve, reject) => {

        const xhttp = new xmlhttpRequest()
        xhttp.open('GET', URL_api, true)
        xhttp.onreadystatechange = (event) => {
            if (xhttp.readyState === 4) {
                (xhttp.status === 200)
                    ? resolve(JSON.parse(xhttp.responseText))
                    : reject(new Error(`error`, URL_api))
            }
        }
        xhttp.send()
    })
}
module.exports=fetch