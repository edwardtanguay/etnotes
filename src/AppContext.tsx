"use client";
import { useState, useEffect } from 'react';
import { createContext } from 'react';
import { IHowto } from './interfaces';
import * as appModel from './models/model';

interface IAppContext {
	searchText: string;
	setSearchText: (searchText: string) => void;
	howtos: IHowto[];
	setHowtos: (howtos: IHowto[]) => void;
	filteredHowtos: IHowto[];
	setFilteredHowtos: (howtos: IHowto[]) => void;
}

interface IAppProvider {
	children: React.ReactNode;
}

export const AppContext = createContext<IAppContext>({} as IAppContext);

export const AppProvider: React.FC<IAppProvider> = ({ children }) => {
	const [searchText, setSearchText] = useState('');
	const [howtos, setHowtos] = useState<IHowto[]>([]);
	const [filteredHowtos, setFilteredHowtos] = useState<IHowto[]>([]);

	useEffect(() => {
		setHowtos(appModel.howtos);
		setFilteredHowtos(appModel.howtos);
	}, []);

	return (
		<AppContext.Provider
			value={{
				searchText,
				setSearchText,
				howtos,
				setHowtos,
				filteredHowtos,
				setFilteredHowtos,
			}}
		>
			{children}
		</AppContext.Provider>
	)
}
