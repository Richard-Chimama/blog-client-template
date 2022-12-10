

let search = window.location.search
let params = new URLSearchParams(search)
document.querySelector('body').innerHTML += `
                        <div class="">
                            <h1>${params.get("postId")}</h1>
                        </div>`