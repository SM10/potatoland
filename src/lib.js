const Card = (title, contents) => {
        let card = document.createElement('div')
        card.className = "card"

        let head = document.createElement('h4')
        head.textContent = title
        head.className = "card-title"
        card.appendChild(head)

        contents.forEach(content => {
                let body = document.createElement('p')
        body.textContent = content
        body.className = "card-body"
        card.appendChild(body)
})

        return card;
}

export {Card}