# Algumas habilidades em javascript do console

* $_ Esta funcionalidade contém o resultado da última expressão que foi executada no console.

* Não fique frustrado pelo console apresentar apenas uma única linha de execução. Para contornar a limitação de uma linha, pressione em `Shift`+`Enter` em  vez de `Enter.`

## Solicitações de rede usando await() de nível superior
```js
await ( await fetch(
'https://api.github.com/repos/microsoft/vscode-edge-devtools/issues?state=all&per_page=50&page=1'
)).json();
// As 10 entradas no console são difíceis de reconhecer, pois muitas informações são exibidas.
```

`console.table($_, ['state', 'title', 'number'])` - método de log para receber apenas as informações nas quais você está interessado.

## Referência da API do objeto do console

Assert
Grava um erro no Console quando expression avaliado como false.

`console.assert(expression, object)`

Nível de log: Error

Exemplo:
```js
const x = 5;
const y = 3;
const reason = 'x is expected to be less than y';
console.assert(x < y, {x, y, reason});
```
`console.clear()` - para limpar o console.

//PAREI EM CONTAR - referencia de API do objeto do console