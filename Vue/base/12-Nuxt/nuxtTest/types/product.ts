// To parse this data:
//
//   import { Convert, FbDuK36Jo2VSlSDfTuVotUMZj822FvWCPqaFxpcXiWNo } from "./file";
//
//   const fbDuK36Jo2VSlSDfTuVotUMZj822FvWCPqaFxpcXiWNo = Convert.toFbDuK36Jo2VSlSDfTuVotUMZj822FvWCPqaFxpcXiWNo(json);
//
// These functions will throw an error if the JSON doesn't
// match the expected interface, even if the JSON is valid.

export interface IData {
	recipes: Recipe[];
	total: number;
	skip: number;
	limit: number;
}

export interface Recipe {
	id: number;
	name: string;
	ingredients: string[];
	instructions: string[];
	prepTimeMinutes: number;
	cookTimeMinutes: number;
	servings: number;
	difficulty: Difficulty;
	cuisine: string;
	caloriesPerServing: number;
	tags: string[];
	userId: number;
	image: string;
	rating: number;
	reviewCount: number;
	mealType: string[];
}

export enum Difficulty {
	Easy = "Easy",
	Medium = "Medium",
}
