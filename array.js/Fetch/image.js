

   const prom=fetch("https://dummyjson.com/docs/image");


   prom.then((v)=>
{
  return v.json();
    
}).then((v)=>
{
    
    
    let data=new Array(v.image);

    data.forEach((i)=>
{
    
    i.forEach((j)=>
    {
        if(j.completed==true){
        console.log(j);
        console.log("***************************************");
        
        }
        else{
            console.log("status false;;");
            
        }
    })
    
})
  
    
})
.catch((e)=>
{
    console.log(e);
    
})


