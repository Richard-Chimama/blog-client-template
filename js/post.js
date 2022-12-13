

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
                    <div><b>Author:</b> ${res.author}</</div>
                    <p><b>Date:</b> ${new Date(res.date).toDateString()}</p>
                    <p> 
                        ${res.content}
                    </p>
                    <p>Tags:</p>
                </div>
            `;
        
        for(tag of res.tags){            
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