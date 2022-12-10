const posts = async ()=>{
    try{
        const getPosts = await fetch("https://blog-api-assignment.up.railway.app/posts")
        const data = await getPosts.json()

        let htmlContent = ''

        for(d of data){
            htmlContent += `
                <tr id=${d._id}>
                    <td >${data.indexOf(d)+1}</td>
                    <td class="data">${d.title}</td>
                    <td class="data">${d.author}</td>
                    <td class="data">${d.tags.join(', ')}</td>
                    <td class="data">${new Date(d.date).toDateString()}</td>
                    <td class="data">
                        <a href="update-post.html?postId=${d._id}">Update</a> | <a href="#">Delete</a>
                    </td>
                </tr>
            `
        }

        document.getElementById('table-body').innerHTML = htmlContent


    }catch(err){
        console.log("HTTP Error: ", err)
    }
}

posts()