async function carregarDados() {
    try {
        const response = await fetch('https://jsonplaceholder.typicode.com/posts/1');
        if (!response.ok) {
            throw new Error('Erro: ' + response.status);
        }
        const data = await response.json();
        document.getElementById('resultado').innerText = JSON.stringify(data, null, 2);
    } catch (error) {
        document.getElementById('resultado').innerText = error.message;
    }
}
