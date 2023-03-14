export const sortByBtnFilters = (state) => {
  state.btnFilters.forEach((btn) => {
    if (btn.text === 'самый дешевый' && btn.clicked) {
      state.tickets.sort((a, b) => a.ticket.price - b.ticket.price);
    }
    if (btn.text === 'самый быстрый' && btn.clicked) {
      state.tickets.sort(
        (a, b) =>
          a.ticket.segments[0].duration +
          a.ticket.segments[1].duration -
          (b.ticket.segments[0].duration + b.ticket.segments[1].duration)
      );
    }
    if (btn.text === 'оптимальный' && btn.clicked) {
      state.tickets.sort(
        (a, b) =>
          a.ticket.price - b.ticket.price ||
          a.ticket.segments[0].duration +
            a.ticket.segments[1].duration -
            (b.ticket.segments[0].duration + b.ticket.segments[1].duration)
      );
    }
  });
};
