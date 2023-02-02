fetch('https://jsonplaceholder.typicode.com/users?_limit=2')
.then(response => response.json())
.then(data => {
    fetch(data.email)
    .then(res => res.json()
    .then(data => console.log(data))
    )})


