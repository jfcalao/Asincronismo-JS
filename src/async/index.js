const doSomethingAsync= ()=>{
    return new Promise((resolve, reject)=>{
        (true)
        ? setTimeout(() => {
            resolve('Do something async')
        }, 3000)
        : reject(new Error('Test error'))
    })
}
doSomething=async ()=>{
    const something = await doSomethingAsync()
    console.log("1 "+something)
}

doSomething()

const anotherFunction= async ()=>{
    try{
        const simething= await doSomethingAsync()
        console.log("2 "+simething)
    }catch(error){
        console.error(error)
    }
}
anotherFunction()