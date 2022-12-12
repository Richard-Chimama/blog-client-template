

let search = window.location.search //get the url
let params = new URLSearchParams(search) //search for the arguments passed in the url

/**
 * this function retrieve a specific data from the database based on the 
 * given post id. The data is then passed in side the form ready to be updated 
 */
try{
    const getPost = async () =>{
        const postInfo = await fetch("https://blog-api-assignment.up.railway.app/posts/" + params.get("postId"))
        const response = await postInfo.json()

        
        document.getElementById("title").setAttribute("value",response.title) 
        document.getElementById("author").setAttribute("value",response.author) 
        document.getElementById("content").textContent = response.content
        
        const options = document.querySelectorAll("#tags option")
            /*
              Seeing that we have different set of tags from the table
              this code loop through the tags and make sure no tags is
              repeated twice.
             */
            let tempArray = []
            for(let tag of response.tags) {
                options.forEach((option)=>{
                    tempArray.push(option.dataset.value)
                    if(tag === option.dataset.value){
                        option.setAttribute("selected", "")
                    }else{
                        if(!tempArray.includes(tag)){
                            document.querySelector("#tags").innerHTML +=`
                                        <option value="${tag}" data-value="${tag}" selected>${tag}</option>                    
                            `
                            tempArray.push(tag)
                        }
                    }
                })
            }
            
        }
    getPost()
}catch(err){
    console.log(err)
}


/**
 * Upon the click of the update button
 * the function makes an update request
 * and update the data from the server with new information
 */
document.getElementById("update-post")
.addEventListener("submit",async (evt)=>{
    evt.preventDefault()

    try{
        const submit = await fetch("https://blog-api-assignment.up.railway.app/posts/"+params.get("postId"),{
            method: "PATCH",
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
