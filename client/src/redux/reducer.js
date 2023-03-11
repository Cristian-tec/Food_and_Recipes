import {
    SEARCH_RECIPES,
    GET_RECIPE_DETAIL,
    SEARCH_RECIPES_DIET,
    ORDER_SCORE,
    ORDER_ALPH,
    CLEAN_DETAIL,
    DELETE_RECIPE,
    FILTER_RESET,
    CLEAN_RECIPE
} from './actions'

const apiData = [
    {
        "vegetarian": true,
        "vegan": true,
        "glutenFree": true,
        "dairyFree": true,
        "veryHealthy": true,
        "cheap": false,
        "veryPopular": false,
        "sustainable": false,
        "lowFodmap": false,
        "weightWatcherSmartPoints": 12,
        "gaps": "no",
        "preparationMinutes": -1,
        "cookingMinutes": -1,
        "aggregateLikes": 309,
        "healthScore": 100,
        "creditsText": "blogspot.com",
        "sourceName": "blogspot.com",
        "pricePerServing": 134.63,
        "id": 782585,
        "title": "Cannellini Bean and Asparagus Salad with Mushrooms",
        "readyInMinutes": 45,
        "servings": 6,
        "sourceUrl": "http://foodandspice.blogspot.com/2016/05/cannellini-bean-and-asparagus-salad.html",
        "image": "https://spoonacular.com/recipeImages/782585-312x231.jpg",
        "imageType": "jpg",
        "summary": "Cannellini Bean and Asparagus Salad with Mushrooms requires approximately <b>45 minutes</b> from start to finish. This main course has <b>482 calories</b>, <b>31g of protein</b>, and <b>6g of fat</b> per serving. This gluten free, dairy free, lacto ovo vegetarian, and vegan recipe serves 6 and costs <b>$1.35 per serving</b>. 309 people were impressed by this recipe. Head to the store and pick up grain mustard, sea salt, lemon zest, and a few other things to make it today. It is brought to you by foodandspice.blogspot.com. Taking all factors into account, this recipe <b>earns a spoonacular score of 70%</b>, which is pretty good. Similar recipes are <a href=\"https://spoonacular.com/recipes/cannellini-bean-salad-422994\">Cannellini Bean Salad</a>, <a href=\"https://spoonacular.com/recipes/refreshing-cannellini-bean-salad-113127\">Refreshing Cannellini Bean Salad</a>, and <a href=\"https://spoonacular.com/recipes/cannellini-and-green-bean-salad-33177\">Cannellini-and-Green Bean Salad</a>.",
        "cuisines": [],
        "dishTypes": [
            "side dish",
            "lunch",
            "main course",
            "salad",
            "main dish",
            "dinner"
        ],
        "diets": [
            "gluten free",
            "dairy free",
            "lacto ovo vegetarian",
            "vegan"
        ],
        "occasions": [],
        "analyzedInstructions": [
            {
                "name": "",
                "steps": [
                    {
                        "number": 1,
                        "step": "Rinse the cannellini beans and soak for 8 hours or overnight in several inches of water.",
                        "ingredients": [
                            {
                                "id": 10716050,
                                "name": "cannellini beans",
                                "localizedName": "cannellini beans",
                                "image": "cooked-cannellini-beans.png"
                            },
                            {
                                "id": 14412,
                                "name": "water",
                                "localizedName": "water",
                                "image": "water.png"
                            }
                        ],
                        "equipment": [],
                        "length": {
                            "number": 480,
                            "unit": "minutes"
                        }
                    },
                    {
                        "number": 2,
                        "step": "Drain and rinse, then transfer to a medium saucepan and cover with fresh water.",
                        "ingredients": [
                            {
                                "id": 14412,
                                "name": "water",
                                "localizedName": "water",
                                "image": "water.png"
                            }
                        ],
                        "equipment": [
                            {
                                "id": 404669,
                                "name": "sauce pan",
                                "localizedName": "sauce pan",
                                "image": "sauce-pan.jpg"
                            }
                        ]
                    },
                    {
                        "number": 3,
                        "step": "Add the curry leaves or bay leaf and bring to a boil. Reduce heat to medium-low, cover, and simmer for 1 hour or until the beans are tender but not falling apart.",
                        "ingredients": [
                            {
                                "id": 93604,
                                "name": "curry leaves",
                                "localizedName": "curry leaves",
                                "image": "curry-leaves.jpg"
                            },
                            {
                                "id": 2004,
                                "name": "bay leaves",
                                "localizedName": "bay leaves",
                                "image": "bay-leaves.jpg"
                            },
                            {
                                "id": 0,
                                "name": "beans",
                                "localizedName": "beans",
                                "image": "kidney-beans.jpg"
                            }
                        ],
                        "equipment": [],
                        "length": {
                            "number": 60,
                            "unit": "minutes"
                        }
                    },
                    {
                        "number": 4,
                        "step": "Drain and transfer to a large salad bowl.Meanwhile, snap the woody ends off of the asparagus spears and steam the spears for 6 minutes or until just tender but still retaining their crunch.",
                        "ingredients": [
                            {
                                "id": 11011,
                                "name": "asparagus",
                                "localizedName": "asparagus",
                                "image": "asparagus.png"
                            }
                        ],
                        "equipment": [
                            {
                                "id": 404783,
                                "name": "bowl",
                                "localizedName": "bowl",
                                "image": "bowl.jpg"
                            }
                        ],
                        "length": {
                            "number": 6,
                            "unit": "minutes"
                        }
                    },
                    {
                        "number": 5,
                        "step": "Transfer to the salad bowl.Now cook the mushrooms.",
                        "ingredients": [
                            {
                                "id": 11260,
                                "name": "mushrooms",
                                "localizedName": "mushrooms",
                                "image": "mushrooms.png"
                            }
                        ],
                        "equipment": [
                            {
                                "id": 404783,
                                "name": "bowl",
                                "localizedName": "bowl",
                                "image": "bowl.jpg"
                            }
                        ]
                    },
                    {
                        "number": 6,
                        "step": "Heat the oil in a large skillet over high heat. As soon as the oil is hot, drop in the mushrooms and cook, stirring constantly, for 5 minutes or until the mushrooms begin to brown and lose some of their liquid.",
                        "ingredients": [
                            {
                                "id": 11260,
                                "name": "mushrooms",
                                "localizedName": "mushrooms",
                                "image": "mushrooms.png"
                            },
                            {
                                "id": 4582,
                                "name": "cooking oil",
                                "localizedName": "cooking oil",
                                "image": "vegetable-oil.jpg"
                            }
                        ],
                        "equipment": [
                            {
                                "id": 404645,
                                "name": "frying pan",
                                "localizedName": "frying pan",
                                "image": "pan.png"
                            }
                        ],
                        "length": {
                            "number": 5,
                            "unit": "minutes"
                        }
                    },
                    {
                        "number": 7,
                        "step": "Transfer to the bowl with the asparagus.To make the dressing, combine the tarragon, lemon zest, garlic, lemon juice, olive oil and mustard in a small food processor or blender. Process until smooth.",
                        "ingredients": [
                            {
                                "id": 9152,
                                "name": "lemon juice",
                                "localizedName": "lemon juice",
                                "image": "lemon-juice.jpg"
                            },
                            {
                                "id": 9156,
                                "name": "lemon zest",
                                "localizedName": "lemon zest",
                                "image": "zest-lemon.jpg"
                            },
                            {
                                "id": 11011,
                                "name": "asparagus",
                                "localizedName": "asparagus",
                                "image": "asparagus.png"
                            },
                            {
                                "id": 4053,
                                "name": "olive oil",
                                "localizedName": "olive oil",
                                "image": "olive-oil.jpg"
                            },
                            {
                                "id": 2041,
                                "name": "tarragon",
                                "localizedName": "tarragon",
                                "image": "tarragon.jpg"
                            },
                            {
                                "id": 2046,
                                "name": "mustard",
                                "localizedName": "mustard",
                                "image": "regular-mustard.jpg"
                            },
                            {
                                "id": 11215,
                                "name": "garlic",
                                "localizedName": "garlic",
                                "image": "garlic.png"
                            }
                        ],
                        "equipment": [
                            {
                                "id": 404771,
                                "name": "food processor",
                                "localizedName": "food processor",
                                "image": "food-processor.png"
                            },
                            {
                                "id": 404726,
                                "name": "blender",
                                "localizedName": "blender",
                                "image": "blender.png"
                            },
                            {
                                "id": 404783,
                                "name": "bowl",
                                "localizedName": "bowl",
                                "image": "bowl.jpg"
                            }
                        ]
                    },
                    {
                        "number": 8,
                        "step": "Pour the dressing over the salad, season with salt and pepper, and toss.",
                        "ingredients": [
                            {
                                "id": 1102047,
                                "name": "salt and pepper",
                                "localizedName": "salt and pepper",
                                "image": "salt-and-pepper.jpg"
                            }
                        ],
                        "equipment": []
                    },
                    {
                        "number": 9,
                        "step": "Serve at room temperature or chilled.",
                        "ingredients": [],
                        "equipment": []
                    }
                ]
            }
        ],
        "spoonacularSourceUrl": "https://spoonacular.com/cannellini-bean-and-asparagus-salad-with-mushrooms-782585"
    },
    {
        "vegetarian": true,
        "vegan": true,
        "glutenFree": true,
        "dairyFree": true,
        "veryHealthy": true,
        "cheap": false,
        "veryPopular": true,
        "sustainable": false,
        "lowFodmap": false,
        "weightWatcherSmartPoints": 4,
        "gaps": "no",
        "preparationMinutes": -1,
        "cookingMinutes": -1,
        "aggregateLikes": 3689,
        "healthScore": 75,
        "creditsText": "Full Belly Sisters",
        "license": "CC BY-SA 3.0",
        "sourceName": "Full Belly Sisters",
        "pricePerServing": 112.39,
        "id": 716426,
        "title": "Cauliflower, Brown Rice, and Vegetable Fried Rice",
        "readyInMinutes": 30,
        "servings": 8,
        "sourceUrl": "http://fullbellysisters.blogspot.com/2012/01/cauliflower-fried-rice-more-veggies.html",
        "image": "https://spoonacular.com/recipeImages/716426-312x231.jpg",
        "imageType": "jpg",
        "summary": "You can never have too many Chinese recipes, so give Cauliflower, Brown Rice, and Vegetable Fried Rice a try. This recipe serves 8 and costs $1.12 per serving. This hor d'oeuvre has <b>192 calories</b>, <b>7g of protein</b>, and <b>6g of fat</b> per serving. Head to the store and pick up broccoli, sesame seeds, soy sauce, and a few other things to make it today. 3689 people were impressed by this recipe. It is brought to you by fullbellysisters.blogspot.com. It is a good option if you're following a <b>gluten free, dairy free, lacto ovo vegetarian, and vegan</b> diet. From preparation to the plate, this recipe takes roughly <b>30 minutes</b>. Overall, this recipe earns a <b>spectacular spoonacular score of 100%</b>. If you like this recipe, you might also like recipes such as <a href=\"https://spoonacular.com/recipes/cauliflower-brown-rice-and-vegetable-fried-rice-1584601\">Cauliflower, Brown Rice, and Vegetable Fried Rice</a>, <a href=\"https://spoonacular.com/recipes/cauliflower-brown-rice-and-vegetable-fried-rice-1238897\">Cauliflower, Brown Rice, and Vegetable Fried Rice</a>, and <a href=\"https://spoonacular.com/recipes/cauliflower-brown-rice-and-vegetable-fried-rice-1230097\">Cauliflower, Brown Rice, and Vegetable Fried Rice</a>.",
        "cuisines": [
            "Chinese",
            "Asian"
        ],
        "dishTypes": [
            "side dish",
            "antipasti",
            "starter",
            "snack",
            "appetizer",
            "antipasto",
            "hor d'oeuvre"
        ],
        "diets": [
            "gluten free",
            "dairy free",
            "lacto ovo vegetarian",
            "vegan"
        ],
        "occasions": [],
        "analyzedInstructions": [
            {
                "name": "",
                "steps": [
                    {
                        "number": 1,
                        "step": "Remove the cauliflower's tough stem and reserve for another use. Using a food processor, pulse cauliflower florets until they resemble rice or couscous. You should end up with around four cups of \"cauliflower rice.\"",
                        "ingredients": [
                            {
                                "id": 10011135,
                                "name": "cauliflower florets",
                                "localizedName": "cauliflower florets",
                                "image": "cauliflower.jpg"
                            },
                            {
                                "id": 10111135,
                                "name": "cauliflower rice",
                                "localizedName": "cauliflower rice",
                                "image": "cauliflower.jpg"
                            },
                            {
                                "id": 11135,
                                "name": "cauliflower",
                                "localizedName": "cauliflower",
                                "image": "cauliflower.jpg"
                            },
                            {
                                "id": 20028,
                                "name": "couscous",
                                "localizedName": "couscous",
                                "image": "couscous-cooked.jpg"
                            },
                            {
                                "id": 20444,
                                "name": "rice",
                                "localizedName": "rice",
                                "image": "uncooked-white-rice.png"
                            }
                        ],
                        "equipment": [
                            {
                                "id": 404771,
                                "name": "food processor",
                                "localizedName": "food processor",
                                "image": "food-processor.png"
                            }
                        ]
                    },
                    {
                        "number": 2,
                        "step": "Heat 1T butter and 1T oil in a large skillet over medium heat.",
                        "ingredients": [
                            {
                                "id": 1001,
                                "name": "butter",
                                "localizedName": "butter",
                                "image": "butter-sliced.jpg"
                            },
                            {
                                "id": 4582,
                                "name": "cooking oil",
                                "localizedName": "cooking oil",
                                "image": "vegetable-oil.jpg"
                            }
                        ],
                        "equipment": [
                            {
                                "id": 404645,
                                "name": "frying pan",
                                "localizedName": "frying pan",
                                "image": "pan.png"
                            }
                        ]
                    },
                    {
                        "number": 3,
                        "step": "Add garlic and the white and light green pieces of scallion. Sauté about a minute.",
                        "ingredients": [
                            {
                                "id": 11291,
                                "name": "green onions",
                                "localizedName": "green onions",
                                "image": "spring-onions.jpg"
                            },
                            {
                                "id": 11215,
                                "name": "garlic",
                                "localizedName": "garlic",
                                "image": "garlic.png"
                            }
                        ],
                        "equipment": []
                    },
                    {
                        "number": 4,
                        "step": "Add the cauliflower to the pan. Stir to coat with oil, then spread out in pan and let sit; you want it cook a bit and to caramelize (get a bit brown), which will bring out the sweetness. After a couple of minutes, stir and spread out again.",
                        "ingredients": [
                            {
                                "id": 11135,
                                "name": "cauliflower",
                                "localizedName": "cauliflower",
                                "image": "cauliflower.jpg"
                            },
                            {
                                "id": 0,
                                "name": "spread",
                                "localizedName": "spread",
                                "image": ""
                            },
                            {
                                "id": 4582,
                                "name": "cooking oil",
                                "localizedName": "cooking oil",
                                "image": "vegetable-oil.jpg"
                            }
                        ],
                        "equipment": [
                            {
                                "id": 404645,
                                "name": "frying pan",
                                "localizedName": "frying pan",
                                "image": "pan.png"
                            }
                        ]
                    },
                    {
                        "number": 5,
                        "step": "Add cold rice (it separates easily, so it won't clump up during cooking), plus the additional grapeseed and coconut oil or butter. Raise heat to medium-high. Toss everything together and, again, spread the mixture out over the whole pan and press a bit into the bottom.",
                        "ingredients": [
                            {
                                "id": 4047,
                                "name": "coconut oil",
                                "localizedName": "coconut oil",
                                "image": "oil-coconut.jpg"
                            },
                            {
                                "id": 1001,
                                "name": "butter",
                                "localizedName": "butter",
                                "image": "butter-sliced.jpg"
                            },
                            {
                                "id": 0,
                                "name": "spread",
                                "localizedName": "spread",
                                "image": ""
                            },
                            {
                                "id": 20444,
                                "name": "rice",
                                "localizedName": "rice",
                                "image": "uncooked-white-rice.png"
                            }
                        ],
                        "equipment": [
                            {
                                "id": 404645,
                                "name": "frying pan",
                                "localizedName": "frying pan",
                                "image": "pan.png"
                            }
                        ]
                    },
                    {
                        "number": 6,
                        "step": "Let it sit for about two minutes—so the rice can get toasted and a little crispy.",
                        "ingredients": [
                            {
                                "id": 20444,
                                "name": "rice",
                                "localizedName": "rice",
                                "image": "uncooked-white-rice.png"
                            }
                        ],
                        "equipment": [],
                        "length": {
                            "number": 2,
                            "unit": "minutes"
                        }
                    },
                    {
                        "number": 7,
                        "step": "Add the peas and broccoli and stir again.",
                        "ingredients": [
                            {
                                "id": 11090,
                                "name": "broccoli",
                                "localizedName": "broccoli",
                                "image": "broccoli.jpg"
                            },
                            {
                                "id": 11304,
                                "name": "peas",
                                "localizedName": "peas",
                                "image": "peas.jpg"
                            }
                        ],
                        "equipment": []
                    },
                    {
                        "number": 8,
                        "step": "Drizzle soy sauce and toasted sesame oil over rice.Cook for another minute or so and turn off heat.",
                        "ingredients": [
                            {
                                "id": 4058,
                                "name": "sesame oil",
                                "localizedName": "sesame oil",
                                "image": "sesame-oil.png"
                            },
                            {
                                "id": 16124,
                                "name": "soy sauce",
                                "localizedName": "soy sauce",
                                "image": "soy-sauce.jpg"
                            },
                            {
                                "id": 20444,
                                "name": "rice",
                                "localizedName": "rice",
                                "image": "uncooked-white-rice.png"
                            }
                        ],
                        "equipment": []
                    },
                    {
                        "number": 9,
                        "step": "Add chopped scallion tops and toss.I like to toast some sesame seeds in a dry pan; I sprinkle these and some more raw, chopped scallion over the top of the rice for added flavor and crunch.Season to taste with salt and, if you'd like, more soy sauce. Keep in mind that if you're serving this with something salty and saucy (ie. teriyaki chicken) you may want to hold off on adding too much salt to the fried rice.",
                        "ingredients": [
                            {
                                "id": 12023,
                                "name": "sesame seeds",
                                "localizedName": "sesame seeds",
                                "image": "sesame-seeds.png"
                            },
                            {
                                "id": 16124,
                                "name": "soy sauce",
                                "localizedName": "soy sauce",
                                "image": "soy-sauce.jpg"
                            },
                            {
                                "id": 11291,
                                "name": "green onions",
                                "localizedName": "green onions",
                                "image": "spring-onions.jpg"
                            },
                            {
                                "id": 5006,
                                "name": "whole chicken",
                                "localizedName": "whole chicken",
                                "image": "whole-chicken.jpg"
                            },
                            {
                                "id": 0,
                                "name": "sandwich bread",
                                "localizedName": "sandwich bread",
                                "image": "white-bread.jpg"
                            },
                            {
                                "id": 20444,
                                "name": "rice",
                                "localizedName": "rice",
                                "image": "uncooked-white-rice.png"
                            },
                            {
                                "id": 2047,
                                "name": "salt",
                                "localizedName": "salt",
                                "image": "salt.jpg"
                            }
                        ],
                        "equipment": [
                            {
                                "id": 404645,
                                "name": "frying pan",
                                "localizedName": "frying pan",
                                "image": "pan.png"
                            }
                        ]
                    }
                ]
            }
        ],
        "spoonacularSourceUrl": "https://spoonacular.com/cauliflower-brown-rice-and-vegetable-fried-rice-716426"
    },
    {
        "vegetarian": true,
        "vegan": false,
        "glutenFree": false,
        "dairyFree": false,
        "veryHealthy": true,
        "cheap": false,
        "veryPopular": true,
        "sustainable": false,
        "lowFodmap": false,
        "weightWatcherSmartPoints": 15,
        "gaps": "no",
        "preparationMinutes": 5,
        "cookingMinutes": 0,
        "aggregateLikes": 689,
        "healthScore": 64,
        "creditsText": "Jen West",
        "sourceName": "Pink When",
        "pricePerServing": 206.79,
        "id": 715497,
        "title": "Berry Banana Breakfast Smoothie",
        "readyInMinutes": 5,
        "servings": 1,
        "sourceUrl": "http://www.pinkwhen.com/berry-banana-breakfast-smoothie/",
        "image": "https://spoonacular.com/recipeImages/715497-312x231.jpg",
        "imageType": "jpg",
        "summary": "If you want to add more <b>lacto ovo vegetarian</b> recipes to your recipe box, Berry Banana Breakfast Smoothie might be a recipe you should try. One portion of this dish contains about <b>21g of protein</b>, <b>10g of fat</b>, and a total of <b>457 calories</b>. This recipe serves 1 and costs $2.07 per serving. 689 people have tried and liked this recipe. It works well as a rather inexpensive breakfast. A mixture of banana, graham cracker crumbs, vanilla yogurt, and a handful of other ingredients are all it takes to make this recipe so yummy. From preparation to the plate, this recipe takes roughly <b>5 minutes</b>. It is brought to you by Pink When. Overall, this recipe earns a <b>super spoonacular score of 99%</b>. Similar recipes include <a href=\"https://spoonacular.com/recipes/berry-banana-breakfast-smoothie-1364145\">Berry Banana Breakfast Smoothie</a>, <a href=\"https://spoonacular.com/recipes/berry-banana-breakfast-smoothie-1405583\">Berry Banana Breakfast Smoothie</a>, and <a href=\"https://spoonacular.com/recipes/berry-banana-breakfast-smoothie-1601311\">Berry Banana Breakfast Smoothie</a>.",
        "cuisines": [],
        "dishTypes": [
            "morning meal",
            "brunch",
            "beverage",
            "breakfast",
            "drink"
        ],
        "diets": [
            "lacto ovo vegetarian"
        ],
        "occasions": [],
        "analyzedInstructions": [
            {
                "name": "",
                "steps": [
                    {
                        "number": 1,
                        "step": "Take some yogurt in your favorite flavor and add 1 container to your blender.",
                        "ingredients": [
                            {
                                "id": 1116,
                                "name": "yogurt",
                                "localizedName": "yogurt",
                                "image": "plain-yogurt.jpg"
                            }
                        ],
                        "equipment": [
                            {
                                "id": 404726,
                                "name": "blender",
                                "localizedName": "blender",
                                "image": "blender.png"
                            }
                        ]
                    },
                    {
                        "number": 2,
                        "step": "Add in the berries, banana, and soy milk and blend. Top your glass with a few graham cracker crumbs and serve.",
                        "ingredients": [
                            {
                                "id": 10018617,
                                "name": "graham cracker crumbs",
                                "localizedName": "graham cracker crumbs",
                                "image": "graham-crackers.jpg"
                            },
                            {
                                "id": 16223,
                                "name": "soymilk",
                                "localizedName": "soymilk",
                                "image": "soy-milk.jpg"
                            },
                            {
                                "id": 1009054,
                                "name": "berries",
                                "localizedName": "berries",
                                "image": "berries-mixed.jpg"
                            },
                            {
                                "id": 9040,
                                "name": "banana",
                                "localizedName": "banana",
                                "image": "bananas.jpg"
                            }
                        ],
                        "equipment": []
                    }
                ]
            }
        ],
        "spoonacularSourceUrl": "https://spoonacular.com/berry-banana-breakfast-smoothie-715497"
    },
    {
        "vegetarian": false,
        "vegan": false,
        "glutenFree": true,
        "dairyFree": true,
        "veryHealthy": true,
        "cheap": false,
        "veryPopular": true,
        "sustainable": false,
        "lowFodmap": false,
        "weightWatcherSmartPoints": 11,
        "gaps": "no",
        "preparationMinutes": 10,
        "cookingMinutes": 45,
        "aggregateLikes": 1866,
        "healthScore": 100,
        "creditsText": "pinkwhen.com",
        "sourceName": "pinkwhen.com",
        "pricePerServing": 300.45,
        "id": 715415,
        "title": "Red Lentil Soup with Chicken and Turnips",
        "readyInMinutes": 55,
        "servings": 8,
        "sourceUrl": "http://www.pinkwhen.com/red-lentil-soup-with-chicken-and-turnips/",
        "image": "https://spoonacular.com/recipeImages/715415-312x231.jpg",
        "imageType": "jpg",
        "summary": "Red Lentil Soup with Chicken and Turnips might be a good recipe to expand your main course repertoire. This recipe serves 8 and costs $3.0 per serving. One serving contains <b>477 calories</b>, <b>27g of protein</b>, and <b>20g of fat</b>. It is brought to you by Pink When. 1866 people have tried and liked this recipe. It can be enjoyed any time, but it is especially good for <b>Autumn</b>. From preparation to the plate, this recipe takes approximately <b>55 minutes</b>. It is a good option if you're following a <b>gluten free and dairy free</b> diet. Head to the store and pick up salt and pepper, canned tomatoes, flat leaf parsley, and a few other things to make it today. Overall, this recipe earns a <b>spectacular spoonacular score of 99%</b>. If you like this recipe, you might also like recipes such as <a href=\"https://spoonacular.com/recipes/red-lentil-and-chicken-soup-682185\">Red Lentil and Chicken Soup</a>, <a href=\"https://spoonacular.com/recipes/red-lentil-and-chicken-soup-1058971\">Red Lentil and Chicken Soup</a>, and <a href=\"https://spoonacular.com/recipes/red-lentil-soup-34121\">Red-Lentil Soup</a>.",
        "cuisines": [],
        "dishTypes": [
            "lunch",
            "soup",
            "main course",
            "main dish",
            "dinner"
        ],
        "diets": [
            "gluten free",
            "dairy free"
        ],
        "occasions": [
            "fall",
            "winter"
        ],
        "analyzedInstructions": [
            {
                "name": "",
                "steps": [
                    {
                        "number": 1,
                        "step": "To a large dutch oven or soup pot, heat the olive oil over medium heat.",
                        "ingredients": [
                            {
                                "id": 4053,
                                "name": "olive oil",
                                "localizedName": "olive oil",
                                "image": "olive-oil.jpg"
                            },
                            {
                                "id": 0,
                                "name": "soup",
                                "localizedName": "soup",
                                "image": ""
                            }
                        ],
                        "equipment": [
                            {
                                "id": 404667,
                                "name": "dutch oven",
                                "localizedName": "dutch oven",
                                "image": "dutch-oven.jpg"
                            }
                        ]
                    },
                    {
                        "number": 2,
                        "step": "Add the onion, carrots and celery and cook for 8-10 minutes or until tender, stirring occasionally.",
                        "ingredients": [
                            {
                                "id": 11124,
                                "name": "carrot",
                                "localizedName": "carrot",
                                "image": "sliced-carrot.png"
                            },
                            {
                                "id": 11143,
                                "name": "celery",
                                "localizedName": "celery",
                                "image": "celery.jpg"
                            },
                            {
                                "id": 11282,
                                "name": "onion",
                                "localizedName": "onion",
                                "image": "brown-onion.png"
                            }
                        ],
                        "equipment": [],
                        "length": {
                            "number": 10,
                            "unit": "minutes"
                        }
                    },
                    {
                        "number": 3,
                        "step": "Add the garlic and cook for an additional 2 minutes, or until fragrant. Season conservatively with a pinch of salt and black pepper.To the pot, add the tomatoes, turnip and red lentils. Stir to combine. Stir in the vegetable stock and increase the heat on the stove to high. Bring the soup to a boil and then reduce to a simmer. Simmer for 20 minutes or until the turnips are tender and the lentils are cooked through.",
                        "ingredients": [
                            {
                                "id": 1102047,
                                "name": "salt and pepper",
                                "localizedName": "salt and pepper",
                                "image": "salt-and-pepper.jpg"
                            },
                            {
                                "id": 6615,
                                "name": "vegetable stock",
                                "localizedName": "vegetable stock",
                                "image": "chicken-broth.png"
                            },
                            {
                                "id": 10016069,
                                "name": "red lentils",
                                "localizedName": "red lentils",
                                "image": "red-lentils.png"
                            },
                            {
                                "id": 11529,
                                "name": "tomato",
                                "localizedName": "tomato",
                                "image": "tomato.png"
                            },
                            {
                                "id": 10316069,
                                "name": "lentils",
                                "localizedName": "lentils",
                                "image": "lentils-brown.jpg"
                            },
                            {
                                "id": 11564,
                                "name": "turnip",
                                "localizedName": "turnip",
                                "image": "turnips.png"
                            },
                            {
                                "id": 11215,
                                "name": "garlic",
                                "localizedName": "garlic",
                                "image": "garlic.png"
                            },
                            {
                                "id": 0,
                                "name": "soup",
                                "localizedName": "soup",
                                "image": ""
                            }
                        ],
                        "equipment": [
                            {
                                "id": 404794,
                                "name": "stove",
                                "localizedName": "stove",
                                "image": "oven.jpg"
                            },
                            {
                                "id": 404752,
                                "name": "pot",
                                "localizedName": "pot",
                                "image": "stock-pot.jpg"
                            }
                        ],
                        "length": {
                            "number": 22,
                            "unit": "minutes"
                        }
                    },
                    {
                        "number": 4,
                        "step": "Add the chicken breast and parsley. Cook for an additional 5 minutes. Adjust seasoning to taste.",
                        "ingredients": [
                            {
                                "id": 5062,
                                "name": "chicken breast",
                                "localizedName": "chicken breast",
                                "image": "chicken-breasts.png"
                            },
                            {
                                "id": 1042027,
                                "name": "seasoning",
                                "localizedName": "seasoning",
                                "image": "seasoning.png"
                            },
                            {
                                "id": 11297,
                                "name": "parsley",
                                "localizedName": "parsley",
                                "image": "parsley.jpg"
                            }
                        ],
                        "equipment": [],
                        "length": {
                            "number": 5,
                            "unit": "minutes"
                        }
                    },
                    {
                        "number": 5,
                        "step": "Serve the soup immediately garnished with fresh parsley and any additional toppings. Enjoy!",
                        "ingredients": [
                            {
                                "id": 10511297,
                                "name": "fresh parsley",
                                "localizedName": "fresh parsley",
                                "image": "parsley.jpg"
                            },
                            {
                                "id": 0,
                                "name": "soup",
                                "localizedName": "soup",
                                "image": ""
                            }
                        ],
                        "equipment": []
                    }
                ]
            }
        ],
        "spoonacularSourceUrl": "https://spoonacular.com/red-lentil-soup-with-chicken-and-turnips-715415"
    },
    {
        "vegetarian": true,
        "vegan": true,
        "glutenFree": true,
        "dairyFree": true,
        "veryHealthy": true,
        "cheap": false,
        "veryPopular": false,
        "sustainable": false,
        "lowFodmap": false,
        "weightWatcherSmartPoints": 2,
        "gaps": "GAPS_4",
        "preparationMinutes": -1,
        "cookingMinutes": -1,
        "aggregateLikes": 207,
        "healthScore": 100,
        "creditsText": "Full Belly Sisters",
        "license": "CC BY-SA 3.0",
        "sourceName": "Full Belly Sisters",
        "pricePerServing": 178.37,
        "id": 716406,
        "title": "Asparagus and Pea Soup: Real Convenience Food",
        "readyInMinutes": 20,
        "servings": 2,
        "sourceUrl": "http://fullbellysisters.blogspot.com/2011/03/asparagus-and-pea-soup-real-convenience.html",
        "image": "https://spoonacular.com/recipeImages/716406-312x231.jpg",
        "imageType": "jpg",
        "summary": "Asparagus and Pea Soup: Real Convenience Food requires approximately <b>20 minutes</b> from start to finish. Watching your figure? This gluten free, dairy free, paleolithic, and lacto ovo vegetarian recipe has <b>217 calories</b>, <b>11g of protein</b>, and <b>8g of fat</b> per serving. This recipe serves 2. For <b>$1.78 per serving</b>, this recipe <b>covers 25%</b> of your daily requirements of vitamins and minerals. <b>Autumn</b> will be even more special with this recipe. It works well as a hor d'oeuvre. 207 people have tried and liked this recipe. It is brought to you by fullbellysisters.blogspot.com. A mixture of vegetable broth, evoo, garlic, and a handful of other ingredients are all it takes to make this recipe so yummy. All things considered, we decided this recipe <b>deserves a spoonacular score of 96%</b>. This score is outstanding. Try <a href=\"https://spoonacular.com/recipes/asparagus-and-pea-soup-real-convenience-food-1393979\">Asparagus and Pea Soup: Real Convenience Food</a>, <a href=\"https://spoonacular.com/recipes/asparagus-and-pea-soup-real-convenience-food-1376201\">Asparagus and Pea Soup: Real Convenience Food</a>, and <a href=\"https://spoonacular.com/recipes/asparagus-and-pea-soup-real-convenience-food-1362341\">Asparagus and Pea Soup: Real Convenience Food</a> for similar recipes.",
        "cuisines": [],
        "dishTypes": [
            "antipasti",
            "soup",
            "starter",
            "snack",
            "appetizer",
            "antipasto",
            "hor d'oeuvre"
        ],
        "diets": [
            "gluten free",
            "dairy free",
            "paleolithic",
            "lacto ovo vegetarian",
            "primal",
            "vegan"
        ],
        "occasions": [
            "fall",
            "winter"
        ],
        "analyzedInstructions": [
            {
                "name": "",
                "steps": [
                    {
                        "number": 1,
                        "step": "Chop the garlic and onions.",
                        "ingredients": [
                            {
                                "id": 11215,
                                "name": "garlic",
                                "localizedName": "garlic",
                                "image": "garlic.png"
                            },
                            {
                                "id": 11282,
                                "name": "onion",
                                "localizedName": "onion",
                                "image": "brown-onion.png"
                            }
                        ],
                        "equipment": []
                    },
                    {
                        "number": 2,
                        "step": "Saute the onions in the EVOO, adding the garlic after a couple of minutes; cook until the onions are translucent.",
                        "ingredients": [
                            {
                                "id": 11215,
                                "name": "garlic",
                                "localizedName": "garlic",
                                "image": "garlic.png"
                            },
                            {
                                "id": 11282,
                                "name": "onion",
                                "localizedName": "onion",
                                "image": "brown-onion.png"
                            },
                            {
                                "id": 1034053,
                                "name": "extra virgin olive oil",
                                "localizedName": "extra virgin olive oil",
                                "image": "olive-oil.jpg"
                            }
                        ],
                        "equipment": []
                    },
                    {
                        "number": 3,
                        "step": "Add the whole bag of asparagus and cover everything with the broth. Season with salt and pepper and a pinch of red pepper flakes, if using.Simmer until the asparagus is bright green and tender (if you've thawed the asparagus it will only take a couple of minutes). Turn off the heat and puree using an immersion blender.",
                        "ingredients": [
                            {
                                "id": 1032009,
                                "name": "red pepper flakes",
                                "localizedName": "red pepper flakes",
                                "image": "red-pepper-flakes.jpg"
                            },
                            {
                                "id": 1102047,
                                "name": "salt and pepper",
                                "localizedName": "salt and pepper",
                                "image": "salt-and-pepper.jpg"
                            },
                            {
                                "id": 11011,
                                "name": "asparagus",
                                "localizedName": "asparagus",
                                "image": "asparagus.png"
                            },
                            {
                                "id": 1006615,
                                "name": "broth",
                                "localizedName": "broth",
                                "image": "chicken-broth.png"
                            }
                        ],
                        "equipment": [
                            {
                                "id": 404776,
                                "name": "immersion blender",
                                "localizedName": "immersion blender",
                                "image": "immersion-blender.png"
                            }
                        ]
                    },
                    {
                        "number": 4,
                        "step": "Add peas (the heat of the soup will quickly thaw them) and puree until smooth; add more until it reaches the thickness you like.Top with chives and a small dollop of creme fraiche or sour cream or greek yogurt.",
                        "ingredients": [
                            {
                                "id": 1001056,
                                "name": "creme fraiche",
                                "localizedName": "creme fraiche",
                                "image": "sour-cream.jpg"
                            },
                            {
                                "id": 1256,
                                "name": "greek yogurt",
                                "localizedName": "greek yogurt",
                                "image": "plain-yogurt.jpg"
                            },
                            {
                                "id": 1056,
                                "name": "sour cream",
                                "localizedName": "sour cream",
                                "image": "sour-cream.jpg"
                            },
                            {
                                "id": 11156,
                                "name": "chives",
                                "localizedName": "chives",
                                "image": "fresh-chives.jpg"
                            },
                            {
                                "id": 11304,
                                "name": "peas",
                                "localizedName": "peas",
                                "image": "peas.jpg"
                            },
                            {
                                "id": 0,
                                "name": "soup",
                                "localizedName": "soup",
                                "image": ""
                            }
                        ],
                        "equipment": []
                    }
                ]
            }
        ],
        "spoonacularSourceUrl": "https://spoonacular.com/asparagus-and-pea-soup-real-convenience-food-716406"
    },
    {
        "vegetarian": true,
        "vegan": true,
        "glutenFree": true,
        "dairyFree": true,
        "veryHealthy": true,
        "cheap": false,
        "veryPopular": false,
        "sustainable": false,
        "lowFodmap": false,
        "weightWatcherSmartPoints": 5,
        "gaps": "no",
        "preparationMinutes": -1,
        "cookingMinutes": -1,
        "aggregateLikes": 19,
        "healthScore": 83,
        "creditsText": "Foodista.com – The Cooking Encyclopedia Everyone Can Edit",
        "license": "CC BY 3.0",
        "sourceName": "Foodista",
        "pricePerServing": 69.09,
        "id": 644387,
        "title": "Garlicky Kale",
        "readyInMinutes": 45,
        "servings": 2,
        "sourceUrl": "http://www.foodista.com/recipe/J2FTJBF7/garlicky-kale",
        "image": "https://spoonacular.com/recipeImages/644387-312x231.jpg",
        "imageType": "jpg",
        "summary": "Garlicky Kale requires approximately <b>45 minutes</b> from start to finish. This side dish has <b>170 calories</b>, <b>2g of protein</b>, and <b>15g of fat</b> per serving. This recipe serves 2. For <b>69 cents per serving</b>, this recipe <b>covers 17%</b> of your daily requirements of vitamins and minerals. 19 people have made this recipe and would make it again. This recipe from Foodista requires balsamic vinegar, garlic, curly kale, and olive oil. It is a good option if you're following a <b>gluten free, dairy free, paleolithic, and lacto ovo vegetarian</b> diet. With a spoonacular <b>score of 99%</b>, this dish is outstanding. Try <a href=\"https://spoonacular.com/recipes/garlicky-kale-248759\">Garlicky Kale</a>, <a href=\"https://spoonacular.com/recipes/garlicky-kale-1267347\">Garlicky Kale</a>, and <a href=\"https://spoonacular.com/recipes/garlicky-kale-1584523\">Garlicky Kale</a> for similar recipes.",
        "cuisines": [],
        "dishTypes": [
            "side dish"
        ],
        "diets": [
            "gluten free",
            "dairy free",
            "paleolithic",
            "lacto ovo vegetarian",
            "primal",
            "whole 30",
            "vegan"
        ],
        "occasions": [],
        "analyzedInstructions": [
            {
                "name": "",
                "steps": [
                    {
                        "number": 1,
                        "step": "Heat the olive oil in a large pot over medium heat.",
                        "ingredients": [
                            {
                                "id": 4053,
                                "name": "olive oil",
                                "localizedName": "olive oil",
                                "image": "olive-oil.jpg"
                            }
                        ],
                        "equipment": [
                            {
                                "id": 404752,
                                "name": "pot",
                                "localizedName": "pot",
                                "image": "stock-pot.jpg"
                            }
                        ]
                    },
                    {
                        "number": 2,
                        "step": "Add the kale and cover.Stir occasionally until the volume of the kale is reduced by half. Uncover.",
                        "ingredients": [
                            {
                                "id": 11233,
                                "name": "kale",
                                "localizedName": "kale",
                                "image": "kale.jpg"
                            }
                        ],
                        "equipment": []
                    },
                    {
                        "number": 3,
                        "step": "Add garlic and basalmic.Allow to cook for about another 30 seconds or so, mixing well so that the garlic and vinegar are well distributed.",
                        "ingredients": [
                            {
                                "id": 2053,
                                "name": "vinegar",
                                "localizedName": "vinegar",
                                "image": "vinegar-(white).jpg"
                            },
                            {
                                "id": 11215,
                                "name": "garlic",
                                "localizedName": "garlic",
                                "image": "garlic.png"
                            }
                        ],
                        "equipment": []
                    },
                    {
                        "number": 4,
                        "step": "Serve hot.",
                        "ingredients": [],
                        "equipment": []
                    }
                ]
            }
        ],
        "spoonacularSourceUrl": "https://spoonacular.com/garlicky-kale-644387"
    },
    {
        "vegetarian": false,
        "vegan": false,
        "glutenFree": true,
        "dairyFree": true,
        "veryHealthy": true,
        "cheap": false,
        "veryPopular": false,
        "sustainable": false,
        "lowFodmap": false,
        "weightWatcherSmartPoints": 10,
        "gaps": "no",
        "preparationMinutes": 10,
        "cookingMinutes": 480,
        "aggregateLikes": 57,
        "healthScore": 100,
        "creditsText": "pinkwhen.com",
        "sourceName": "pinkwhen.com",
        "pricePerServing": 270.41,
        "id": 715446,
        "title": "Slow Cooker Beef Stew",
        "readyInMinutes": 490,
        "servings": 6,
        "sourceUrl": "http://www.pinkwhen.com/slow-cooker-beef-stew-recipe/",
        "image": "https://spoonacular.com/recipeImages/715446-312x231.jpg",
        "imageType": "jpg",
        "summary": "If you want to add more <b>gluten free and dairy free</b> recipes to your recipe box, Slow Cooker Beef Stew might be a recipe you should try. One serving contains <b>434 calories</b>, <b>44g of protein</b>, and <b>12g of fat</b>. This recipe serves 6. For <b>$2.7 per serving</b>, this recipe <b>covers 45%</b> of your daily requirements of vitamins and minerals. It works best as a main course, and is done in approximately <b>8 hours and 10 minutes</b>. If you have green onions, carrots, celery, and a few other ingredients on hand, you can make it. This recipe is liked by 57 foodies and cooks. <b>Autumn</b> will be even more special with this recipe. It is brought to you by Pink When. Taking all factors into account, this recipe <b>earns a spoonacular score of 99%</b>, which is awesome. Similar recipes include <a href=\"https://spoonacular.com/recipes/slow-cooker-beef-stew-1578321\">Slow Cooker Beef Stew</a>, <a href=\"https://spoonacular.com/recipes/slow-cooker-beef-stew-1241707\">Slow Cooker Beef Stew</a>, and <a href=\"https://spoonacular.com/recipes/slow-cooker-beef-stew-1281171\">Slow Cooker Beef Stew</a>.",
        "cuisines": [],
        "dishTypes": [
            "lunch",
            "soup",
            "main course",
            "main dish",
            "dinner"
        ],
        "diets": [
            "gluten free",
            "dairy free"
        ],
        "occasions": [
            "fall",
            "winter"
        ],
        "analyzedInstructions": [
            {
                "name": "",
                "steps": [
                    {
                        "number": 1,
                        "step": "To get started, heat your slow cooker to low.",
                        "ingredients": [],
                        "equipment": [
                            {
                                "id": 404718,
                                "name": "slow cooker",
                                "localizedName": "slow cooker",
                                "image": "slow-cooker.jpg"
                            }
                        ]
                    },
                    {
                        "number": 2,
                        "step": "Pour in the cream of mushroom soup, Dale's seasoning, water, and beef broth and stir until mixed well.",
                        "ingredients": [
                            {
                                "id": 6147,
                                "name": "cream of mushroom soup",
                                "localizedName": "cream of mushroom soup",
                                "image": "cream-of-mushroom-soup.png"
                            },
                            {
                                "id": 6008,
                                "name": "beef broth",
                                "localizedName": "beef broth",
                                "image": "beef-broth.png"
                            },
                            {
                                "id": 1042027,
                                "name": "seasoning",
                                "localizedName": "seasoning",
                                "image": "seasoning.png"
                            },
                            {
                                "id": 14412,
                                "name": "water",
                                "localizedName": "water",
                                "image": "water.png"
                            }
                        ],
                        "equipment": []
                    },
                    {
                        "number": 3,
                        "step": "Add in your stew meat, potatoes, onions, carrots, celery, and green onions. Stir well until covered and cook on low for 8 hours. You can add salt and pepper as desired, but the flavors and the Dale's marry together so well that you probably won’t need them.",
                        "ingredients": [
                            {
                                "id": 1102047,
                                "name": "salt and pepper",
                                "localizedName": "salt and pepper",
                                "image": "salt-and-pepper.jpg"
                            },
                            {
                                "id": 11291,
                                "name": "green onions",
                                "localizedName": "green onions",
                                "image": "spring-onions.jpg"
                            },
                            {
                                "id": 10023618,
                                "name": "beef stew meat",
                                "localizedName": "beef stew meat",
                                "image": "beef-cubes-raw.png"
                            },
                            {
                                "id": 11352,
                                "name": "potato",
                                "localizedName": "potato",
                                "image": "potatoes-yukon-gold.png"
                            },
                            {
                                "id": 11124,
                                "name": "carrot",
                                "localizedName": "carrot",
                                "image": "sliced-carrot.png"
                            },
                            {
                                "id": 11143,
                                "name": "celery",
                                "localizedName": "celery",
                                "image": "celery.jpg"
                            },
                            {
                                "id": 11282,
                                "name": "onion",
                                "localizedName": "onion",
                                "image": "brown-onion.png"
                            }
                        ],
                        "equipment": [],
                        "length": {
                            "number": 480,
                            "unit": "minutes"
                        }
                    }
                ]
            }
        ],
        "spoonacularSourceUrl": "https://spoonacular.com/slow-cooker-beef-stew-715446"
    },
    {
        "vegetarian": true,
        "vegan": true,
        "glutenFree": true,
        "dairyFree": true,
        "veryHealthy": true,
        "cheap": false,
        "veryPopular": false,
        "sustainable": false,
        "lowFodmap": false,
        "weightWatcherSmartPoints": 9,
        "gaps": "no",
        "preparationMinutes": -1,
        "cookingMinutes": -1,
        "aggregateLikes": 53,
        "healthScore": 96,
        "creditsText": "blogspot.com",
        "sourceName": "blogspot.com",
        "pricePerServing": 168.43,
        "id": 782601,
        "title": "Red Kidney Bean Jambalaya",
        "readyInMinutes": 45,
        "servings": 6,
        "sourceUrl": "http://foodandspice.blogspot.com/2016/05/red-kidney-bean-jambalaya.html",
        "image": "https://spoonacular.com/recipeImages/782601-312x231.jpg",
        "imageType": "jpg",
        "summary": "Red Kidney Bean Jambalayan is a main course that serves 6. One portion of this dish contains approximately <b>18g of protein</b>, <b>6g of fat</b>, and a total of <b>393 calories</b>. For <b>$1.68 per serving</b>, this recipe <b>covers 33%</b> of your daily requirements of vitamins and minerals. 53 people were glad they tried this recipe. A mixture of vegetable stock, tomatoes, onion, and a handful of other ingredients are all it takes to make this recipe so flavorful. It is a good option if you're following a <b>gluten free, dairy free, lacto ovo vegetarian, and vegan</b> diet. This recipe is typical of Cajun cuisine. It is brought to you by foodandspice.blogspot.com. From preparation to the plate, this recipe takes roughly <b>45 minutes</b>. Overall, this recipe earns a <b>tremendous spoonacular score of 99%</b>. Users who liked this recipe also liked <a href=\"https://spoonacular.com/recipes/red-kidney-bean-jambalaya-1407231\">Red Kidney Bean Jambalaya</a>, <a href=\"https://spoonacular.com/recipes/red-kidney-bean-salad-94525\">Red Kidney Bean Salad</a>, and <a href=\"https://spoonacular.com/recipes/red-kidney-bean-curry-80686\">Red Kidney Bean Curry</a>.",
        "cuisines": [
            "Creole",
            "Cajun"
        ],
        "dishTypes": [
            "lunch",
            "main course",
            "main dish",
            "dinner"
        ],
        "diets": [
            "gluten free",
            "dairy free",
            "lacto ovo vegetarian",
            "vegan"
        ],
        "occasions": [],
        "analyzedInstructions": [
            {
                "name": "",
                "steps": [
                    {
                        "number": 1,
                        "step": "Rinse the kidney beans and brown rice separately. Cover the kidney beans with water and soak for 8 hours or overnight. In a separate bowl, cover the brown rice with water and soak for 8 hours or overnight.",
                        "ingredients": [
                            {
                                "id": 16033,
                                "name": "kidney beans",
                                "localizedName": "kidney beans",
                                "image": "kidney-beans.jpg"
                            },
                            {
                                "id": 20040,
                                "name": "brown rice",
                                "localizedName": "brown rice",
                                "image": "uncooked-brown-rice.png"
                            },
                            {
                                "id": 14412,
                                "name": "water",
                                "localizedName": "water",
                                "image": "water.png"
                            }
                        ],
                        "equipment": [
                            {
                                "id": 404783,
                                "name": "bowl",
                                "localizedName": "bowl",
                                "image": "bowl.jpg"
                            }
                        ],
                        "length": {
                            "number": 960,
                            "unit": "minutes"
                        }
                    },
                    {
                        "number": 2,
                        "step": "Drain and rinse the kidney beans, then transfer to a medium saucepan and cover with fresh water. Bring to a boil, reduce heat to medium-low, cover, and simmer for 1 hour or until just tender but not falling apart.",
                        "ingredients": [
                            {
                                "id": 16033,
                                "name": "kidney beans",
                                "localizedName": "kidney beans",
                                "image": "kidney-beans.jpg"
                            },
                            {
                                "id": 14412,
                                "name": "water",
                                "localizedName": "water",
                                "image": "water.png"
                            }
                        ],
                        "equipment": [
                            {
                                "id": 404669,
                                "name": "sauce pan",
                                "localizedName": "sauce pan",
                                "image": "sauce-pan.jpg"
                            }
                        ],
                        "length": {
                            "number": 60,
                            "unit": "minutes"
                        }
                    },
                    {
                        "number": 3,
                        "step": "Drain and set aside.",
                        "ingredients": [],
                        "equipment": []
                    },
                    {
                        "number": 4,
                        "step": "Heat the oil in a large saucepan over medium heat. When hot, add the onion and saut for 5 minutes. Now add the garlic, carrots, celery and green beans, and stir for another 5 minutes. Next add the tomatoes, red pepper, eggplant, sage, thyme, marjoram and celery seed, and continue to stir for another few minutes.",
                        "ingredients": [
                            {
                                "id": 2007,
                                "name": "celery seed",
                                "localizedName": "celery seed",
                                "image": "celery-seed.jpg"
                            },
                            {
                                "id": 11052,
                                "name": "green beans",
                                "localizedName": "green beans",
                                "image": "green-beans-or-string-beans.jpg"
                            },
                            {
                                "id": 11821,
                                "name": "red pepper",
                                "localizedName": "red pepper",
                                "image": "red-pepper.jpg"
                            },
                            {
                                "id": 11209,
                                "name": "eggplant",
                                "localizedName": "eggplant",
                                "image": "eggplant.png"
                            },
                            {
                                "id": 2023,
                                "name": "marjoram",
                                "localizedName": "marjoram",
                                "image": "marjoram.jpg"
                            },
                            {
                                "id": 11529,
                                "name": "tomato",
                                "localizedName": "tomato",
                                "image": "tomato.png"
                            },
                            {
                                "id": 11124,
                                "name": "carrot",
                                "localizedName": "carrot",
                                "image": "sliced-carrot.png"
                            },
                            {
                                "id": 11143,
                                "name": "celery",
                                "localizedName": "celery",
                                "image": "celery.jpg"
                            },
                            {
                                "id": 11215,
                                "name": "garlic",
                                "localizedName": "garlic",
                                "image": "garlic.png"
                            },
                            {
                                "id": 11282,
                                "name": "onion",
                                "localizedName": "onion",
                                "image": "brown-onion.png"
                            },
                            {
                                "id": 2049,
                                "name": "thyme",
                                "localizedName": "thyme",
                                "image": "thyme.jpg"
                            },
                            {
                                "id": 99226,
                                "name": "sage",
                                "localizedName": "sage",
                                "image": "fresh-sage.png"
                            },
                            {
                                "id": 4582,
                                "name": "cooking oil",
                                "localizedName": "cooking oil",
                                "image": "vegetable-oil.jpg"
                            }
                        ],
                        "equipment": [
                            {
                                "id": 404669,
                                "name": "sauce pan",
                                "localizedName": "sauce pan",
                                "image": "sauce-pan.jpg"
                            }
                        ],
                        "length": {
                            "number": 10,
                            "unit": "minutes"
                        }
                    },
                    {
                        "number": 5,
                        "step": "Pour in the vegetable stock, liquid smoke, rice and the cooked kidney beans. Bring to a boil, reduce heat to medium low, cover, and cook, stirring occasionally, for 45 minutes or until the rice is tender.",
                        "ingredients": [
                            {
                                "id": 6615,
                                "name": "vegetable stock",
                                "localizedName": "vegetable stock",
                                "image": "chicken-broth.png"
                            },
                            {
                                "id": 16033,
                                "name": "kidney beans",
                                "localizedName": "kidney beans",
                                "image": "kidney-beans.jpg"
                            },
                            {
                                "id": 93627,
                                "name": "liquid smoke",
                                "localizedName": "liquid smoke",
                                "image": "dark-sauce.jpg"
                            },
                            {
                                "id": 20444,
                                "name": "rice",
                                "localizedName": "rice",
                                "image": "uncooked-white-rice.png"
                            }
                        ],
                        "equipment": [],
                        "length": {
                            "number": 45,
                            "unit": "minutes"
                        }
                    },
                    {
                        "number": 6,
                        "step": "Add water as necessary if the stew becomes too dry.Season with sriracha, salt and pepper, and taste for seasoning  add more liquid smoke, sriracha, salt, pepper or herbs as desired.",
                        "ingredients": [
                            {
                                "id": 1102047,
                                "name": "salt and pepper",
                                "localizedName": "salt and pepper",
                                "image": "salt-and-pepper.jpg"
                            },
                            {
                                "id": 93627,
                                "name": "liquid smoke",
                                "localizedName": "liquid smoke",
                                "image": "dark-sauce.jpg"
                            },
                            {
                                "id": 1042027,
                                "name": "seasoning",
                                "localizedName": "seasoning",
                                "image": "seasoning.png"
                            },
                            {
                                "id": 1016168,
                                "name": "sriracha",
                                "localizedName": "sriracha",
                                "image": "hot-sauce-or-tabasco.png"
                            },
                            {
                                "id": 1002030,
                                "name": "pepper",
                                "localizedName": "pepper",
                                "image": "pepper.jpg"
                            },
                            {
                                "id": 1002044,
                                "name": "herbs",
                                "localizedName": "herbs",
                                "image": "mixed-fresh-herbs.jpg"
                            },
                            {
                                "id": 14412,
                                "name": "water",
                                "localizedName": "water",
                                "image": "water.png"
                            },
                            {
                                "id": 2047,
                                "name": "salt",
                                "localizedName": "salt",
                                "image": "salt.jpg"
                            },
                            {
                                "id": 0,
                                "name": "stew",
                                "localizedName": "stew",
                                "image": ""
                            }
                        ],
                        "equipment": []
                    }
                ]
            }
        ],
        "spoonacularSourceUrl": "https://spoonacular.com/red-kidney-bean-jambalaya-782601"
    },
    {
        "vegetarian": false,
        "vegan": false,
        "glutenFree": true,
        "dairyFree": false,
        "veryHealthy": true,
        "cheap": false,
        "veryPopular": false,
        "sustainable": false,
        "lowFodmap": false,
        "weightWatcherSmartPoints": 12,
        "gaps": "no",
        "preparationMinutes": -1,
        "cookingMinutes": -1,
        "aggregateLikes": 159,
        "healthScore": 85,
        "creditsText": "pinkwhen.com",
        "sourceName": "pinkwhen.com",
        "pricePerServing": 435.16,
        "id": 795751,
        "title": "Chicken Fajita Stuffed Bell Pepper",
        "readyInMinutes": 45,
        "servings": 3,
        "sourceUrl": "http://www.pinkwhen.com/chicken-fajita-stuffed-bell-pepper/",
        "image": "https://spoonacular.com/recipeImages/795751-312x231.jpg",
        "imageType": "jpg",
        "summary": "Chicken Fajita Stuffed Bell Pepper takes approximately <b>45 minutes</b> from beginning to end. Watching your figure? This gluten free recipe has <b>526 calories</b>, <b>50g of protein</b>, and <b>24g of fat</b> per serving. For <b>$4.35 per serving</b>, you get a main course that serves 3. 159 people have made this recipe and would make it again. This recipe is typical of Mexican cuisine. This recipe from Pink When requires cumin, cilantro, salsa, and chili powder. All things considered, we decided this recipe <b>deserves a spoonacular score of 98%</b>. This score is amazing. Users who liked this recipe also liked <a href=\"https://spoonacular.com/recipes/stuffed-bell-peppers-551310\">Stuffed Bell Peppers</a>, <a href=\"https://spoonacular.com/recipes/stuffed-bell-pepper-1348405\">Stuffed Bell Pepper</a>, and <a href=\"https://spoonacular.com/recipes/stuffed-bell-pepper-526845\">Stuffed Bell Pepper</a>.",
        "cuisines": [
            "Mexican"
        ],
        "dishTypes": [
            "lunch",
            "main course",
            "main dish",
            "dinner"
        ],
        "diets": [
            "gluten free"
        ],
        "occasions": [],
        "analyzedInstructions": [
            {
                "name": "",
                "steps": [
                    {
                        "number": 1,
                        "step": "To get started heat oven to 35",
                        "ingredients": [],
                        "equipment": [
                            {
                                "id": 404784,
                                "name": "oven",
                                "localizedName": "oven",
                                "image": "oven.jpg"
                            }
                        ]
                    },
                    {
                        "number": 2,
                        "step": "Mix salt, pepper, cilantro, cumin, chili powder, and quinoa together and place to the side.",
                        "ingredients": [
                            {
                                "id": 2009,
                                "name": "chili powder",
                                "localizedName": "chili powder",
                                "image": "chili-powder.jpg"
                            },
                            {
                                "id": 11165,
                                "name": "cilantro",
                                "localizedName": "cilantro",
                                "image": "cilantro.png"
                            },
                            {
                                "id": 1002030,
                                "name": "pepper",
                                "localizedName": "pepper",
                                "image": "pepper.jpg"
                            },
                            {
                                "id": 20035,
                                "name": "quinoa",
                                "localizedName": "quinoa",
                                "image": "uncooked-quinoa.png"
                            },
                            {
                                "id": 1002014,
                                "name": "cumin",
                                "localizedName": "cumin",
                                "image": "ground-cumin.jpg"
                            },
                            {
                                "id": 2047,
                                "name": "salt",
                                "localizedName": "salt",
                                "image": "salt.jpg"
                            }
                        ],
                        "equipment": []
                    },
                    {
                        "number": 3,
                        "step": "Cut the bell pepper in half (if you havent already) and clean out the seeds.",
                        "ingredients": [
                            {
                                "id": 10211821,
                                "name": "bell pepper",
                                "localizedName": "bell pepper",
                                "image": "bell-pepper-orange.png"
                            },
                            {
                                "id": 93818,
                                "name": "seeds",
                                "localizedName": "seeds",
                                "image": "sunflower-seeds.jpg"
                            }
                        ],
                        "equipment": []
                    },
                    {
                        "number": 4,
                        "step": "Layer quinoa and then grilled chicken into the pepper, and then top each with cheese.",
                        "ingredients": [
                            {
                                "id": 1015114,
                                "name": "grilled chicken",
                                "localizedName": "grilled chicken",
                                "image": "rotisserie-chicken.png"
                            },
                            {
                                "id": 1041009,
                                "name": "cheese",
                                "localizedName": "cheese",
                                "image": "cheddar-cheese.png"
                            },
                            {
                                "id": 1002030,
                                "name": "pepper",
                                "localizedName": "pepper",
                                "image": "pepper.jpg"
                            },
                            {
                                "id": 20035,
                                "name": "quinoa",
                                "localizedName": "quinoa",
                                "image": "uncooked-quinoa.png"
                            }
                        ],
                        "equipment": []
                    },
                    {
                        "number": 5,
                        "step": "Place in the oven for about 10 minutes until the bell pepper has softened.Chicken Fajita Stuffed Bell Pepper",
                        "ingredients": [
                            {
                                "id": 10211821,
                                "name": "bell pepper",
                                "localizedName": "bell pepper",
                                "image": "bell-pepper-orange.png"
                            },
                            {
                                "id": 5006,
                                "name": "whole chicken",
                                "localizedName": "whole chicken",
                                "image": "whole-chicken.jpg"
                            }
                        ],
                        "equipment": [
                            {
                                "id": 404784,
                                "name": "oven",
                                "localizedName": "oven",
                                "image": "oven.jpg"
                            }
                        ],
                        "length": {
                            "number": 10,
                            "unit": "minutes"
                        }
                    },
                    {
                        "number": 6,
                        "step": "Top with avocado and serve with shredded lettuce and salsa for a complete meal.This is SO GOOD! I love bell peppers, and I love all of these flavors that are married together that make this chicken fajita stuffed bell pepper so amazing. I could seriously just eat the flavored quinoa all by itself.If you are looking for even more delicious and healthy recipes, make sure you head over to the Simple Fit Forty tab under the cooking section of this blog. We have all of our favorite healthy recipes listed for you right there in one spot. You can also drool over out latest on the Simple Fit Forty Instagram page.If you are looking to get healthy and fit, come and join the super secret and awesome Simple Fit Forty Lifestyle community over on Facebook. We would love to have you join!",
                        "ingredients": [
                            {
                                "id": 10211821,
                                "name": "bell pepper",
                                "localizedName": "bell pepper",
                                "image": "bell-pepper-orange.png"
                            },
                            {
                                "id": 9037,
                                "name": "avocado",
                                "localizedName": "avocado",
                                "image": "avocado.jpg"
                            },
                            {
                                "id": 5006,
                                "name": "whole chicken",
                                "localizedName": "whole chicken",
                                "image": "whole-chicken.jpg"
                            },
                            {
                                "id": 11252,
                                "name": "lettuce",
                                "localizedName": "lettuce",
                                "image": "iceberg-lettuce.jpg"
                            },
                            {
                                "id": 20035,
                                "name": "quinoa",
                                "localizedName": "quinoa",
                                "image": "uncooked-quinoa.png"
                            },
                            {
                                "id": 6164,
                                "name": "salsa",
                                "localizedName": "salsa",
                                "image": "salsa.png"
                            }
                        ],
                        "equipment": []
                    }
                ]
            }
        ],
        "spoonacularSourceUrl": "https://spoonacular.com/chicken-fajita-stuffed-bell-pepper-795751"
    },
    {
        "vegetarian": true,
        "vegan": true,
        "glutenFree": true,
        "dairyFree": true,
        "veryHealthy": true,
        "cheap": false,
        "veryPopular": false,
        "sustainable": false,
        "lowFodmap": false,
        "weightWatcherSmartPoints": 23,
        "gaps": "no",
        "preparationMinutes": -1,
        "cookingMinutes": -1,
        "aggregateLikes": 35,
        "healthScore": 100,
        "creditsText": "Lisa's Vegetarian Kitchen",
        "license": "CC BY 2.5 CA",
        "sourceName": "Food and Spice",
        "pricePerServing": 161.03,
        "id": 766453,
        "title": "Hummus and Za'atar",
        "readyInMinutes": 45,
        "servings": 4,
        "sourceUrl": "http://foodandspice.blogspot.com/2016/03/hummus-with-zaatar.html",
        "image": "https://spoonacular.com/recipeImages/766453-312x231.jpg",
        "imageType": "jpg",
        "summary": "You can never have too many middl eastern recipes, so give Hummus and Za'atar a try. This recipe serves 4. One portion of this dish contains about <b>34g of protein</b>, <b>31g of fat</b>, and a total of <b>778 calories</b>. For <b>$1.61 per serving</b>, this recipe <b>covers 44%</b> of your daily requirements of vitamins and minerals. If you have chickpeas, olive oil, sea salt, and a few other ingredients on hand, you can make it. It works best as a marinade, and is done in about <b>45 minutes</b>. It is a good option if you're following a <b>gluten free, dairy free, lacto ovo vegetarian, and vegan</b> diet. 35 people have made this recipe and would make it again. It is brought to you by foodandspice.blogspot.com. Overall, this recipe earns a <b>great spoonacular score of 98%</b>. <a href=\"https://spoonacular.com/recipes/chopped-hummus-dip-with-zaatar-180958\">Chopped Hummus Dip with Za'atar</a>, <a href=\"https://spoonacular.com/recipes/mediterranean-hummus-toast-with-zaatar-1067472\">Mediterranean Hummus Toast with Za’atar</a>, and <a href=\"https://spoonacular.com/recipes/hummus-deviled-eggs-with-zaatar-exercise-challenge-1195539\">Hummus Deviled Eggs with Za’atar {Exercise Challenge}</a> are very similar to this recipe.",
        "cuisines": [
            "Middle Eastern"
        ],
        "dishTypes": [
            "seasoning",
            "marinade"
        ],
        "diets": [
            "gluten free",
            "dairy free",
            "lacto ovo vegetarian",
            "vegan"
        ],
        "occasions": [],
        "analyzedInstructions": [
            {
                "name": "",
                "steps": [
                    {
                        "number": 1,
                        "step": "Rinse the chickpeas and soak for 8 hours or overnight in several inches of water.",
                        "ingredients": [
                            {
                                "id": 16057,
                                "name": "chickpeas",
                                "localizedName": "chickpeas",
                                "image": "chickpeas.png"
                            },
                            {
                                "id": 14412,
                                "name": "water",
                                "localizedName": "water",
                                "image": "water.png"
                            }
                        ],
                        "equipment": [],
                        "length": {
                            "number": 480,
                            "unit": "minutes"
                        }
                    },
                    {
                        "number": 2,
                        "step": "Drain and rinse, then transfer to a medium saucepan and cover with fresh water. Bring to a boil, reduce heat to medium-low, cover, and simmer for 1 to 1 1/2 hours or until soft.",
                        "ingredients": [
                            {
                                "id": 14412,
                                "name": "water",
                                "localizedName": "water",
                                "image": "water.png"
                            }
                        ],
                        "equipment": [
                            {
                                "id": 404669,
                                "name": "sauce pan",
                                "localizedName": "sauce pan",
                                "image": "sauce-pan.jpg"
                            }
                        ],
                        "length": {
                            "number": 120,
                            "unit": "minutes"
                        }
                    },
                    {
                        "number": 3,
                        "step": "Drain, reserving the cooking liquid. (If using canned chickpeas, rinse thoroughly.)Meanwhile, toast the pine nuts in a dry unoiled skillet or saucepan over medium-low heat, tossing or stirring frequently, for 10 minutes or until lightly browned.",
                        "ingredients": [
                            {
                                "id": 16058,
                                "name": "canned chickpeas",
                                "localizedName": "canned chickpeas",
                                "image": "chickpeas.png"
                            },
                            {
                                "id": 12147,
                                "name": "pine nuts",
                                "localizedName": "pine nuts",
                                "image": "pine-nuts.png"
                            },
                            {
                                "id": 0,
                                "name": "sandwich bread",
                                "localizedName": "sandwich bread",
                                "image": "white-bread.jpg"
                            }
                        ],
                        "equipment": [
                            {
                                "id": 404669,
                                "name": "sauce pan",
                                "localizedName": "sauce pan",
                                "image": "sauce-pan.jpg"
                            },
                            {
                                "id": 404645,
                                "name": "frying pan",
                                "localizedName": "frying pan",
                                "image": "pan.png"
                            }
                        ],
                        "length": {
                            "number": 10,
                            "unit": "minutes"
                        }
                    },
                    {
                        "number": 4,
                        "step": "Transfer the chickpeas to a food processor and add the pine nuts, 2 tablespoons of olive oil, 1/4 cup of the reserved chickpea cooking liquid (or water if using canned chicpeas), the tahini, garlic, lemon juice and salt. Process until smooth, adding more of the reserved chickpea cooking liquid or water as necessary to reach a light creamy consistency. Taste for seasoning and add more salt or lemon juice as desired.",
                        "ingredients": [
                            {
                                "id": 9152,
                                "name": "lemon juice",
                                "localizedName": "lemon juice",
                                "image": "lemon-juice.jpg"
                            },
                            {
                                "id": 16057,
                                "name": "chickpeas",
                                "localizedName": "chickpeas",
                                "image": "chickpeas.png"
                            },
                            {
                                "id": 4053,
                                "name": "olive oil",
                                "localizedName": "olive oil",
                                "image": "olive-oil.jpg"
                            },
                            {
                                "id": 12147,
                                "name": "pine nuts",
                                "localizedName": "pine nuts",
                                "image": "pine-nuts.png"
                            },
                            {
                                "id": 1042027,
                                "name": "seasoning",
                                "localizedName": "seasoning",
                                "image": "seasoning.png"
                            },
                            {
                                "id": 11215,
                                "name": "garlic",
                                "localizedName": "garlic",
                                "image": "garlic.png"
                            },
                            {
                                "id": 12698,
                                "name": "tahini",
                                "localizedName": "tahini",
                                "image": "tahini-paste.png"
                            },
                            {
                                "id": 14412,
                                "name": "water",
                                "localizedName": "water",
                                "image": "water.png"
                            },
                            {
                                "id": 2047,
                                "name": "salt",
                                "localizedName": "salt",
                                "image": "salt.jpg"
                            }
                        ],
                        "equipment": [
                            {
                                "id": 404771,
                                "name": "food processor",
                                "localizedName": "food processor",
                                "image": "food-processor.png"
                            }
                        ]
                    },
                    {
                        "number": 5,
                        "step": "Transfer the hummus to a shallow bowl and drizzle with olive oil.",
                        "ingredients": [
                            {
                                "id": 4053,
                                "name": "olive oil",
                                "localizedName": "olive oil",
                                "image": "olive-oil.jpg"
                            },
                            {
                                "id": 16158,
                                "name": "hummus",
                                "localizedName": "hummus",
                                "image": "hummus.jpg"
                            }
                        ],
                        "equipment": [
                            {
                                "id": 404783,
                                "name": "bowl",
                                "localizedName": "bowl",
                                "image": "bowl.jpg"
                            }
                        ]
                    },
                    {
                        "number": 6,
                        "step": "Sprinkle with za'atar and paprika, and serve with chopped fresh vegetables or toasted pita triangles.Refrigerate leftover hummus for a few days or freeze for up to a month.",
                        "ingredients": [
                            {
                                "id": 11583,
                                "name": "vegetable",
                                "localizedName": "vegetable",
                                "image": "mixed-vegetables.png"
                            },
                            {
                                "id": 2028,
                                "name": "paprika",
                                "localizedName": "paprika",
                                "image": "paprika.jpg"
                            },
                            {
                                "id": 1002042,
                                "name": "zaatar",
                                "localizedName": "zaatar",
                                "image": "zaatar.png"
                            },
                            {
                                "id": 16158,
                                "name": "hummus",
                                "localizedName": "hummus",
                                "image": "hummus.jpg"
                            },
                            {
                                "id": 18413,
                                "name": "pita",
                                "localizedName": "pita",
                                "image": "pita-bread.jpg"
                            }
                        ],
                        "equipment": []
                    }
                ]
            }
        ],
        "spoonacularSourceUrl": "https://spoonacular.com/hummus-and-zaatar-766453"
    }
];


const initialState = {
    recipes: [],
    recipesDiet: [], // este lo hice para que siempre me traiga las dietas y no que busque de nuevo en el resultado
    recipesCopy: [],
    recipeDetail: {},
    error: false,
    filterReset: false
}

const rootReducer = (state = initialState, action) => {

    switch (action.type) {

        case SEARCH_RECIPES:
            if (action.payload.error) return console.log('Hubo un error en el servidor');
            if (action.payload.length === 0) alert('No se encontro nada')
            return { ...state, recipes: action.payload, recipesDiet: action.payload, recipesCopy: action.payload };

        case GET_RECIPE_DETAIL:
            return { recipeDetail: action.payload };

        /* case SEARCH_RECIPES_DIET:
            const allRecipes = state.recipesDiet;
            const dietFilter = allRecipes.filter((elem) => elem.diets.includes(action.payload))
            console.log(dietFilter + '<--' + allRecipes + '##' + action.payload);
            return { ...state, recipes: dietFilter } */

        case SEARCH_RECIPES_DIET:
            const allRecipes = state.recipesCopy;

            if (action.payload === '') {
                return { ...state, recipes: allRecipes }
            }
            const dietFilter = allRecipes.filter((elem) => elem.diets.includes(action.payload))
            //console.log(dietFilter + '<--' + allRecipes + '##' + action.payload);
            return { ...state, recipes: dietFilter }

        case ORDER_SCORE:
            const orderType = action.payload;
            let score;

            if (orderType === 'asc') {
                //console.log(action.payload);
                //console.log(state.recipes);
                //const allRecipes = state.recipes;
                score = state.recipes.sort(function (a, b) {
                    if (a.healthScore > b.healthScore) {
                        return 1;
                    }
                    if (a.healthScore < b.healthScore) {
                        return -1;
                    }
                    return 0;
                });
            } else {
                score = state.recipes.sort(function (a, b) {
                    if (a.healthScore < b.healthScore) {
                        return 1;
                    }
                    if (a.healthScore > b.healthScore) {
                        return -1;
                    }
                    return 0;
                });
            }
            return { ...state, recipes: score }

        case ORDER_ALPH:
            const orderAlph = action.payload;
            let alph;

            if (orderAlph === 'asc') {
                alph = state.recipes.sort(function (a, b) {

                    if (a.title > b.title) {
                        return 1;
                    }
                    if (a.title < b.title) {
                        return -1;
                    }
                    // a must be equal to b
                    return 0;
                });
            } else {
                alph = state.recipes.sort(function (a, b) {

                    if (a.title < b.title) {
                        return 1;
                    }
                    if (a.title > b.title) {
                        return -1;
                    }
                    // a must be equal to b
                    return 0;
                });
            }
            console.log(alph);
            return { ...state, recipes: alph }

        case CLEAN_DETAIL:
            return { ...state, recipeDetail: {} }

        case DELETE_RECIPE:
            return { ...state, recipes: action.payload }

        case FILTER_RESET:
            return { ...state, filterReset: action.payload }

        case CLEAN_RECIPE:
            return { ...state, recipes: [] }

        default:
            return { ...state };
    }
}

export default rootReducer;