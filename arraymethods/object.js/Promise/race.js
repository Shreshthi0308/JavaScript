

const p1=Promise.reject("sorry");

const p2=Promise.resolve("good");

const p3=Promise.resolve("hii");

const p4 = Promise.reject("reject");

Promise.race([p2,p3]).then((v)=>{
    console.log(v);
    
}).catch((v)=>{
    console.log(v);
    
})