import minHeap from "./minHeap";

class SearchNode {
  constructor(loc, cost, pred) {
    this.loc = loc;
    this.cost = cost;
    this.pred = pred;
  }

  getLoc() {
    return this.loc;
  }
  getPred() {
    return this.pred;
  }
  getCost() {
    return this.cost;
  }
}

export default function dijkstra(matrix, start, end) {
  const heap = new minHeap();
  const map = new Map();
  let node = new SearchNode(start, 0, null);
  console.log(node);
  heap.insert(node);
  while (heap.getSize() > 0) {
    node = heap.remove();
    let loc = node.getLoc();
    if (map.has("" + loc)) {
      continue;
    }
    map.set("" + loc, node);
    let cost = node.getCost();
    for (let i = 0; i < matrix[loc].length; i++) {
      if (matrix[loc][i] != 0) {
        heap.insert(new SearchNode(i, cost + matrix[loc][i], node));
      }
    }
  }
  let endNode = map.get("" + end);
  let cost = endNode.getCost();
  let arr = [];
  while (endNode != null) {
    arr.push(endNode.getLoc());
    endNode = endNode.getPred();
  }
  arr = arr.reverse();
  return { cost: cost, path: arr };
}
