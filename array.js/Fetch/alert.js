
 async function getdata()
{
     const first_response= await fetch("https://dummyjson.com/docs/image");

      const refineddata= await  first_response.json();

      console.log(refineddata.image);
      
}



function aletrdemo()
{
      window.alert("hii i am shreshthi")
}

async function filtereddata() {
      

const first_response= await fetch("https://dummyjson.com/docs/image");

      const refineddata= await  first_response.json();

       const filtered=new Array(refineddata.image);

        let counter=1;
       filtered.filter((i)=>
      {
            i.forEach((j) => {
                  if(j.completed==true)
            {
                  console.log(j);
                  counter++;
                  
            }
            else{
                  console.log("InComplete");
                  
            }
            });
            setTimeout(()=>{
                  if(counter>10)
            {
                  window.alert("Refined data")
            }
            else{
                  window.alert("Garbage data");
            }
            },3000)
            
      })
}