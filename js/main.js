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