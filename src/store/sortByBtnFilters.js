export const sortByBtnFilters = (state) => {
  if (state.btnFilters[0].clicked) {
    state.tickets.sort((a, b) => a.price - b.price);
  }
  if (state.btnFilters[1].clicked) {
    state.tickets.sort(
      (a, b) => a.segments[0].duration + a.segments[1].duration - (b.segments[0].duration + b.segments[1].duration)
    );
  }
  if (state.btnFilters[2].clicked) {
    state.tickets.sort(
      (a, b) =>
        a.price - b.price ||
        a.segments[0].duration + a.segments[1].duration - (b.segments[0].duration + b.segments[1].duration)
    );
  }
};
