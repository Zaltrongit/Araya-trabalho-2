function carregarDados() {
    fetch('https://jsonplaceholder.typicode.com/posts/1')
        .then(response => response.json())
        .then(data => {
            document.getElementById('resultado').innerText = JSON.stringify(data, null, 2);
        })
        .catch(error => {
            document.getElementById('resultado').innerText = 'Erro: ' + error.message;
        });
}
