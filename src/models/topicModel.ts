import { ITopic } from "@/interfaces";
import rawTopics from "../data/itemtype_topics.json";
import * as qstr from "../qtools/qstr";

export const buildTopics = () => {
	let _topics: ITopic[] = [];
	for (const rawTopic of rawTopics) {
		const topic: ITopic = {
			dpodId: rawTopic.dpodId,
			category: rawTopic.category,
			title: rawTopic.title,
			body: rawTopic.body,
			bodyHtml: qstr.buildOutlineHtml(rawTopic.body),
			selectedForSearch: false,
			styledTitle: rawTopic.title,
			styledCategory: rawTopic.category,
		};
		_topics.push(topic);
	}

	return _topics;
};
