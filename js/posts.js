

const posts = async ()=>{
    try{
        const getPosts = await fetch("https://blog-api-assignment.up.railway.app/posts")
        const data = await getPosts.json()

        let htmlContent = ''

        for(d of data){
            let firstPart = ""
         
            for(s in d.content){
                if(s < 100){
                    firstPart += d.content[s]
                }
            }
            htmlContent += `
                <div data-id=${d._id} class="articles">
                    <h3>${d.title}</h3>
                    <div class="article-info">
                        <p><strong>Author:</strong> ${d.author}</</p>
                        <p><strong>Date:</strong> <i>${ new Date(d.date).toDateString()}</i></p>
                    </div>
                    <p> 
                        <span>${firstPart}</span>
                        <a href="post.html?postID=${d._id}">read more...</a>
                    </p>
                </div>
            `
        }
        document.getElementById('root').innerHTML = htmlContent

    }catch(err){
        console.log("HTTP Error: ", err)
    }
}

posts()