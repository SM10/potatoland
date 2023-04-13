import Card from './lib.js'

const Menu = () => {
    
    let Page = () => {
        let aboutcontent = document.createElement('div')
        let pagehead = document.createElement('div')
        pagehead.className = "page-title"
        pagehead.textContent = "Menu"
        aboutcontent.appendChild(pagehead)

        let appetizers = new Card(
            "Appetizers",
            "Hash Browns\t$2 (1pc)\n" +
            "Chips\t$6\n" +
            "Homestyle Hash Brown\t$6\n"
        )
        aboutcontent.appendChild(appetizers)

        let soup = new Card(
            "Soup",
            "Chicken Potato Soup\t$5\n" +
            "Beef Potato Soup\t$7\n" +
            "Vegetable Potato Soup\t$4\n"
        )
        aboutcontent.appendChild(soup)

        let entree = new Card(
            "Entree",
            "Croquee Burger\t$8\n" +
            "Pulled Pork Gnocchi\t$12\n" +
            "Meatball and Mashed Potatoes\t$12\n" +
            "Instant Pot Beef Stew\t$2\n"
        )
        aboutcontent.appendChild(entree)

        let dessert = new Card(
            "Dessert",
            "Mashed Potato Truffles\t$10\n" +
            "Potato Caramel Cake\t$9\n"
        )
        aboutcontent.appendChild(dessert)

        let drinks = new Card(
            "Beverages",
            "Soda\t$1.5\n" +
            "Orange Juice\t$1.5\n" +
            "Grape Drink\t$1.5\n" +
            "Coffee\t$2\n" +
            "Black Tea\t$1.5\n" +
            "Green Tea\t$1.5\n"
        )
        aboutcontent.appendChild(drinks)

        return aboutcontent
    }

    return {Page}
}

export default Menu