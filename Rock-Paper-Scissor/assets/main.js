let userPoints = 0
let compPoints = 0
const userPoints_label = document.querySelector('.user-points')
const compPoints_label = document.querySelector('.comp-points')
const msg = document.querySelector('.winner')
const rockBtn = document.querySelector('.rock')
const paperBtn = document.querySelector('.paper')
const scissorBtn = document.querySelector('.scissor')

function randomChoice () {
    const choices = ['rock', 'paper', 'scissor']
    const random = Math.floor(Math.random() * choices.length)
    return choices[random]
}

function win(userChoice, compChoice) {
    userPoints++
    msg.innerHTML = `${userChoice} vence ${compChoice}`
    userPoints_label.innerHTML = userPoints
}

function lose (userChoice, compChoice) {
    compPoints++
    msg.innerHTML = `${userChoice} perde para ${compChoice}`
    compPoints_label.innerHTML = compPoints
}

function draw (userChoice, compChoice) {
    msg.innerHTML = `${userChoice} é igual ${compChoice}`
}

function game (choice) {
    const computer = randomChoice()
    switch (choice + computer) {
        case 'rockscissor':
        case 'scissorpaper':
        case 'paperrock':
            win(choice, computer)
            break
        case 'rockpaper':
        case 'scissorrock':
        case 'paperscissor':
            lose(choice, computer)
            break
        case 'rockrock':
        case 'scissorscissor':
        case 'paperpaper':
            draw(choice, computer)
            break
    }
}

function main () {
    rockBtn.addEventListener('click', () => {
        game('rock')
    })
    
    paperBtn.addEventListener('click', () => {
        game('paper')
    })

    scissorBtn.addEventListener('click', () => {
        game('scissor')
    })
}
main()