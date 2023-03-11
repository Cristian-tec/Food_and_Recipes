const { Router } = require('express');
const axios = require('axios')
const { Op } = require('sequelize')
// Importar todos los routers;
// Ejemplo: const authRouter = require('./auth.js');
const { Recipe, Diet, Recipe_Diet } = require('../db'); // ACA importo donde ejecuto los models de tablas
const { getRecipeTitle, getRecipeAll, getRecipeId } = require('../controllers/controllers')
const {
    API_Key
} = process.env;

const router = Router();

// Configurar los routers
// Ejemplo: router.use('/auth', authRouter);


// En esta ruta si paso algo por query lo busco en la api y en la bbdd interna, sino encuentra nada arroja un error
// Si no le paso nada por query traigo 100 elementos de la api mas todos de la bbdd interna
router.get('/', async (req, res) => {
    //          recipes?title=
    try {

        const { title } = req.query;
        if (title !== '') {

            const result = await getRecipeTitle(title);
            res.status(200).json(result);
            //
        } else {
            const result = await getRecipeAll();
            res.status(200).json(result);
        }

    } catch (e) {
        let error = { error: 'error' }
        return res.status(404).json({ error: 'Error 01' })
    }
})
//

// En esta rut0ta y traigo su contenido con lo que pide el PI
router.get('/:idReceta', async (req, res) => {

    try {
        const { idReceta } = req.params;
        // console.log(idReceta+'<<--');
        const result = await getRecipeId(idReceta);
        return res.status(200).json(result);

    } catch (error) {

        return res.status(404).send(error.message);

    }
})

// Aca en esta ruta del tipo POST creo un registro en la bbdd interna 
router.post('/', async (req, res) => {

    try {

        const { title, summary, healthScore, stepToStep, image, diets } = req.body;

        if (!title || !summary) throw new Error('Faltan datos para crear la receta')

        const existTitle = await Recipe.findAll({ where: { title: title } })
        //console.log(existTitle + '<<<<');
        if (existTitle.length) throw new Error('Ya existe una receta con ese titulo.')

        let a = stepToStep.map((elem, i) => {
            return (
                (i + 1) + ') ' + elem)
        }
        )
//
        const newRecipe = await Recipe.create({ title, summary, healthScore, stepToStep: a, image });

        const dietSearch = [];

        if (diets) { // ["dieta1, "dieta2", "dieta3"]
            for (let i = 0; i < diets.length; i++) {
                dietSearch.push(... await Diet.findAll({ where: { name: diets[i] } }))  // <--------
            } //  [{id:1, name:'Vegano'}, {id:7, name:'Gluten'}]
        }
        const filterDietName = dietSearch.map(elem => elem.name) // sino aplico este map tendria un arreglo de objetos
        //const dietSearch = await Diet.findAll({ where: { name: diets } }) lo dejo del tipo diets: ["Vegano", "Gluten"...]
        // console.log("--> " + dietSearch);
        await newRecipe.addDiet(dietSearch); // aca lo vinculo a la tabla intermedia para despues usarlo en la busqueda

        const aux = await Recipe.findOne({ where: { title: title } })
        //console.log(aux);
        //res.status(200).json(aux)
        const { id } = aux
        res.status(200).json({ id, title, summary, healthScore, stepToStep, image, diets: filterDietName });

    } catch (error) {
        return res.status(404).send(error.message)
    }
})

router.delete('/:idDelete', async (req, res) => {

    try {
        const { idDelete } = req.params;
        if (idDelete) {
            console.log(idDelete + '<--');
            const recipeFind = await Recipe.findByPk(idDelete);
            if (recipeFind) {
                await recipeFind.destroy();
                // res.status(200).send('Usuario: ' + recipeFind.id + ' eliminado')
                const result = await getRecipeAll();
                res.status(200).json(result);
            } else {
                throw new Error('No existe el id a eliminar...')
            }
        }
    } catch (error) {
        return res.status(404).send(error.message)
    }

})

router.put('/', async (req, res) => {

    try {

        const { id, title, summary, healthScore } = req.body;
        const recipeMod = await Recipe.findByPk(id);

        if (recipeMod) {
            recipeMod.title = title;
            recipeMod.summary = summary;
            recipeMod.healthScore = healthScore;
            recipeMod.save();
            res.status(200).send('Se modificaron los datos con exito')
        }

    } catch (error) {
        return res.status(404).send(error.message)
    }

})

module.exports = router;
