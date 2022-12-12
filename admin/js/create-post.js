/**
 * This function is triggered by a submit event.
 * The fuction makes a post request and create new data
 */
document.getElementById("create-a-post")
.addEventListener("submit",async (evt)=>{
    evt.preventDefault()

    try{
        const submit = await fetch("https://blog-api-assignment.up.railway.app/posts",{
            method: "POST",
            headers: {
                'Content-Type': 'application/json'
              },
            body: JSON.stringify(serializeForm(evt.target))
    
        })
        
    }catch(err){
        console.log(err)
    }

    location.replace("index.html")

        })//end of submit

    


let serializeForm = function (form) {
    var obj = {};
    var formData = new FormData(form);

    for (var key of formData.keys()) {
        let inputData = formData.getAll(key);

        if (inputData.length > 1) {
            obj[key] = inputData;
        } else {
            obj[key] = inputData[0];    
        }
    }
    
    // console.log(obj);
    return obj;
};