import classes from './ticketCard.module.scss';

export default function TicketCard() {
	return (
		<li className={classes.ticket}>
			<header className={classes.ticket_header}>
				<span className={classes.ticket_price}>13 400 Р</span>
				<div className={classes.ticket_companyLogo}/>
			</header>
			<table className={classes.ticket_table}>
				<thead>
					<tr>
						<th>MOW – HKT</th>
						<th>В пути</th>
						<th>2 пересадки</th>
					</tr>
				</thead>
				<tbody>
					<tr>
						<td>10:45 – 08:00</td>
						<td>21ч 15м</td>
						<td>HKG, JNB</td>
					</tr>
				</tbody>
			</table>

			<table className={classes.ticket_table}>
				<thead>
					<tr>
						<th>MOW – HKT</th>
						<th>В пути</th>
						<th>1 пересадка</th>
					</tr>
				</thead>
				<tbody>
					<tr>
						<td>11:20 – 00:50</td>
						<td>13ч 30м</td>
						<td>HKG</td>
					</tr>
				</tbody>
			</table>
		</li>
	);
}
