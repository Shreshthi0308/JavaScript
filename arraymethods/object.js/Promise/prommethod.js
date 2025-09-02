

const prom = Promise.resolve("welcome");

const prom1 = Promise.resolve("unique system skills");

const prom2= Promise.reject("no entry");

const prom3= Promise.resolve("bye");

Promise.all([prom,prom1,prom3,prom2]).then((v)=>{
    console.log(v);
    
}).catch((v)=>
{
    console.log(v);
    
})

Promise.allSettled([prom1,prom2]).then((v)=>{
    console.log(v);
    
}).catch((v)=>{
    console.log(v);
    
})