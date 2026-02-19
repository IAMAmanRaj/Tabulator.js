# Deployments

| Entity | Platform | URL Endpoint |
| :--- | :--- | :--- |
| **HTML/JS Frontend** | **Vercel** | [Live Demo](https://tabulator-js.vercel.app) |

## Technologies Used

![HTML5](https://img.shields.io/badge/HTML5-E34F26?logo=html5&logoColor=white)
![JavaScript](https://img.shields.io/badge/JavaScript-ES6-F7DF1E?logo=javascript&logoColor=black)
![Tabulator](https://img.shields.io/badge/Tabulator.js-6.3.1-1D6FA5)

## Run Locally

Clone the project

```bash
git clone https://github.com/YOUR_USERNAME/YOUR_REPO.git
```

Go to the project directory

Since this is a plain HTML/JS project using ES Modules, you need to serve it via a local server

Using VS Code Live Server extension or:

```bash
npx serve .
```

Then open [http://localhost:3000](http://localhost:3000) in your browser.

## Features

- Player data table with **pagination**
- **Custom filters** — by Player Name, Max Price, and Team
- **Action buttons** — View, Edit, Delete per row
- ES Modules — clean, modular JS structure

## Project Structure

```
├── index.html           # Entry point + filter UI
├── js/
│   ├── main.js          # Tabulator init + filter logic
│   ├── player-data.js   # NFL player dataset
│   ├── players.table.js # Column definitions + action handlers
│   └── btn-actions.js   # View / Edit / Delete action logic ( dummy )
```

## Feedback

If you have any feedback, please reach out to me at imamanraj87@gmail.com

## Related

Check out my other Projects

[Projects Section](https://github.com/IAMAmanRaj?tab=repositories)
