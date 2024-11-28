export type Range = 0|1|2|3|4|5|6|7|8|9|10|11|12|13|14|15|16|17|18|19|20;

export type IngredientKey = `strIngredient${Range}`;
export type MeasureKey = `strMeasure${Range}`;

export type IngredientsMeal = {
    [key in IngredientKey]: Nullable<string>;
}

export type MeasuresMeal = {
    [key in MeasureKey]: Nullable<string>;
}

export type Nullable<T> = T | null;

export interface Meal extends IngredientsMeal, MeasuresMeal {
    idMeal: string;
    strMeal: string;
    strCategory: string;
    strArea: string;
    strInstructions: string;
    strMealThumb: string;
    strTags: string;
    strYoutube: string;
    strDrinkAlternate: Nullable<string>;
    strCreativeCommonsConfirmed: Nullable<string>; 
    strImageSource: Nullable<string>;
    strSource: Nullable<string>;
};

export interface Recipe {
    ingredient: IngredientKey;
    measure: MeasureKey;
}



//Pick -  picks | Omit - delete
// export interface ShortMeal extends Omit<Meal, 'strYoutube' | 'strMealThumb' | 'strDrinkAlternate'>{

// }