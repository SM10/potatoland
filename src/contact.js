import Card from './lib.js'

const ContactCard = (title, content) => {
    let regularCard = new Card(title, content)
    
    let form = document.createElement('form')
    
    let input = document.createElement('input')
    input.className = 'contact-input'
    
}

const Menu = () => {
    
    let Page = () => {
        let aboutcontent = document.createElement('div')
        let pagehead = document.createElement('div')
        pagehead.className = "page-title"
        pagehead.textContent = "Menu"
        aboutcontent.appendChild(pagehead)

        let contact = new Card(
            "Contact Us",
            "1-POTATOLAND (768-286-5263)" +
            "info@potatoland.com" +
            "555 Suburb Plaza St, Markham, Ontario"
        )
        aboutcontent.appendChild(contact)

        return aboutcontent
    }

    return {Page}
}

export default Menu