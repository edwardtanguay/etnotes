import { z } from "zod";

export interface ITopic {
	id: number;
	category: string;
	title: string;
	body: string;
	bodyHtml: string;
	bodyDescription: string;
	systemWhenCreated: string;
	selectedForSearch: boolean;
	styledTitle: string;
	styledCategory: string;
}