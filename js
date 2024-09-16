class Graph {
    constructor() {
        this.adjList = new Map();
        this.grades = new Map(); // To store the grades of each vertex
    }

    addVertex(vertex, grade) {
        if (!this.adjList.has(vertex)) {
            this.adjList.set(vertex, []);
            this.grades.set(vertex, grade);
        }
    }

    addEdge(v1, v2) {
        if (!this.adjList.has(v1)) this.addVertex(v1, 0); // Default grade 0 if not specified
        if (!this.adjList.has(v2)) this.addVertex(v2, 0); // Default grade 0 if not specified

        this.adjList.get(v1).push(v2);
        this.adjList.get(v2).push(v1); // Undirected graph
    }

    getAdjVertices(vertex) {
        return this.adjList.get(vertex) || [];
    }

    bfs(startVertex) {
        let visited = new Set();
        let queue = [];
        let maxGrade = -Infinity;

        visited.add(startVertex);
        queue.push(startVertex);

        while (queue.length > 0) {
            let vertex = queue.shift();
            maxGrade = Math.max(maxGrade, this.grades.get(vertex));

            for (let neighbor of this.getAdjVertices(vertex)) {
                if (!visited.has(neighbor)) {
                    visited.add(neighbor);
                    queue.push(neighbor);
                }
            }
        }
        return maxGrade;
    }
}

// Export Graph class if using modules
// export default Graph;
