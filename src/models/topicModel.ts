import { ITopic } from '@/interfaces';
import rawTopics from '../data/itemtype_topics.json';
import * as qstr from '../qtools/qstr';

export const buildTopics = () => {
	let _topics: ITopic[] = [];
	for (const rawTopic of rawTopics) {
		const topic: ITopic = {
			id: rawTopic.id,
			category: rawTopic.category,
			title: rawTopic.title,
			body: rawTopic.body,
			bodyHtml: qstr.buildOutlineHtml(rawTopic.body),
			bodyDescription: qstr.extractDescriptionFromOutline(rawTopic.body),
			systemWhenCreated: rawTopic.systemWhenCreated,
			selectedForSearch: false,
			styledTitle: rawTopic.title,
			styledCategory: rawTopic.category
		};
		_topics.push(topic);
	}

	_topics.sort((a, b) =>
		a.systemWhenCreated < b.systemWhenCreated ? 1 : -1
	);
	return _topics;
}
