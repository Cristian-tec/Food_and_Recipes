let analyzedInstructions = [
    {
        name: '',
        steps: [
            {
                number: 1,
                step: 'Peel and chop your mango into small cubes',
                ingredients: [Array],
                equipment: []
            },
            {
                number: 2,
                step: 'Cube your bell peppers and onions as well and mix in with the mangoes.',
                ingredients: [Array],
                equipment: []
            },
            {
                number: 3,
                step: 'Add the cherry tomatoes and mix in.sprinkle your sugar and lime juice over it.Chop your scent/mint leaves and mix in and refrigerate.',
                ingredients: [Array],
                equipment: []
            },
            {
                number: 4,
                step: 'Serve cool as a side dish or if you want something refreshing on a hot day.',
                ingredients: [],
                equipment: []
            }
        ]
    }
]
console.log(analyzedInstructions[0].steps);
const steps = analyzedInstructions[0].steps.map(elem => {
    return elem.number + ' ' + elem.step;
});
console.log(steps);

let arreglo = [
    {
        id: 654959,
        title: "Pasta With Tuna",
        image: "https://spoonacular.com/recipeImages/654959-312x231.jpg",
        imageType: "jpg"
    },
    {
        id: 511728,
        title: "Pasta Margherita",
        image: "https://spoonacular.com/recipeImages/511728-312x231.jpg",
        imageType: "jpg"
    }]

    let ordenado = arreglo.map(elem => {
        return {id: elem.id, title: elem.title, image: elem.image}
    })

    console.log(ordenado);