const somethingWillHappen= () =>{
    return new Promise((resol, reject)=>{
        if(true){
            resol('Hey!!!')
        }else{
            reject('Whooops!!!')
        }
    })
}
/* somethingWillHappen()
.then(response=> console.log(response))
.catch(err=>console.log(err)) */

const somethingWillHappen2= () =>{
    return new Promise((resol, reject)=>{
        if(true){
            console.log('wait')
            setTimeout(() => {
                resol('Hey2!!!')
                
            }, 2000);
        }else{
            const error= new Error('whooopss2')
            reject(error)
        }
    })
}
/* somethingWillHappen2()
.then(response=> console.log(response))
.catch(err=>console.log(err)) */

Promise.all([somethingWillHappen2(), somethingWillHappen()])
.then(response=>{console.log('Arreglo de respnses ', response)})
.catch(err=>{console.log('Arreglo de errores ', err)})