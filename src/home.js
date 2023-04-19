import {Card} from './lib.js'

const Home = () => {
    
    let Page = () => {
        let aboutcontent = document.createElement('div')
        aboutcontent.className = 'content-container'

        let about = Card(
            "PotatoLand",
            ["The best potatoes in town! We serve only the best free-range, grass-fed potatoes, picked freshly off their trees every morning."]
        )
        aboutcontent.appendChild(about)

        let hours = Card(
            "Business Hours",
            ["Sunday: 10am - 8pm", "Monday: 7am - 10pm", "Tuesday: 7am - 10pm","Wednesday: 7am - 10pm","Thursday: 7am - 10pm","Friday: 7am - 2am","Saturday: 7am - 2am"]
        )
        aboutcontent.appendChild(hours)

        let location = Card(
            "Location",
            ["555 Suburb Plaza St, Markham, Ontario"]
        )
        aboutcontent.appendChild(location)

        return aboutcontent
    }

    return {Page}
}

export default Home