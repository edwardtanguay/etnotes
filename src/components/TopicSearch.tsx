'use client';
import { useEffect, useRef, useState } from 'react';
import * as qdat from '../qtools/qdat';
import * as qstr from '../qtools/qstr';
import { FaSpinner } from 'react-icons/fa';
import Link from 'next/link';
import { useContext } from 'react';
import { AppContext } from '../AppContext';
import { ITopic } from '../interfaces';

export default function TopicSearch() {
	const searchTextRef = useRef<HTMLInputElement>(null);
	const { searchText, setSearchText, filteredTopics, setFilteredTopics, topics } = useContext(AppContext);
	const [clickedAndWaiting, setClickedAndWaiting] = useState(false);

	const handleSearchTextChange = (_searchText: string) => {
		if (_searchText.length >= 3) {

			const _topics: ITopic[] = [];

			topics.forEach(m => m.selectedForSearch = false);

			// primary result group
			for (const topic of topics) {
				const bulkSearch = topic.category + '|' + topic.title;
				if (qstr.textContainsAllTerms(bulkSearch, _searchText)) {
					_topics.push(topic);
					topic.selectedForSearch = true;
				}
			}
			// secondary result group
			for (const topic of topics) {
				const bulkSearch = topic.category + '|' + topic.title + '|' + topic.body;
				if (qstr.textContainsAllTerms(bulkSearch, _searchText)) {
					if (!topic.selectedForSearch) {
						_topics.push(topic);
						topic.selectedForSearch = true;
					}
				}
			}

			for (const _topic of _topics) {
				_topic.styledTitle = qstr.wrapFoundSearchWordsWithClassElement(_topic.title, _searchText);
				_topic.styledCategory = qstr.wrapFoundSearchWordsWithClassElement(_topic.category, _searchText);
			}

			setFilteredTopics(_topics);
		} else {
			if (_searchText.trim().length === 0) {
				const _topics = [...topics];
				for (const _topic of _topics) {
					_topic.styledTitle = _topic.title;
					_topic.styledCategory = _topic.category;
				}
				setFilteredTopics(_topics);
			} else {
				for (const filteredTopic of filteredTopics) {
					filteredTopic.styledTitle = qstr.wrapFoundSearchWordsWithClassElement(filteredTopic.title, _searchText);
					filteredTopic.styledCategory = qstr.wrapFoundSearchWordsWithClassElement(filteredTopic.category, _searchText);
				}
			}
		}
		setSearchText(_searchText);
	};

	useEffect(() => {
		setFilteredTopics(topics);
		handleSearchTextChange(searchText);
	}, []);

	// focuses cursor after loading graphic
	useEffect(() => {
		if (filteredTopics.length > 0) {
			setTimeout(() => {
				if (searchTextRef.current) {
					searchTextRef.current.focus();
				}
			}, 10);
		}
	}, [filteredTopics]);

	const topicsAreReady = () => filteredTopics.length > 0 || searchText.trim() !== '';

	const userUxLoadSinglePage = () => {
		setClickedAndWaiting(true);
	}

	return (
		<>
			{clickedAndWaiting ? (
				<FaSpinner className="loaderIcon text-9xl text-slate-600" />
			) : (
				<>
					{topicsAreReady() ? (
						<p className="text-3xl mb-3">{qstr.smartPlural(filteredTopics.length, 'Topic')}</p>
					) : (
						<p className="text-3xl mb-3 flex gap-1">
							<FaSpinner className="loaderIcon" /> Topics
						</p>
					)}
					<input
						value={searchText}
						onChange={(e) => handleSearchTextChange(e.target.value)}
						className="text-3xl placeholder-slate-300 text-slate-500 rounded p-1 mb-5 sm:w-full lg:w-[30rem] "
						autoFocus
						ref={searchTextRef}
						disabled={!topicsAreReady()}
						placeholder={topicsAreReady() ? 'search topics' : ''}
					/>
					{filteredTopics.map((filteredTopic, index: number) => {
						return (
							<div key={index} className="mb-3">
								<div className="text-yellow-400 smallcaps text-sm text-opacity-70">
									<span dangerouslySetInnerHTML={{ __html: filteredTopic.styledCategory }}></span>
								</div>
								<div><span className="searchHighlight"></span></div>
								<Link href={`/topics/${filteredTopic.suuid}`} className='topicLink' onClick={(e) => { userUxLoadSinglePage() }}>
									<span className="text-slate-50 text-xl" dangerouslySetInnerHTML={{ __html: filteredTopic.styledTitle }}></span>
								</Link>
							</div>
						);
					})}
				</>
			)}
		</>
	);
}
