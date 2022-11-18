# Sintaxe
Toda linguagem tem uma boa comunicação e necessita de uma boa sintaxe

# Tipos de dados
 * Gramática
 * Elementos da linguagem e suas combinações
 * A arte de falar e escrever corretamente

 # Vocabulário
 -> Significado das coisas

 # Undefined é diferente de null
 *null = (algo que existe, mas não tem nada dentro dele)objeto que não possui nada dentro
 *undefined = indefinido(não existe)

 # Object
 * Array
 * Map
 * Set
 * Date
 * ...
 * Function
 ## Primitivo e estrutural
 * null(caixa vazia)
# Variáveis 
* Nomes simb[olicos para receber algum valor
* atalhos de código
* identificadores
* 3 palavras reservadas para criar uma variável
    * var
    * let
    * const

# Tipos dinamicos
* O JS é uma linguagem fracamente tipada e dinamica
- Variáveis não precisam ter um tipo previamente definido
- Podemos mudar o conteúdo da variável
* lembrando que uma constante não pode ser alterada(Não posso atribuir vários valores nela)

# Scope
* Escopo determina a visiilidade de alguma variável no JS

# Block steatement(declaração)
``` js
    // vamos iniciar um bloco
    {
        // aqui dentro é um bloco e posso colocar qualquer código
        // aqui fechamos o bloco
    }
```
O bloco, também criará um novo escopo. Chamamos de `block-scoped`

## var
``` js
    //var é global e poderá funcionar fora de um escopo de bloco
    console.log('> existe x antes do bloco? ', x)
    {
        var x = 0
    }
    console.log('> existe x antes do bloco', x)
```