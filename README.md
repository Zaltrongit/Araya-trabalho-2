# Comparação: XMLHttpRequest, Fetch, Promises e Async/Await

## Introdução

Este repositório contém quatro implementações de uma chamada AJAX para a API pública [JSONPlaceholder](https://jsonplaceholder.typicode.com/):

- **XMLHttpRequest** (padrão tradicional)
- **Fetch** (padrão moderno)
- **Promises** (usando XMLHttpRequest encapsulado)
- **Async/Await** (sintaxe moderna baseada em Promises)

---

## Códigos

Os exemplos estão na pasta `/js` e podem ser testados abrindo os arquivos `.html` correspondentes no navegador.

---

## Comparação de Desempenho e Facilidade de Uso

| Critério                 | XMLHttpRequest                       | Fetch                               | Promises                             | Async/Await                          |
| ----------------------- | ------------------------------------- | ----------------------------------- | ------------------------------------ | ------------------------------------ |
| **Desempenho**          | Muito bom, mas com código verboso     | Muito bom, mais moderno             | Igual ao XMLHttpRequest              | Igual ao Fetch                       |
| **Facilidade de uso**   | Complexo: manipula estados e callbacks | Simples, com `.then()` e `.catch()` | Médio: requer encapsular o XHR       | Muito simples, sintaxe síncrona      |
| **Tratamento de erro**  | Mais trabalhoso                       | Mais intuitivo                      | Requer lógica extra                  | Natural com `try/catch`              |
| **Compatibilidade**     | Compatível com todos navegadores      | Não suportado em versões muito antigas | Compatível via XHR                  | Requer ES2017+ (não compatível com IE) |
| **Manutenção**          | Difícil: código mais extenso          | Fácil: código mais legível          | Médio: estrutura mais limpa          | Muito fácil e intuitivo              |

---

## 📝 **Conclusão**

- **XMLHttpRequest** é ideal para projetos que precisam de compatibilidade com navegadores antigos, mas sua complexidade é maior.
- **Fetch** é mais legível, moderno e fácil de usar.
- **Promises** são um avanço sobre callbacks, mas ainda podem gerar códigos complexos.
- **Async/Await** é a forma mais elegante e legível, simplificando a escrita e leitura do código assíncrono.

---

## Como testar

1. Clone o repositório.
2. Abra cada arquivo `.html` no navegador.
3. Clique no botão "Carregar Dados" e observe o resultado.

---

## Tecnologias

- HTML5
- JavaScript (ES6+)
- JSONPlaceholder API

---

## Estrutura

