const axios = require('axios');
const { Recipe, Diet } = require('../db');
const { API_Key } = process.env;
const dataAll = require('../data/api.json')

const getRecipeTitle = async (title) => {

    const queryAxios = await axios(`https://api.spoonacular.com/recipes/complexSearch?apiKey=${API_Key}&addRecipeInformation=true&query=${title}`)
    //const queryAxios = dataAll.results.filter(elem => elem.title.toLowerCase().includes(title.toLowerCase()))
    console.log( queryAxios);
    // console.log(title + '<--');
    const queryBD = await Recipe.findAll({

        attributes: ['id', 'title', 'image', 'summary', 'healthScore'],
        // attributes: ['id', 'title', 'image', 'summary']
        include: [
            {
                model: Diet,
                attributes: ["name"],
                through: {
                    attributes: [],
                },
            }
        ],
    });

    let propS = [];
    if (queryAxios.data.results.length > 0) {
        propS = queryAxios.data.results.map(elem => {
            return { id: elem.id, title: elem.title, image: elem.image, summary: elem.summary, diets: elem.diets, healthScore: elem.healthScore }
        });
    }

    //filtro la busqueda de la bd interna
    const filter = queryBD.filter(elem => {
        return elem.title.toLowerCase().includes(title.toLowerCase())
    })
    //console.log(filter);
    const reFormat = filter.map(elem => {
        let objeto = {};
        objeto.id = elem.id;
        objeto.title = elem.title;
        objeto.image = elem.image;
        objeto.summary = elem.summary;
        objeto.healthScore = elem.healthScore;
        objeto.diets = elem.diets.map(e => e.name) // aca paso de [{diet: 'vegan'}, {diet:'gluten'}] -> ['vegan', 'gluten']
        return objeto;
    });

    const total = reFormat.concat(propS);
    return total;
}


const getRecipeAll = async () => {
    //ORIGINAL
    /* const queryAxios = await axios
        (`https://api.spoonacular.com/recipes/complexSearch?apiKey=${API_Key}&addRecipeInformation=true&number=100`)
    const propS = await queryAxios.data.results.map(elem => {
        return { id: elem.id, title: elem.title, image: elem.image, summary: elem.summary, diets: elem.diets, healthScore: elem.healthScore }
    }); */

    const queryAxios = dataAll.results;
    /* console.log(queryAxios); */
    const propS = queryAxios.map(elem => {
        return { id: elem.id, title: elem.title, image: elem.image, summary: elem.summary, diets: elem.diets, healthScore: elem.healthScore }
    });

    const queryBD = await Recipe.findAll({
        attributes: ['id', 'title', 'image', 'summary', 'healthScore'],
        include: [
            {// aca hago la puta relacion para que me traiga automaticamente de la tabla intermedia
                model: Diet,
                attributes: ["name"],
                through: {
                    attributes: [],
                },
            }
        ],
    });
    //console.log(queryBD);
    //esto solo para que me quede la info igual a como la envia la api!!!!
    //ACA PROBAR CON LOS tre puntos {...queryBD, diets: queryBD.diets.map(elem => elem.name)
    const reFormat = queryBD.map(elem => {
        let objeto = {};
        objeto.id = elem.id;
        objeto.title = elem.title;
        objeto.image = elem.image;
        objeto.summary = elem.summary;
        objeto.healthScore = elem.healthScore;
        objeto.diets = elem.diets.map(e => e.name) // aca paso de [{diet: 'vegan'}, {diet:'gluten'}] -> ['vegan', 'gluten']
        return objeto;
    });

    const total = reFormat.concat(propS);
    return total;
}


const getRecipeId = async (idReceta) => {

    let size = idReceta.toString().length;
    // tambien podria haber buscado letras dentro del string 
    // y si tiene quiere decir que pertenece a la bbdd interna
    if (size > 10) {

        const queryLocal = await Recipe.findOne({
            where: { id: idReceta },
            attributes: ['id', 'title', 'image', 'summary', 'healthScore', 'stepToStep'],
            include: [
                {// aca hago la puta relacion para que me traiga automaticamente de la tabla intermedia
                    model: Diet,
                    attributes: ["name"],
                    through: {
                        attributes: [],
                    },
                }
            ]
        });
        if (!queryLocal) throw new Error('No se encontro lo que busca en la BBDD interna.')

        const reFormat = {

            id: queryLocal.id,
            title: queryLocal.title,
            image: queryLocal.image,
            summary: queryLocal.summary,
            healthScore: queryLocal.healthScore,
            stepToStep: queryLocal.stepToStep,
            diets: queryLocal.diets?.map(e => e.name) // aca paso de [{diet: 'vegan'}, {diet:'gluten'}] -> ['vegan', 'gluten']

        };

        return (reFormat);

    } else {
        const queryAxios = await axios
            (`https://api.spoonacular.com/recipes/${idReceta}/information?apiKey=${API_Key}`)
        //console.log(queryAxios);
        if (!queryAxios) throw new Error('No se encontro lo que busca en la API')
        const {
            id,
            title,
            image,
            dishTypes,
            diets,
            summary,
            healthScore,
            analyzedInstructions } = queryAxios.data;
        // colocar condicion de que el arreglo sea mayor a cero sino el map daria error

        let stepToStep = analyzedInstructions[0]?.steps.map(elem => {
            return elem.number + ') ' + elem.step;
        });

        if (!stepToStep) stepToStep = []

        //console.log(analyzedInstructions[0]);
        return ({ id, title, image, dishTypes, diets, summary, healthScore, stepToStep })
    }

}

const createDiets = async () => {

    try {
        if (true) {
            let diet = [
                'gluten free',
                'ketogenic',
                'vegetarian',
                'lacto ovo vegetarian',
                'ovo vegetarian',
                'vegan',
                'pescetarian',
                'paleo',
                'primal',
                'low FODMAP',
                'whole 30',
                'dairy free',
                'paleolithic'
            ];

            diet.forEach(elem => {
                Diet.findOrCreate({ where: { name: elem } });
            })

            let dietCreated = await Diet.findAll();
            //res.status(200).json(dietCreated)

        }
    } catch (error) {
        //return res.status(404).send(error.message);
        console.log('Error al llenar la tabla diets');
    }
}

module.exports = { getRecipeTitle, getRecipeAll, getRecipeId, createDiets }