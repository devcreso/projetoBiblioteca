const livros = require('./database')

//pegar o input para a pessoas poder escolher categoria

const readLine = require('readline-sync')

const entradaInicial = readLine.question('Deseja buscar um livro por categoria(S/N)? ')

//se for sim, mostra as catorias e pergunta qual a pessoa quer
//se for não, mostra todos os livros em ordem crescente de páginas
let categorias = []
livros.forEach(livro => {
    categorias.push(livro.categoria)
})
const categoriasFiltradas = [...new Set(categorias)]

if (entradaInicial.toUpperCase() === 'S') {
    console.log('\nAs categorias disponiveis sao:')
    console.table(categoriasFiltradas)
    console.log('')
    const categoriaDesejada = readLine.question('Qual categoria voce deseja(Nome)? ')
    const retorno = livros.filter(livro => livro.categoria.toUpperCase() === categoriaDesejada.toUpperCase())

    if (retorno.length !== 0) {
        return console.table(retorno)
    }
    else {
        return console.log(`Essa categoria não existe!!`)
    }
}else{
    const livrosOrdenados = livros.sort((a,b) => a.id - b.id)
    console.log('Esses são todos os livros disponíveis\n')
    console.table(livrosOrdenados)
}
