let xmlhttpRequest = require('xmlhttprequest').XMLHttpRequest
let API = 'https://rickandmortyapi.com/api/character/'
function fetch(URL_api, callback) {
	let xhttp = new xmlhttpRequest()
	xhttp.open('GET', URL_api, true)
	xhttp.onreadystatechange = function (event) {
		if (xhttp.readyState === 4) {
			if (xhttp.status === 200) {
				callback(null, JSON.parse(xhttp.responseText))
			} else {
				return callback(new Error(`error ${URL_api}`, null))
			}
		}
	}
	xhttp.send()
}

fetch(API, function (error, data) {
	if (error) {
		return console.error(error)
	}
	console.log(data.info.count)
	for (let i = 0; i < data.results.length; i++) {
		console.log(`Esta es la iteración ${i}`)
		fetch(API + data.results[i].id, function (error2, data2) {
			if (error2) return console.error(error2)
			if(data2.location.url){
				fetch(data2.location.url, function (error3, data3) {
					if (error3) return console.error(error3)
						console.log(`El personaje con id:${data2.id} es ${data2.name}
pertenece a la dimension ${data3.dimension}`)
					/* console.log(data.results[0].name) */
					/* console.log(data2.name) */
				})
			}
		})
	}
})