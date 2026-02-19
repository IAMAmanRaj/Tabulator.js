import { players } from "./player-data.js";
import { getColumns } from "./players.table.js";

var table = new Tabulator("#players", {
  height: 300,
  data: players,
  layout: "fitColumns",
  pagination: true,
  paginationSize: 8,
  paginationSizeSelector: [8, 16, 24],
  tooltips: true,
  columns: getColumns(),
});

table.on("rowClick", function (e, row) {
  if (e.target.dataset.action) return;

  alert("Row Clicked:");
});

document.getElementById("filter-btn").addEventListener("click", () => {
  const filters = [];

  const name = document.getElementById("filter-name").value;
  const price = document.getElementById("filter-price").value;
  const team = document.getElementById("filter-team").value;

  if (name) {
    filters.push({ field: "playerName", type: "like", value: name });
  }

  if (price) {
    filters.push({ field: "price", type: "<=", value: Number(price) });
  }

  if (team) {
    filters.push({ field: "team", type: "=", value: team });
  }

  table.setFilter(filters);
});

document.getElementById("clear-btn").addEventListener("click", () => {
  document.getElementById("filter-name").value = "";
  document.getElementById("filter-price").value = "";
  document.getElementById("filter-team").value = "";
  table.clearFilter();
});
