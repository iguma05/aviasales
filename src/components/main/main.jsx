import TicketCard from '../TicketCard/ticketCard';
import classes from './main.module.scss';

export default function Main() {
	return (
		<div className={classes.main}>
			<ul className={classes.main_buttons}>
				<li>
					<button
						className={
							classes.main_button +
							' ' +
							classes.main_button_first +
							' ' +
							classes.main_button_active
						}
					>
						Самый дешевый
					</button>
				</li>
				<li>
					<button className={classes.main_button}>Самый быстрый</button>
				</li>
				<li>
					<button
						className={classes.main_button + ' ' + classes.main_button_last}
					>
						Оптимальный
					</button>
				</li>
			</ul>
			<ul>
				<TicketCard />
				<TicketCard />
				<TicketCard />
				<TicketCard />
				<TicketCard />
			</ul>

			<button className={classes.main_button_more}>
				Показать еще 5 билетов!
			</button>
		</div>
	);
}
