import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { v4 } from 'uuid';

import service from '../service';

import { sortByBtnFilters } from './sortByBtnFilters';

export const getTickets = createAsyncThunk('aviasales/getTickets', () => service.getTickets());

const appSlice = createSlice({
  name: 'aviasales',
  initialState: {
    checkboxes: [
      { id: 1, text: 'Все', checked: true },
      { id: 2, text: 'Без пересадок', checked: true },
      { id: 3, text: '1 пересадка', checked: true },
      { id: 4, text: '2 пересадки', checked: true },
      { id: 5, text: '3 пересадки', checked: true },
    ],
    tickets: [],
    btnFilters: [
      { id: 1, text: 'самый дешевый', clicked: false },
      { id: 2, text: 'самый быстрый', clicked: false },
      { id: 3, text: 'оптимальный', clicked: false },
    ],
    arrayCountTransfer: [0, 1, 2, 3],
    error: false,
    status: true,
    isStop: false,
  },
  reducers: {
    changeCheckbox(state, action) {
      state.checkboxes.forEach((checkbox) => {
        if (checkbox.id === action.payload) {
          checkbox.checked = !checkbox.checked;
        }
      });
      if (state.checkboxes[0].checked && action.payload === 1) {
        state.checkboxes.forEach((checkbox) => (checkbox.checked = true));
      }
      if (!state.checkboxes[0].checked && action.payload === 1) {
        state.checkboxes.forEach((checkbox) => (checkbox.checked = false));
      }
      if (state.checkboxes[0].checked && action.payload !== 1) {
        state.checkboxes[0].checked = false;
      }
      if (
        state.checkboxes[1].checked &&
        state.checkboxes[2].checked &&
        state.checkboxes[3].checked &&
        state.checkboxes[4].checked
      ) {
        state.checkboxes[0].checked = true;
      }
      state.arrayCountTransfer = state.checkboxes.slice(1).map((item) => {
        if (item.checked) {
          return item.id - 2;
        }
        return null;
      });
    },
    sortTickets(state, action) {
      state.btnFilters.forEach((btn) => {
        if (btn.id === action.payload) {
          btn.clicked = true;
        } else {
          btn.clicked = false;
        }
        sortByBtnFilters(state);
      });
    },
  },
  extraReducers: (builder) => {
    builder.addCase(getTickets.pending, (state) => {
      state.error = false;
      state.status = true;
    });
    builder.addCase(getTickets.fulfilled, (state, action) => {
      const newTickets = action.payload.tickets.map((ticket) => ({ id: v4(), ticket }));
      state.tickets = [...state.tickets, ...newTickets];
      if (!action.payload.stop) {
        state.isStop = !state.isStop;
      } else {
        state.status = false;
      }
    });
    builder.addCase(getTickets.rejected, (state) => {
      state.error = true;
      state.status = true;
      state.isStop = !state.isStop;
    });
  },
});
export const { changeCheckbox, sortTickets } = appSlice.actions;
export default appSlice.reducer;
