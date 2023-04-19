import {Card} from './lib.js'

const Menu = () => {
    
    let Page = () => {
        let aboutcontent = document.createElement('div')
        aboutcontent.className = 'content-container'

        let appetizers = Card(
            "Appetizers",
            ["Hash Browns\t$2 (1pc)",
            "Chips\t$6",
            "Homestyle Hash Brown\t$6"]
        )
        aboutcontent.appendChild(appetizers)

        let soup = Card(
            "Soup",
            ["Chicken Potato Soup\t$5",
            "Beef Potato Soup\t$7",
            "Vegetable Potato Soup\t$4"]
        )
        aboutcontent.appendChild(soup)

        let entree = Card(
            "Entree",
            ["Croquee Burger\t$8",
            "Pulled Pork Gnocchi\t$12",
            "Meatball and Mashed Potatoes\t$12",
            "Instant Pot Beef Stew\t$2"]
        )
        aboutcontent.appendChild(entree)

        let dessert = Card(
            "Dessert",
            ["Mashed Potato Truffles\t$10",
            "Potato Caramel Cake\t$9"]
        )
        aboutcontent.appendChild(dessert)

        let drinks = Card(
            "Beverages",
            ["Soda\t$1.5", 
            "Orange Juice\t$1.5",
            "Grape Drink\t$1.5",
            "Coffee\t$2",
            "Black Tea\t$1.5",
            "Green Tea\t$1.5"]
        )
        aboutcontent.appendChild(drinks)

        return aboutcontent
    }

    return {Page}
}

export default Menu