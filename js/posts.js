

const posts = async ()=>{
    try{
        const getPosts = await fetch("https://blog-api-assignment.up.railway.app/posts")
        const data = await getPosts.json()

        let htmlContent = ''

        for(d of data){
            let firstPart = ""
            let secondPart = ""
            for(s in d.content){
                if(s < 100){
                    firstPart += d.content[s]
                }else{
                    secondPart += d.content[s]
                }
            }
            htmlContent += `
                <div data-id=${d._id}>
                    <h2>${d.title}</h2>
                    <p>${d.author}</</p>
                    <p>${d.date}</p>
                    <p> 
                        <span>${firstPart}</span>
                        <a href="post.html">read more...</a>
                    </p>
                </div>
            `
        }

        document.getElementById('root').innerHTML = htmlContent

        console.log(data)

    }catch(err){
        console.log("HTTP Error: ", err)
    }
}

posts()