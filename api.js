function loadData(){
    fetch('https://jsonplaceholder.typicode.com/todos/1')
      .then(x => x.json())
      .then(json => console.log(json))

}