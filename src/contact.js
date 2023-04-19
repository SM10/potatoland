import {Card} from './lib.js'

const ContactCard = (title, content) => {
    let regularCard = Card(title, content)
    
    let form = document.createElement('form')
    form.className = "submit-form"
    
    let input = document.createElement('input')
    input.className = 'contact-input'
    form.appendChild(input)
    let button = document.createElement('button')
    button.className = 'contact-button'
    button.type = 'submit'
    button.textContent = "Submit"
    button.addEventListener('click', (event)=>{
        event.preventDefault();
    })
    form.appendChild(button)

    regularCard.appendChild(form)

    return regularCard
}

const Contact = () => {
    
    let Page = () => {
        let aboutcontent = document.createElement('div')
        aboutcontent.className = 'content-container'

        let contact = ContactCard(
            "Contact Us",
            ["1-POTATOLAND (768-286-5263)",
            "info@potatoland.com",
            "555 Suburb Plaza St, Markham, Ontario"]
        )
        aboutcontent.appendChild(contact)

        return aboutcontent
    }

    return {Page}
}

export default Contact