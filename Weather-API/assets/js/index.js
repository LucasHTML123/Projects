window.onload = () => {
    input.focus()
}


// APIs
const apiKey = 'd6cc344451e60e3b0e1976fcb624e250'
const flagsUrl = 'https://flagsapi.com/BR/flat/32.png'

// HTML Elements
const input = document.querySelector('#city-input')
const sendBtn = document.querySelector('#btn')
const cityName = document.querySelector('#city-name')
const countryFlag = document.querySelector('#country-flag')
const temp = document.querySelector('#weather')
const humidity = document.querySelector('#humidity-text')
const wind = document.querySelector('#wind-text')
const weatherDesc = document.querySelector('#weather-description-text')
const weatherIcon = document.querySelector('#weather-icon')
const pError = document.querySelector('#error')

class WeatherApp {
    constructor (city) {
        this.city = city
    }
    // Functions

    async receiveData() {
        const apiWeatherUrl = `https://api.openweathermap.org/data/2.5/weather?q=${this.city}&units=metric&lang=pt_br&appid=${apiKey}`

        const response = await fetch(apiWeatherUrl)
        const data = await response.json()
        return data
    }

    async showData() {
        const data = await this.receiveData()
        if (data.cod == '404') {
            document.querySelector('.api-info').setAttribute('id', 'hidden')
            pError.innerText = 'City not found!'
            input.value = ''
            input.focus()
            return
        }

        pError.innerText = ''

        cityName.innerText = data.name
        countryFlag.setAttribute('src', `https://flagsapi.com/${data.sys.country}/flat/32.png`)
        temp.innerHTML = parseInt(data.main.temp) + '&deg;C'
        humidity.innerHTML = `<i class="fa-solid fa-droplet"></i>${data.main.humidity}%`
        wind.innerHTML = `<i class="fa-solid fa-wind"></i>${data.wind.speed}km/h`
        weatherDesc.innerText = data.weather[0].description
        weatherIcon.setAttribute('src', `https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`)
        
        document.querySelector('.api-info').removeAttribute('id')

        input.setAttribute('placeholder', input.value)
        input.value = ''
    }
}

sendBtn.addEventListener('click', (e) => {
    e.preventDefault()

    input.focus()
    const city = input.value

    const app = new WeatherApp(city)
    app.showData()
})

document.addEventListener('keyup', e => {
    if (e.key === 'Enter') {
        e.preventDefault()

        const city = input.value
        const app = new WeatherApp(city)
        app.showData()
    }
})