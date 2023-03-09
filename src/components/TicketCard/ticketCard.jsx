import classes from './ticketCard.module.scss';

export default function TicketCard({ price, carrier, segments }) {
  const transfer = (arrayStops) => {
    if (!arrayStops.length) {
      return 'пересадки';
    } else if (arrayStops.length === 1) {
      return `${arrayStops.length} пересадка`;
    } else if (arrayStops.length < 5) {
      return `${arrayStops.length} пересадки`;
    } else {
      return `${arrayStops.length} пересадок`;
    }
  };
  return (
    <li className={classes.ticket}>
      <header className={classes.ticket_header}>
        <span className={classes.ticket_price}>{price.toLocaleString()} Р</span>
        <img src={`https://pics.avs.io/99/36/${carrier}.png`} alt="Company Logo" />
      </header>
      <table className={classes.ticket_table}>
        <thead>
          <tr>
            <th>
              {segments[0].origin} – {segments[0].destination}
            </th>
            <th>В пути</th>
            <th>{transfer(segments[0].stops)}</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>10:45 – 08:00</td>
            <td>{`${Math.floor(segments[0].duration / 60)}ч ${segments[0].duration % 60}м`}</td>
            <td>{segments[0].stops.length ? segments[0].stops.map((item) => item).join(', ') : 'Без пересадок'}</td>
          </tr>
        </tbody>
      </table>

      <table className={classes.ticket_table}>
        <thead>
          <tr>
            <th>
              {segments[1].origin} – {segments[1].destination}
            </th>
            <th>В пути</th>
            <th>{transfer(segments[1].stops)}</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>11:20 – 00:50</td>
            <td>{`${Math.floor(segments[1].duration / 60)}ч ${segments[1].duration % 60}м`}</td>
            <td>{segments[1].stops.length ? segments[1].stops.map((item) => item).join(', ') : 'Без пересадок'}</td>
          </tr>
        </tbody>
      </table>
    </li>
  );
}
