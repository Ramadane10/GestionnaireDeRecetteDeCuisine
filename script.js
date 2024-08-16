// GESTION DES RECETTES

// Tableau pour stocker les recettes
let recettes = []

// Fonction pour ajouter une nouvelle recette
function ajouterNouvelleRecette(titre, ingredients, instructions, tempsDePreparation, difficulte){
    if (!titre || !ingredients || !instructions || !tempsDePreparation || !difficulte){
        console.log('Tous les champs sont obligatoires')
        return
    }
    // Création de l'objet recette
    let nouvelleRecette = {
        titre: titre, 
        ingredients: ingredients, 
        instructions: instructions,
        tempsDePreparation: tempsDePreparation,
        difficulte: difficulte
    };
    recettes.push(nouvelleRecette)
    console.log(`La Recette ${titre} est ajoutée avec succès !`)
}

// Appel de la fonction ajouterNouvelleRecette
ajouterNouvelleRecette(
    "Gâteau au chocolat", 
    [
         "Oeufs", "Farine",  "Sucre", "Chocolat"
    ], 
    "Mélanger tous les ingrédients et cuire au four.", 
    60, // temps de préparation
    "Facile" // niveau de difficulté
);


// Ajout de la recette du salade dans le tableau recettes
 ajouterNouvelleRecette(
    "salade",
    [
         "Laitue","ail","Œuf","Moutarde","Jus de citron", "Huile d'olive", "Sel", "Poivre"
     ],
     "Lavez et coupez la laitue. Préparez la sauce en mélangeant ail, œuf, moutarde, jus de citron, et huile d'olive. Mélangez la laitue avec la sauce.",
     15, // Temps de préparation en minutes
    "Facile" // Niveau de difficulté
 );


// Ajout de la recette du spaghetti dans le tableau recettes
// ajouterNouvelleRecette(
//     "Spaghetti",
//     ["Spaghetti", "Viande hachée", "Tomates", "Oignons","Carottes","Huile d'olive", "Sel", "Poivre"],
//     "Faire revenir les oignons, l'ail, les carottes et le céleri dans l'huile d'olive. Ajouter la viande hachée et la faire dorer. Ajouter les tomates, le vin rouge, et les herbes. Laisser mijoter pendant 30 minutes. Cuire les spaghetti al dente, les mélanger avec la sauce. Servir chaud.",
//     40,
//     "Moyenne"
// )

// Fonction pour modifier une recette existante
function modifierRecetteExistante(titre, nouveauxDetails){
    for (let i; i<recettes.length; i++){
        if(recettes[i].titre === titre){
            recettes[i].titre = nouveauxDetails.titre || recettes[i].titre;
            recettes[i].ingredients = nouveauxDetails.ingredients || recettes[i].ingredients;
            recettes[i].instructions = nouveauxDetails.instructions || recettes[i].instructions;
            recettes[i].tempsDePreparation = nouveauxDetails.tempsDePreparation || recettes[i].tempsDePreparation;
            recettes[i].difficulte = nouveauxDetails.difficulte || recettes[i].difficulte;
        }
        console.log(`Recette ${titre} modifiée avec succès !`);
        return;
    }
    console.log(`Recette ${titre} non trouvée !`);
}

// Appel de la fonction modifierRecetteExistante

// ajout de l'ingredient l'Ail 
// modifierRecetteExistante(
//     "Spaghetti", // Titre de la recette à modifier
//     {
//         titre: "Spaghetti", // Nouveau titre (facultatif)
//         ingredients: ["Spaghetti", "Viande hachée", "Tomates", "Oignons", "Ail", "Carottes","Huile d'olive", "Sel", "Poivre"],
//         instructions: "Mélanger tous les ingrédients et cuire doucement dans une poêle chaude.", // Nouvelles instructions (facultatif)
//         tempsPreparation: 41, // Nouveau temps de préparation (facultatif)
//         difficulte: "Moyenne" // Nouvelle difficulté (facultatif)
//     }
// );

// Fonction pour supprimer une recette
function removeRecipe(titre){
    for (let i = 0; i < recettes.length; i++){
        if (recettes[i].titre === titre){
            recettes.splice(i, 1)
            console.log(`Recette ${titre} supprimée avec succès !`);
            return;
        }
    }
    console.log(`Recette "${titre}" non trouvée !`);
}


// Appel de la fonction supprimerRecette
// removeRecipe('Spaghetti')



// RECHERCHE ET FILTRAGE

// Recherche de recette par titre
function findRecipe(titre){
    for (let i = 0; i < recettes.length; i++){
        if(recettes[i].titre === titre){
            return recettes[i]
        }
    }
    return null
}

let find = findRecipe('omelette')
if (find){
    console.log('Recette trouvée')
    console.log(find)
}else {
    console.log('Recette non trouvée')
}

// Filtrage des recettes par niveau de difficulté
function filterRecipeByDifficulty(difficulte){
    let recipeFilter = []
    for (let i = 0; i < recettes.length; i++){
        if (recettes[i].difficulte === difficulte){
            recipeFilter.push(recettes[i])
        }
    }
    return recipeFilter
}

let filter = filterRecipeByDifficulty('Facile')
console.log(`les recettes filtrées sont : `, filter )


// Planification des repas
// Création d'une liste d'ingredients disponibles



function createListIngredientAvailable(recettes){
    let ingredientsAvailable = []
    for (let i = 0; i < recettes.length; i++){
        let ingredients = recettes[i].ingredients

        // Ajout de l'ingredient à la liste s'il n'existe pas
        if (!ingredientsAvailable.includes(ingredients)){
            ingredientsAvailable.push(ingredients)
        }
    }

    return ingredientsAvailable
}

let ingredientsAvailable = createListIngredientAvailable(recettes)
console.log('Les ingredients disponibles dans cette recette sont : '+ ingredientsAvailable)

// Vérification de la disponibilité de tous les ingrédients d'une recette

function checkIngredientsAvailable(ingredients, ingredientsAvailable){
    for (let i = 0; i < ingredients.length; i++){
        let ingredient = ingredients[i]

        if (!ingredientsAvailable.includes(ingredient)){
            return false
        }
    }
    return true
}

// Exemple de recette specifique
let recetteTitre = 'Gâteau au chocolat'
let recette = recettes.find(rec => rec.titre === recetteTitre)
let ingredients = recette ? recette.ingredients : []

ingredientsAvailable = [ "Oeufs", "Farine",  "Sucre"]
let allAvailable = checkIngredientsAvailable(ingredients, ingredientsAvailable)
if (allAvailable){
    console.log('Tous les ingrédients sont disponibles pour cette recette')
    }else {
        console.log('Certains ingrédients manquent pour la recette')
}



// Planification des repas

// Création du planing hébdomadiare de repas
function createRabotageWeekly(lundi, mardi, mercredi, jeudi, vendredi, samedi){
    let planing = {
        "Lundi": lundi,
        "Mardi": mardi,
        "Mercredi": mercredi,
        "Jeudi": jeudi,
        "Vendredi": vendredi,
        "Samedi": samedi
    }
    
    // Afficher le jour avec le planing
    for (let jour in planing){
        console.log(`${jour} : ${planing[jour]}`)
    }

    return planing
}

let rabotyWeekly = createRabotageWeekly(
    "Gâteau au chocolat",
    "Salade",
    "Spaghetti",
    "Gâteau au chocolat",
    "Salade",
    "Spaghetti"
)


// Création de la fonction pour Générer une liste de courses basée sur le planning
function generateListCourse(titrePlat, recettes){
    let ingredientsList = []

    // Fonction pour obtenir les ingredients d'une recette
    function getIngredients(titre){
        for (let i = 0; i < recettes.length; i++){
            if (recettes[i].titre === titre){
                return recettes[i].ingredients
            }
        }
        
        return []
    }

        let ingredients = getIngredients(titrePlat)

        // Ajouter les ingredients à la liste
        for (let i = 0; i < ingredients.length; i++){
            if (!ingredientsList.includes(ingredients[i])){
                ingredientsList.push(ingredients[i])
            }
        }

    return ingredientsList
}

let titrePlat = "salade"
let listCourse = generateListCourse(titrePlat, recettes)
console.log('Liste de courses pour ', titrePlat, ":" , listCourse)


// Calcul des portions

// console.log(recettes)
