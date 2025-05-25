function requisicao(url) {
    return new Promise(function(resolve, reject) {
        const xhr = new XMLHttpRequest();
        xhr.open('GET', url);
        xhr.onload = () => {
            if (xhr.status === 200) {
                resolve(xhr.responseText);
            } else {
                reject('Erro: ' + xhr.status);
            }
        };
        xhr.onerror = () => reject('Erro de rede');
        xhr.send();
    });
}

function carregarDados() {
    requisicao('https://jsonplaceholder.typicode.com/posts/1')
        .then(response => {
            document.getElementById('resultado').innerText = response;
        })
        .catch(error => {
            document.getElementById('resultado').innerText = error;
        });
}
