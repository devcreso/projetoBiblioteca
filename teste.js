const livros = require('./database')

const arr = [1, 1, 2, 2, 3, 3, "teste", "teste"];
const arrUnique = [...new Set(arr)];
let categorias = []
console.log(arrUnique)

livros.forEach(livro => {
    categorias.push(livro.categoria)
})

const categoriasFiltradas = [...new Set(categorias)]
console.log(categoriasFiltradas)
