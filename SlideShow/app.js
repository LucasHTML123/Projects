const imgsUrl = [
    'https://img.freepik.com/fotos-gratis/terra-e-galaxia-elementos-desta-imagem-fornecidos-pela-nasa_335224-750.jpg',
    'https://cbissn.ibict.br/images/phocagallery/galeria2/thumbs/phoca_thumb_l_image03_grd.png',
    'https://www.pontotel.com.br/wp-content/uploads/2022/05/imagem-corporativa.jpg'
]

const img = document.querySelector('img')

function first () {
    img.setAttribute('src', imgsUrl[0])
}

function second () {
    img.setAttribute('src', imgsUrl[1])
} 

function third () {
    img.setAttribute('src', imgsUrl[2])
}