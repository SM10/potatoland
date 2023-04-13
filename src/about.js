import Card from './lib.js'

const About = () => {
    
    let Page = () => {
        let aboutcontent = document.createElement('div')
        let pagehead = document.createElement('div')
        pagehead.className = "page-title"
        pagehead.textContent = "PotatoLand"
        aboutcontent.appendChild(pagehead)

        let about = new Card(
            "",
            "The best potatoes in town! We serve only the best free-range, grass-fed potatoes, picked freshly off their trees every morning."
        )
        aboutcontent.appendChild(about)

        let hours = new Card(
            "Business Hours",
            "Sunday: 10am - 8pm\nMonday: 7am - 10pm\nTuesday: 7am - 10pm\nWednesday: 7am - 10pm\nThursday: 7am - 10pm\nFriday: 7am - 2am\nSaturday: 7am - 2am"
        )
        aboutcontent.appendChild(hours)

        let location = new Card(
            "Location",
            "555 Suburb Plaza St, Markham, Ontario"
        )
        aboutcontent.appendChild(location)

        return aboutcontent
    }

    return {Page}
}

export default About