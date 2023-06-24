window.onload = () => {
    document.querySelector('.display').readOnly = true;
}

const display = document.querySelector('.display')
class Calculadora {
    clicks() {
        document.addEventListener('click', e => {
            const el = e.target
            if (el.classList.contains('btn-num')) this.numberOnDisplay('click', el)
            if (el.classList.contains('btn-del')) this.cutOne()
            if (el.classList.contains('btn-clear')) this.clearDisplay()
            if (el.classList.contains('btn-eq')) this.equals()
        })
    }

    equals() {
        try {
            const conta = eval(display.value)
            if (!display.value && !conta) return alert('Favor preencher')
            display.value = conta
        } catch {
            alert('Erro')
            return
        }
    }

    clearDisplay() {
        display.value = ''
        display.focus()
    }

    cutOne() {
        display.value = display.value.slice(0, -1)
        display.focus()
    }
    
    numberOnDisplay(way, el) {
        if (way === 'click') display.value += el.innerText;
        if (way === 'btn') display.value += el
        display.focus()
    }

    keyboard() {
        document.addEventListener('keyup', e => {
            console.log(e.key)
            const key = e.key
            switch (key) {
                case 'Enter':
                    this.equals()
                    break
                case '1':
                case '2':
                case '3':
                case '4':
                case '5':
                case '6':
                case '7':
                case '8':
                case '9':
                case '0':
                case '*':
                case '/':
                case '+':
                case '(':
                case ')':
                case '-':
                case '.':
                    this.numberOnDisplay('btn', key)
                    break
                case 'Backspace':
                    this.cutOne()
                    break
                case 'x' || 'X':
                    this.numberOnDisplay('btn', '*')
                    break
                case ',':
                    this.numberOnDisplay('btn', '.')
                    break
            }
        })
    }

    inicia() {
        this.clicks()
        this.keyboard()
    }
}

const calc = new Calculadora()
calc.inicia()