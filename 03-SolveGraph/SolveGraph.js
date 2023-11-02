function SolveGraph(graph, start, target, visited = {}) {
  //! Tu código aquí
  // if (!graph[start].length) return false;
  // if (graph[start].includes(target)) {
  //   return true;
  // } else {
  //   return SolveGraph(graph, graph[start].pop(), target);
  // }
  // ! Solución propuesta por Ivan Reyes
  if (visited[start]) {
    return false;
  } else visited[start] = true;

  for (const node of graph[start]) {
    if (node === target) {
      return true;
    }
    if (SolveGraph(graph, node, target, visited)) return true;
  }
  return false;
}

module.exports = SolveGraph;
