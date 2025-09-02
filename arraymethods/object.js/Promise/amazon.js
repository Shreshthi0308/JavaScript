const prom = new Promise((resolve,reject)=>{
    let num = 2000;

    setTimeout(()=>
    {
    if(num>1000)
    {
        resolve("successeful");
    }
    reject("Error")
},2000)
})

prom.then((res)=>{
    console.log("you can get entry",res);
})
prom.catch((rej)=>{
    console.log("your are not able to get entry",rej)
})