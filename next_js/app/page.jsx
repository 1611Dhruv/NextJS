"use client";
import dijkstra from "./dijkstra";
import Node from "./node.jsx";

export default function Home() {
  var grid = [
    [0, 2, 4, 0, 0],
    [2, 0, 1, 4, 0],
    [4, 1, 0, 3, 5],
    [0, 4, 3, 0, 1],
    [0, 0, 5, 1, 0],
  ];
  var start = 0;
  var end = 4;
  console.log(dijkstra(grid, start, end));
  let i = 7;

  var grid = [
    [0, 2, 4, 0, 0],
    [2, 0, 1, 4, 0],
    [4, 1, 0, 3, 5],
    [0, 4, 3, 0, 0],
    [0, 0, 5, 0, 0],
  ];
  var start = 0;
  var end = 4;
  console.log(dijkstra(grid, start, end));

  return (
    <div className="box">
      {grid.map((rows) => (
        <div className="row">
          {rows.map((vals) => (
            <Node value={vals} />
          ))}
        </div>
      ))}
    </div>
  );
}
