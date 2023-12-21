function minEnergy(start: number, shops: number[], stations: number[], target: number): number {
  const MaxPath = Math.max(start, ...shops, ...stations, target);

  type queue = Array<{ position: number, energys: number, visitedshop: Set<number> }>;
  const queue: queue = [{ position: start, energys: 0, visitedshop: new Set() }];

  const visited = new Set();

  while (queue.length) {
    const current = queue.shift();
    if (!current) break;
    const { position, energys } = current;
    let visitedshop = current.visitedshop;

    if (visited.has(`${position}-${[...visitedshop].sort().join(",")}`)) continue;
    visited.add(`${position}-${[...visitedshop].sort().join(",")}`);
    
    if (shops.includes(position) && !visitedshop.has(position)) {
      visitedshop = new Set([...current.visitedshop, position]);
    }

    if (position === target && shops.every((e) => visitedshop.has(e))) {
      console.log(visited);
      return energys;
    }

    if (position - 1 >= 0) queue.push({ position: position - 1, energys: energys + 1, visitedshop });
    if (position + 1 <= MaxPath) queue.push({ position: position + 1, energys: energys + 1, visitedshop });
    if (stations.includes(position)) queue.push(...stations.filter(s => s !== position).map(m => ({ position: m, energys: energys, visitedshop })));
  }
  return -1;
}