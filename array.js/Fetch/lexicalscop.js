
function studentdata()
{
    let id =101;

    function students()
    {
        console.log(id++);
        
    }
    return students;

}
let inner=studentdata();
    inner();
     inner();
     inner();
