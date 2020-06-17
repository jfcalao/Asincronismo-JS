const fetchData= require('../utiles/fetchData')
const API = 'https://rickandmortyapi.com/api/character/'

anotherFunction= async (URL_API)=>{
    try{
        const data= await fetchData(URL_API)
        const character= await fetchData(`${URL_API}${data.results[0].id}`)
        const origin = await fetchData(`${character.origin.url}`)
        console.log(data.info.count)
        console.log(character.name)
        console.log(origin.dimension)
    }catch(error){
        console.error(error)
    }
}
console.log('before')
anotherFunction(API)
console.log('after')
