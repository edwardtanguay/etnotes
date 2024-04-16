import { z } from "zod";

export interface ITopic {
	suuid: string;
	category: string;
	title: string;
	body: string;
	bodyHtml: string;
	selectedForSearch: boolean;
	styledTitle: string;
	styledCategory: string;
}