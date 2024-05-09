fetch('https://cat-fact.herokuapp.com/facts'/* , {
    method: 'POST',
    headers: {
        'Content-Type': 'application/json'
    },
    body: JSON.stringify({
        name: ...
    })
} */)
    .then(res => {
        return res.json()
    })
    .then(data => console.log(data))
    .catch()