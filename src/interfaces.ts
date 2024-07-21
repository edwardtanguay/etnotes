import { z } from "zod";

export interface ITopic {
	dpodId: string;
	category: string;
	title: string;
	body: string;
	bodyHtml: string;
	selectedForSearch: boolean;
	styledTitle: string;
	styledCategory: string;
}
