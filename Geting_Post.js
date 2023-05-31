function Cbutton(){
    fetch("https://jsonplaceholder.typicode.com/posts")
  .then((Response) => Response.json())
  .then((data) => getting(data))

}

function getting(datas) {
  const ParentDives = document.getElementById("parent_div");
  

  for (const data of datas) {
    const div = document.createElement("div");
    div.classList.add('backg')
    div.innerHTML = `
         <h5>
                user ${data.id}
         </h5>

    <h3>
            Title ${data.title}
    </h3>
    <p>
        Post ${data.body}
    </p>
         `;

         ParentDives.appendChild(div);
  }
}
