export interface Meal {
    idMeal: string;
    strMeal: string;
    strDrinkAlternate: null;
    strCategory: string;
    strArea: string;
    strInstructions: string;
    strMealThumb: string;
    strTags: string;
    strYoutube: string;
}

//Pick Omit
// export interface ShortMeal extends Pick<Meal, 'strYoutube' | 'strMealThumb' | 'strDrinkAlternate'>{

// }