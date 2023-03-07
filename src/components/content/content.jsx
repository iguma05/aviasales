import Main from '../main/main';
import Sidebar from '../sidebar/sidebar';
import classes from './content.module.scss';

export default function Content() {
	return (
		<section className={classes.content}>
			<Sidebar />
			<Main />
		</section>
	);
}
