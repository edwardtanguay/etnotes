"use client";
import { useState, useEffect } from 'react';
import { createContext } from 'react';
import { ITopic } from './interfaces';
import * as appModel from './models/model';

interface IAppContext {
	searchText: string;
	setSearchText: (searchText: string) => void;
	topics: ITopic[];
	setTopics: (topics: ITopic[]) => void;
	filteredTopics: ITopic[];
	setFilteredTopics: (topics: ITopic[]) => void;
}

interface IAppProvider {
	children: React.ReactNode;
}

export const AppContext = createContext<IAppContext>({} as IAppContext);

export const AppProvider: React.FC<IAppProvider> = ({ children }) => {
	const [searchText, setSearchText] = useState('');
	const [topics, setTopics] = useState<ITopic[]>([]);
	const [filteredTopics, setFilteredTopics] = useState<ITopic[]>([]);

	useEffect(() => {
		setTopics(appModel.topics);
		setFilteredTopics(appModel.topics);
	}, []);

	return (
		<AppContext.Provider
			value={{
				searchText,
				setSearchText,
				topics,
				setTopics,
				filteredTopics,
				setFilteredTopics,
			}}
		>
			{children}
		</AppContext.Provider>
	)
}
