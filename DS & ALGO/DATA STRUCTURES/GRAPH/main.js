// building an un directed graph

class Graph {
  constructor() {
    this.adjacencyList = {};
  }
  addVertex(VertexName) {
    if (this.adjacencyList[VertexName]) throw Error("name already stored ");
    this.adjacencyList[VertexName] = [];
    return this.adjacencyList;
  }
  addEdge(vertexOne, vertexTwo) {
    // undirected edges
    if (!vertexOne || !vertexTwo) return undefined;
    this.adjacencyList[vertexOne].push(vertexTwo);
    this.adjacencyList[vertexTwo].push(vertexOne);
  }
  deleteEdge(vertexOne, vertexTwo) {
    // undirected edges
    if (!vertexOne || !vertexTwo) return undefined;
    this.adjacencyList[vertexOne] = this.adjacencyList[vertexOne].filter(
      (element) => element !== vertexTwo
    );
    this.adjacencyList[vertexTwo] = this.adjacencyList[vertexTwo].filter(
      (element) => element !== vertexOne
    );
  }

  deleteVertex(vertex) {
    let vertexElements = this.adjacencyList[vertex];
    if (vertexElements.length) {
      for (let i = 0; i < vertexElements.length; i++)
        this.deleteEdge(vertex, vertexElements[i]);
    }
    delete this.adjacencyList[vertex];
  }

  depthFirstRecursive(start) {
    const result = [];
    const visited = {};
    const adjacencyList = this.adjacencyList;

    (function dfs(vertex) {
      if (!vertex) return null;
      visited[vertex] = true;
      result.push(vertex);
      adjacencyList[vertex].forEach((neighbor) => {
        if (!visited[neighbor]) return dfs(neighbor);
      });
    })(start);

    return result;
  }
  depthFirstIterative(start) {
    const stack = [start];
    const result = [];
    const visited = {};
    let currentVertex;

    visited[start] = true;
    while (stack.length) {
      currentVertex = stack.pop();
      result.push(currentVertex);

      this.adjacencyList[currentVertex].forEach((neighbor) => {
        if (!visited[neighbor]) {
          visited[neighbor] = true;
          stack.push(neighbor);
        }
      });
    }
    return result;
  }
  breadthFirst(vertex) {
    let adjacencyList = this.adjacencyList,
      queuedVertex = [vertex],
      visitedVertex = [],
      markedVertex = {},
      shiftedVertex;
    markedVertex[vertex] = true;

    while (queuedVertex.length) {
      shiftedVertex = queuedVertex.shift();
      visitedVertex.push(shiftedVertex);
      adjacencyList[shiftedVertex].forEach((neighbor) => {
        if (!markedVertex[neighbor]) {
          markedVertex[neighbor] = true;
          queuedVertex.push(neighbor);
        }
      });
    }
    return visitedVertex;
  }
}

const myGraph = new Graph();
myGraph.addVertex("Tokyo");
myGraph.addVertex("Egypt");
myGraph.addVertex("France");
myGraph.addVertex("Usa");
myGraph.addVertex("Russia");
myGraph.addVertex("Italy");
myGraph.addEdge("Tokyo", "Russia");
myGraph.addEdge("Tokyo", "Italy");
myGraph.addEdge("Tokyo", "Egypt");
myGraph.addEdge("Tokyo", "France");
myGraph.addEdge("Tokyo", "Usa");
myGraph.addEdge("France", "Egypt");
// myGraph.deleteEdge('France', 'Egypt');
// myGraph.deleteVertex('Tokyo')
console.log(myGraph.depthFirstRecursive("France"));
console.log(myGraph.depthFirstIterative("France"));
console.log(myGraph.breadthFirst("France"));
