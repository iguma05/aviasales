import { useState } from 'react';
import classnames from 'classnames';
import { useDispatch, useSelector } from 'react-redux';
import { v4 } from 'uuid';

import TicketCard from '../TicketCard/ticketCard';
import { sortTickets } from '../../store/appSlice';

import classes from './main.module.scss';

export default function Main() {
  const dispatch = useDispatch();
  const arrayCountTransfer = useSelector((state) => state.arrayCountTransfer);

  const tickets = useSelector((state) => state.tickets);
  const btnFilters = useSelector((state) => state.btnFilters);
  const [countOfView, setCountOfView] = useState(5);

  const sortByCheckbox = (tickets, arrayCountTransfer) => {
    return tickets.filter(
      (ticket) =>
        arrayCountTransfer.includes(ticket.segments[0].stops.length) &&
        arrayCountTransfer.includes(ticket.segments[1].stops.length)
    );
  };
  const ticketsView = sortByCheckbox(tickets, arrayCountTransfer).slice(0, countOfView);

  return (
    <div className={classes.main}>
      <ul className={classes.main_buttons}>
        {btnFilters.map((btn) => (
          <li key={btn.id}>
            <button
              className={classnames(classes.main_button, {
                [classes.main_button_active]: btn.clicked,
                [classes.main_button_first]: btn.id === 1,
                [classes.main_button_last]: btn.id === 3,
              })}
              onClick={() => dispatch(sortTickets(btn.id))}
            >
              {btn.text}
            </button>
          </li>
        ))}
      </ul>
      <ul>
        {ticketsView.map((ticket) => (
          <TicketCard key={v4()} {...ticket} />
        ))}
      </ul>

      <button className={classes.main_button_more} onClick={() => setCountOfView(countOfView + 5)}>
        Показать еще 5 билетов!
      </button>
    </div>
  );
}
