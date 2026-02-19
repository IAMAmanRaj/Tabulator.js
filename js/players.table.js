import { btnActions } from "./btn-actions.js";

export function getColumns() {
  return [
    {
      title: "Player Name",
      field: "playerName",
      sorter: "string",
      headerHozAlign: "center",
      hozAlign: "center",
      width: 150,
      headerFilter: "input",
    },
    {
      title: "Player Price",
      field: "price",
      sorter: "number",
      hozAlign: "center",
      headerHozAlign: "center",
      width: 150,
      headerFilter: "input",
    },
    {
      title: "Team",
      field: "team",
      sorter: "string",
      hozAlign: "center",
      headerHozAlign: "center",
      editor: "select",
      headerFilter: true,
      headerFilterParams: {
        ATL: "ATL",
        BAL: "BAL",
        BUF: "BUF",
        CIN: "CIN",
        DAL: "DAL",
        HOU: "HOU",
        JAX: "JAX",
        KC: "KC",
        LAC: "LAC",
        LAR: "LAR",
        MIA: "MIA",
        NYJ: "NYJ",
        PHI: "PHI",
        PIT: "PIT",
        SF: "SF",
        TB: "TB",
      },
    },
    {
      title: "Joining Date",
      field: "joiningDate",
      sorter: "date",
      headerHozAlign: "center",
      hozAlign: "center",
    },
    {
      title: "Actions",
      formatter: actionFormatter,
      width: 200,
      hozAlign: "center",
      cellClick: actionClickHandler,
    },
  ];
}

function actionFormatter() {
  return `
    <button class="action-btn" data-action="view">View</button>
    <button class="action-btn" data-action="edit">Edit</button>
    <button class="action-btn" data-action="delete">Delete</button>
  `;
}

function actionClickHandler(e, cell) {
  const action = e.target.dataset.action;
  if (!action) return;

  e.stopPropagation();

  const rowData = cell.getRow().getData();
  btnActions[action](rowData);
}
