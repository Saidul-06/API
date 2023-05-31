function buttons(){
    fetch("https://jsonplaceholder.typicode.com/users")
.then(Response => Response.json())
.then(data => ValuesOf(data))

}


function ValuesOf(Datas){
    const  ul = document.getElementById('Ul_lis')
    for(const dat of Datas){
        const li = document.createElement('li');
        li.innerText = dat.name;
        ul.appendChild(li);

    }
}
