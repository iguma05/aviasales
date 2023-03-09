import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import './App.css';
import Content from './components/content/content';
import Header from './components/header/header';
import { getTickets } from './store/appSlice';

function App() {
	const dispatch = useDispatch();
	const isStop = useSelector((state) => state.isStop);

	useEffect(() => {
		dispatch(getTickets());
	}, [dispatch, isStop]);

	return (
		<div className='App'>
			<Header />
			<Content />
		</div>
	);
}

export default App;
