function Data(){
    fetch ('https://jsonplaceholder.typicode.com/users')
.then(res => res.json())
.then(data => getting(data))

}

function getting(data2){
  for(const data of data2){
    console.log(data);
  }
    

}