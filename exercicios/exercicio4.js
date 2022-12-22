/* Buscando e contando dados em arrays

Baseado no array de livros por categoria abaixo, faça os seguintes desafios 
    * Contar o número de categorias e o número de livros em cada categoria
    * Contar o número de autores
    * Mostrar livros do autor Augusto Cury
    * Transformar a função acima em uma função que irá receber o nome do autor e devolver os livros desse autor
*/

const booksByCategory = [
    {
        category: 'Riqueza',
        books: [
            {
                title: "Os segredos da mente milionária",
                author: "T. Harv Eker"
            },
            {
                title: "O homem mais rico da babilonia",
                author: "S. George Clason"
            },
            {
                title: "Pai rico, pai pobre",
                author: "Robert Kiyosaki"
            }
        ],
        },
    {
        category: 'Inteligencia emocional',
        books: [
            {
                title: "Os segredos da mente milionária",
                author: "T. Harv Eker"
            },
            {
                title: "Ansiedade, como enfrentar o mau do século",
                author: "Augusto Cury"
            },
            {
                title: "Os 7 hábitos das pessoas altamente eficazes",
                author: "Stephen Covey"
            }
        ],
        },
   
]

const totalCategories = booksByCategory.length
    console.log(totalCategories)
for(let category of booksByCategory) {
    console.log("Total de livros da categoria", category.category)
    console.log(category.books.length)

}

function countAuthors(){
    let authors = []
    for(let category of booksByCategory){
        for(let book of category.books){
            if(authors.indexOf(book.author) == -1){
                authors.push(book.author)
            }

        }
    }
    console.log("Total de autores", authors.length)

}
countAuthors()