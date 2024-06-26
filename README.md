# Tic-Tac-Toe Application

## Table of Contents
- [Introduction](#introduction)
- [Features](#features)
- [Technologies Used](#technologies-used)
- [Installation](#installation)
- [Usage](#usage)
- [Project Structure](#project-structure)
- [Contributing](#contributing)
- [License](#license)
- [Acknowledgements](#acknowledgements)

## Introduction
Welcome to the Tic-Tac-Toe application! This is a simple implementation of the classic Tic-Tac-Toe game built using ReactJS and TypeScript. The application allows two players to play the game in a browser.

## Features
- Interactive and responsive UI
- Two-player game
- Displays the current player's turn
- Option to restart the game

## Technologies Used
- ReactJS
- TypeScript
- CSS (for styling)
- Vite (for project setup)

## Installation
Follow these steps to set up the project locally:

1. **Clone the repository:**
   ```sh
   git clone https://github.com/john-lund-af/tic-tac-toe.git  
   cd tic-tac-toe
   ```

2. **Install dependencies:**
   ```sh
   npm install
   ```

3. **Start the development server:**
   ```sh
   npm run dev
   ```

4. Open your browser and navigate to `http://localhost:5173` to see the application running.

## Usage
- Open the application in your browser.
- Players take turns clicking on the squares of the game board to place their marks (X or O).
- The game will automatically detect and display the winner, if any, otherwise it will detect a draw.
- Click the "Restart" button to start a new game.

## Project Structure
```
tic-tac-toe/
├── public/
│   ├── tic-tac-toe.svg
│   └── ...
├── src/
│   ├── components/
│   │   ├── GameBoard.tsx
│   │   ├── GameOver.tsx
│   │   └── Log.tsx
│   │   └── Player.tsx
│   ├── types/
│   │   ├── common.types.ts
│   │   ├── components.types.ts
│   ├── App.tsx
│   ├── index.css
│   ├── main.tsx
├── package.json
├── tsconfig.json
└── README.md
└── ...
```

## Contributing
Contributions are welcome! If you have any suggestions or improvements, please create a pull request or open an issue.

1. **Fork the repository**
2. **Create a new branch (`git checkout -b feature-branch`)**
3. **Commit your changes (`git commit -am 'Add new feature'`)**
4. **Push to the branch (`git push origin feature-branch`)**
5. **Create a new Pull Request**

## License
This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.

## Acknowledgements
- This project was scaffolded with [Vite](https://vitejs.dev/).
- Special thanks to the React and TypeScript communities for their fantastic resources and support.
