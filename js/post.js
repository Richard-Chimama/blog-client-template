

let search = window.location.search 
let params = new URLSearchParams(search) 

try {
    const getPost = async () =>{
        const postInfo = await fetch("https://blog-api-assignment.up.railway.app/posts/" + params.get("postID"))
        const res = await postInfo.json()    

        console.log('params.get("postId")', params.get("postID"))
        console.log('response', res)
        
        htmlContent = `
                <div data-id=${res._id}>
                    <h3>${res.title}</h3>
                    <div>${res.author}</</div>
                    <p>${res.date}</p>
                    <p> 
                        ${res.content}
                    </p>
                </div>
            `;
        
        for(tag of res.tags){
            let firstPart = ""
            
            htmlContent += `
                <div class="tags">
                    <ul>
                        <li>${tag}</li>
                    </ul>
                </div>
            `
        }
        
        document.getElementById('single-post').innerHTML = htmlContent        
    }

    getPost()

} catch(err) {
    console.log(err)
}