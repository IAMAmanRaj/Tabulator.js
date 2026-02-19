export const btnActions = {
  view(data) {
    alert(`View: ${data.playerName}`);
  },

  edit(data) {
    alert(`Edit: ${data.playerName}`);
  },

  delete(data) {
    alert(`Delete: ${data.playerName}`);
  }
};
