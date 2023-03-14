import { useState } from 'react';
import classnames from 'classnames';
import { useDispatch, useSelector } from 'react-redux';
import { LinearProgress, Alert, AlertTitle } from '@mui/material';

import TicketCard from '../ticketCard/ticketCard';
import { sortTickets } from '../../store/appSlice';

import classes from './main.module.scss';

export default function Main() {
  const dispatch = useDispatch();
  const arrayCountTransfer = useSelector((state) => state.arrayCountTransfer);
  const tickets = useSelector((state) => state.tickets);
  const btnFilters = useSelector((state) => state.btnFilters);
  const checkboxes = useSelector((state) => state.checkboxes);
  const status = useSelector((state) => state.status);
  const [countOfView, setCountOfView] = useState(5);

  const sortByCheckbox = (tickets, arrayCountTransfer) => {
    return tickets.filter(
      (item) =>
        arrayCountTransfer.includes(item.ticket.segments[0].stops.length) &&
        arrayCountTransfer.includes(item.ticket.segments[1].stops.length)
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
      {status && <LinearProgress style={{ marginBottom: '20px' }} />}
      {checkboxes.filter((checkbox) => checkbox.checked).length ? (
        <ul>
          {ticketsView.map((ticket) => (
            <TicketCard key={ticket.id} {...ticket} />
          ))}
        </ul>
      ) : (
        <Alert severity="info">
          <AlertTitle>
            <strong>Билеты не найдены</strong>
          </AlertTitle>
          Выберете один из вариантов пересадок
        </Alert>
      )}

      {!!checkboxes.filter((checkbox) => checkbox.checked).length && (
        <button className={classes.main_button_more} onClick={() => setCountOfView(countOfView + 5)}>
          Показать еще 5 билетов!
        </button>
      )}
    </div>
  );
}
