import {
	createContext,
	useContext,
	useEffect,
	useMemo,
	useReducer,
} from 'react';
import { initialState, AppReducer } from './AppReducer';

export const AppContext = createContext();

export function AppWrapper({ children }) {
	const [state, dispatch] = useReducer(AppReducer, initialState);

	const contextValue = useMemo(() => {
		return { state, dispatch };
	}, [state, dispatch]);

	useEffect(() => {
		if (JSON.parse(localStorage.getItem('state'))) {
			dispatch({
				type: 'initial_stored',
				value: JSON.parse(localStorage.getItem('state')),
			});
		}
	}, []);

	useEffect(() => {
		if (state !== initialState) {
			localStorage.setItem('state', JSON.stringify(state));
		}
	}, [state]);

	return (
		<AppContext.Provider value={contextValue}>{children}</AppContext.Provider>
	);
}

export function useAppContext() {
	return useContext(AppContext);
}
