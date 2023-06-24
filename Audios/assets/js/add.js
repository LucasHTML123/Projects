// Declaring all the consts
const fileInput = document.querySelector('#input-file')
const fileDragBox = document.querySelector('#send-files')

// When the user clicks the drag container
// open the "select file window"
fileDragBox.addEventListener('click', () => {
    fileInput.click()
})

// Create all the drag events
fileDragBox.addEventListener('dragover', e => {
    e.preventDefault()
    fileDragBox.style.border = '2px dashed blue'
})

fileDragBox.addEventListener('dragenter', e => {
    e.preventDefault()
    fileDragBox.style.border = '2px dashed blue'
})

fileDragBox.addEventListener('dragleave', e => {
    e.preventDefault()
    fileDragBox.style.border = '2px dashed gray'
})

// Make the drop event work
fileDragBox.addEventListener('drop', e => {
    e.preventDefault()
    
    const fileData = e.dataTransfer.files[0]
    console.log(fileData)
})