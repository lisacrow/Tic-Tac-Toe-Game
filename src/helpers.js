export function calculateWinner(squares) {
    const lines = [ //look up array for winning array
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],
        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8],
        [0, 4, 8],
        [2, 4, 6]
    ];
    for (let i = 0; i < lines.length; i++) {
        const [a, b, c] = lines[i];
        if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
            return squares[a]; //return winners symbol
        }
    }
    return null; //no winner
}

// const squares = [ //test array
//     null, null, null,
//     'X', 'X', 'X',
//     null, null, null
// ];

// console.log(calculateWinner(squares));