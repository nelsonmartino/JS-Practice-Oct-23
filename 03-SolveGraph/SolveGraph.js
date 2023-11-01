function SolveGraph(graph, start, target) {
  // Tu código aquí
  if (!graph[start].length) return false;
  if (graph[start].includes(target)) {
    return true;
  } else {
    return SolveGraph(graph, graph[start].pop(), target);
  }
}

module.exports = SolveGraph;
