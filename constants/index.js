export const categories = [
    {
        id : 1,
        name : "Pizza",
        image : require("../assets/images/categories/icons8-pizza-96.png")
    }, 
    {
        id : 2,
        name : "Burger",
        image : require("../assets/images/categories/icons8-hamburger-96.png")
    },
    {
        id : 3,
        name : "Cupcake",
        image : require("../assets/images/categories/icons8-cupcake-emoji-96.png")
    },
    {
        id : 4,
        name : "Spaghetti",
        image : require("../assets/images/categories/icons8-spaghetti-96.png")
    },
    {
        id : 5,
        name : "Takeout",
        image : require("../assets/images/categories/icons8-takeout-box-96.png")
    },
    {
        id : 6,
        name : "Fish",
        image : require("../assets/images/categories/icons8-tropical-fish-96.png")
    },
    {
        id : 7,
        name : "Drink",
        image : require("../assets/images/categories/icons8-tropical-drink-96.png")
    }

]

export const featured = [
    {
        id : 1,
        title : "Hot and Spicy",
        description : "Soft and Tender Fried Chicken",
        restaurants : [
            {
                id : 1,
                name : "Papa Jons",
                description : "Hot and spicy pizzas",
                image : require("../assets/images/restaurants/download (7).jpeg"),
                address : "434 Second Street",
                reviews : "4.4K",
                stars : 4,
                lng : 38.2145602,
                lat : -85.5324269,
                category : "Fast Food",
                dishes : [
                    {
                        id : 1,
                        name : "Burger",
                        image : require("../assets/images/dishes/download (1) (1).jpeg"),
                        price : 10
                    }
                ]
            }
        ]
    }
]
