function quickestPath(board: { ladders: [number, number][]; snakes: [number, number][]; }): number[] {
  const cells = new Array(100).fill(-1);
  [...board.ladders, ...board.snakes].forEach((v) => cells[v[0] - 1] = v[1] - 1);

  const visited = new Array(100).fill(false);
  visited[0] = true;

  type queue = [{ position: number, moves: number, rolls: Array<number> }];
  const queue: queue = [{ position: 0, moves: 0, rolls: [] }];

  while (queue.length) {
    const current = queue.shift();
    if (!current) break;

    if (current.position === 99) return current.rolls;

    for (let dice = 6; dice >= 1; dice--) {
      const nextPosition = current.position + dice;

      if (nextPosition < 100 && !visited[nextPosition]) {
        visited[nextPosition] = true;

        const next = cells[nextPosition] === -1 ? nextPosition : cells[nextPosition];

        queue.push({
          position: next,
          moves: current.moves + 1,
          rolls: [...current.rolls, dice]
        });
      }
    }
  }
  return [];
}