import classes from './sidebar.module.scss';

export default function Sidebar() {
	return (
		<article className={classes.sidebar}>
			<h3 className={classes.sidebar_title}>Количество пересадок</h3>
			<ul>
				<li className={classes.sidebar_item}><input type="checkbox" className={classes.sidebar_checkbox}/>Все</li>
				<li className={classes.sidebar_item}><input type="checkbox" className={classes.sidebar_checkbox}/>Без пересадок</li>
				<li className={classes.sidebar_item}><input type="checkbox" className={classes.sidebar_checkbox}/>1 пересадка</li>
				<li className={classes.sidebar_item}><input type="checkbox" className={classes.sidebar_checkbox}/>2 пересадки</li>
				<li className={classes.sidebar_item}><input type="checkbox" className={classes.sidebar_checkbox}/>3 пересадки</li>
			</ul>
		</article>
	);
}
