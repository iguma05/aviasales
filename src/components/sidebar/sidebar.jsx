import { useDispatch, useSelector } from 'react-redux';

import { changeCheckbox } from '../../store/appSlice';

import classes from './sidebar.module.scss';

export default function Sidebar() {
  const checkboxes = useSelector((state) => state.checkboxes);
  const dispatch = useDispatch();

  return (
    <article className={classes.sidebar}>
      <h3 className={classes.sidebar_title}>Количество пересадок</h3>
      <ul>
        {checkboxes.map((checkbox) => (
          <li key={checkbox.id} className={classes.sidebar_item}>
            <input
              type="checkbox"
              className={classes.sidebar_checkbox}
              checked={checkbox.checked}
              onChange={() => dispatch(changeCheckbox(checkbox.id))}
            />
            {checkbox.text}
          </li>
        ))}
      </ul>
    </article>
  );
}
