/**
 * The function manage two API calls and polulate the table with data.
 * The first API call retrieve data from the server, create the html element 
 * and then insert the data into the table element in index.html page
 * 
 * The second API request is triggered when the delete button is clicked.
 * The call makes a delete request and remove the specific data from both 
 * the server and the table
 */
const posts = async ()=>{
    try{
        const getPosts = await fetch("https://blog-api-assignment.up.railway.app/posts")
        const data = await getPosts.json()

        let htmlContent = ''

        for(d of data){
            htmlContent += `
                <tr id=${d._id}>
                    <td class="data">${d.title}</td>
                    <td class="data">${d.author}</td>
                    <td class="data">${d.tags != null ? d.tags.join(', '):""}</td>
                    <td class="data">${new Date(d.date).toDateString()}</td>
                    <td class="data manage-col">
                        <a href="update-post.html?postId=${d._id}"><i class="fa-regular fa-pen-to-square"></i> Update</a> |
                        <a href="#" data-id=${d._id} class="delete" ><i class="fa-solid fa-trash"></i> Delete</a>
                    </td>
                </tr>
            `
        }

        document.getElementById('table-body').innerHTML = htmlContent

        const deletes = document.querySelectorAll(".delete")
        deletes.forEach((del)=>{
                del.addEventListener("click",async (e)=>{
                    e.preventDefault() 
                    try{
                        await fetch("https://blog-api-assignment.up.railway.app/posts/"+e.target.dataset.id,{
                            method:"DELETE"
                        })
                        let parent = e.target.parentNode.parentNode
                        parent.remove()

                    }catch(err){
                        console.log(err)
                    }
                })
        })

        
    }catch(err){
        console.log("HTTP Error: ", err)
    }
}
posts()
