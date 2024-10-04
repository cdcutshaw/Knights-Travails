class Node {
    constructor(coordinate, path) {
        this.coordinate = coordinate;
        this.path = path;
    }
}


function isValidMove(x, y, visited) {
    return x >= 0 && x <= 7 && y >= 0 && y <= 7 && !visited.has(`${x}, ${y}`);
}


function knightsTravails (start, end) {
    const moves = [
        [1, 2], [1, -2], [-1, -2], [-1, 2],
        [2, 1], [2, -1], [-2, -1], [-2, 1]
    ];
    
    
    let queue = [];
    let visited = new Set();

    queue.push(new Node(start, [start]));

    while (queue.length > 0) {
        let currentNode = queue.shift();
        let [x, y] = currentNode.coordinate;
        let currentPath = currentNode.path;

        if(x === end[0] && y === end[1]) {
            console.log(`The shortest path is ${currentPath.length - 1} moves`);
            console.log(`Path:`)
            console.log(currentPath) 
            return;
        }

        visited.add(`${x}, ${y}`);

        for (let [dx, dy] of moves) {
            let newX = x +dx ;
            let newY = y + dy;

            if(isValidMove(newX, newY, visited)) {
                queue.push(new Node([newX, newY], [...currentPath, [newX, newY]]));
            }
        }
    }
return  []
}



knightsTravails([3,3], [0,0]);