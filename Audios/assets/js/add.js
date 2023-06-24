// Make the click open the select file window
const fileInputBox = document.querySelector('#send-files')
const fileInput = document.querySelector('#input-file')

fileInputBox.addEventListener('click', () => {
    fileInput.click()
})

fileInputBox.addEventListener('dragover', e => {
    e.preventDefault(); // Evita o comportamento padrão do navegador
    fileInputBox.classList.add('outline');
});

fileInputBox.addEventListener('dragenter', e => {
    fileInputBox.classList.add('outline')
    e.preventDefault()
})

fileInputBox.addEventListener('dragleave', () => {
    fileInputBox.classList.remove('outline')
})

fileInputBox.addEventListener('drop', e => {
    e.preventDefault()
    const data = e.dataTransfer.files[0]
    console.log(data, data.name, data.type)
    fileInputBox.classList.remove('outline')
    const fileName = data.name
    return fileName
})