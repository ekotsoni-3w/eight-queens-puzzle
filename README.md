# ♛ Eight Queens Puzzle

An interactive browser puzzle built with HTML, CSS and vanilla JavaScript. Place eight queens on a chessboard so that no two queens share a row, column or diagonal.

This project combines chess and logical problem-solving with DOM manipulation, event handling and coordinate-based conflict detection.

## Live Demo

🎮 [Play Eight Queens Puzzle](https://ekotsoni-3w.github.io/eight-queens-puzzle/)

The interface and instructions are in Greek.

## Features

- Interactive 8 × 8 chessboard generated with JavaScript.
- Click to place or remove queens.
- Immediate feedback when queens threaten each other.
- Counter showing the number of queens on the board.
- Success message when eight queens are placed without conflicts.
- Hint panel with guidance.
- Gallery of 12 predefined solution arrangements.
- Reset button to start again.

## How to Play

1. Click a square to place a queen.
2. Click an occupied square to remove its queen.
3. Use the feedback to identify conflicting placements.
4. Place eight queens without sharing any row, column or diagonal.

| Control | Action |
| --- | --- |
| Στοιχείο | Show hints |
| Λύση | Show the predefined solution gallery |
| Επανεκκίνηση | Reset the puzzle |

## Technologies

- **HTML5** — page structure and instructions.
- **CSS3** — chessboard layout, styling and media queries.
- **JavaScript** — board generation, interaction and conflict detection.
- **GitHub Pages** — hosting the live demo.

## Implementation

### Board generation

JavaScript creates the 64 squares dynamically. Each square stores its row and column using HTML data attributes.

### Conflict detection

After a queen is placed or removed, the application compares the positions of the queens on the board.

Two queens threaten each other if they share a row or column, or if the absolute difference between their rows equals the absolute difference between their columns.

### Solution gallery

The application displays 12 predefined solution arrangements as miniature chessboards.

Each arrangement is represented by an array containing the column position of the queen in each row. The gallery uses stored examples and does not calculate a solution from the player's current board.

## Run Locally

Clone the repository.

```bash
git clone https://github.com/ekotsoni-3w/eight-queens-puzzle.git
cd eight-queens-puzzle
```

Open `index.html` in a modern browser.

The application runs entirely in the browser. No dependencies, backend or build step are required.

## Project Structure

```text
eight-queens-puzzle/
├── index.html
├── style.css
├── script.js
└── README.md
```

## Possible Improvements

- Keyboard navigation and accessible square labels.
- More flexible board sizing for small screens.
- Visual highlighting of conflicting queens.
- Dynamic solution generation using backtracking.

## Author

Developed by **Eleftheria Kotsoni**.

[GitHub Profile](https://github.com/ekotsoni-3w)
