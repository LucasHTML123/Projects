// Discover Operational System
window.addEventListener('load', () => {
    const SO = navigator.userAgent
    if (SO.indexOf('Win') !== -1) win()
    if (SO.indexOf('Win') === -1) linux()
})

// Necessary variables / conts.
const fileInputBox = document.querySelector('#send-files')
const fileInput = document.querySelector('#input-file')


function win() {
    // Make the archive selector open
    fileInputBox.addEventListener('click', () => {
        fileInput.click()
        return
    })    

    fileInputBox.addEventListener('dragover', e => {
        e.preventDefault(); // Evita o comportamento padrão do navegador
        fileInputBox.classList.add('outline');
    });
    
    fileInputBox.addEventListener('dragenter', e => {
        e.preventDefault()
        fileInputBox.classList.add('outline')
    })
    
    fileInputBox.addEventListener('dragleave', e => {
        fileInputBox.classList.remove('outline')
        e.preventDefault()
    })
    
    fileInputBox.addEventListener('drop', e => {
        e.preventDefault()
        const data = e.dataTransfer.files[0]
        fileInputBox.classList.remove('outline')
        const fileName = data.name
        return fileName
    })
}

function linux () {
    // Make the archive selector open
    fileInputBox.addEventListener('click', () => {            
        fileInput.click()
        return
    })        
    // Hide the elements
    document.querySelector('.svgs').classList.remove('shown')
    document.querySelector('.svgs').classList.add('unshown')

    fileInput.addEventListener('change', e => {
        const text = document.querySelector('.text')
        const file = e.target.files[0]
        const fileName = file.name
        const fileType = file.type
        if (fileType !== 'audio/mpeg') return alert('Favor selecionar um arquivo de aúdio .mp3!')
        if (localStorage.getItem(fileName) !== null) return alert('Favor mudar o nome do arquivo! Um arquivo com o mesmo nome já foi encontrado.')
        const i = document.createElement('i')
        i.classList.add('fa-solid', 'fa-file-audio', 'fa-2xl')
        i.style.lineHeight = '1'
        fileInputBox.insertBefore(i, text)
        text.innerText = fileName

        handleEvent(file, fileName)
    })

    function handleEvent (file, filename) {
        const url = URL.createObjectURL(file)
        localStorage.setItem(filename, url)
    }
}