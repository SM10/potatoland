import Home from './home.js'
import Menu from './menu.js'
import Contact from './contact.js'

const pages = ['Home', 'Menu', 'Contact']
const importedfunctions = {Home, Menu, Contact}

//main
let content = document.querySelector("#content")
content.appendChild(CreateHeader())
content.appendChild(CreateBody())

function CreateHeader(){
    let header = document.createElement('div')
    header.className = 'content-header'

    let titlehead = document.createElement('div')
    titlehead.className = 'header-title'
    titlehead.textContent = 'PotatoLand'
    header.appendChild(titlehead)

    let buttonhead = document.createElement('div')
    buttonhead.className = 'header-button-container'
    
    pages.forEach((pagename) => {
        let pagebutton = document.createElement('button')
        pagebutton.className = 'header-button'
        pagebutton.id = pagename.toLowerCase() + '-button'
        pagebutton.textContent = pagename
        pagebutton.addEventListener('click', ()=>{
            let newcontent = importedfunctions[pagename]().Page()
            let contentbody = document.querySelector('.content-body')
            contentbody.innerHTML = ''
            contentbody.appendChild(newcontent)
        })
        buttonhead.appendChild(pagebutton)
    })
    
    header.appendChild(buttonhead)

    return header
}

function CreateBody(){
    let body = document.createElement('div')
    body.className = 'content-body'
    return body
}