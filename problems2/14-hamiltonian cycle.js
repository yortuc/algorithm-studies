/*
	Backtracking | Set 6 (Hamiltonian Cycle)
	Hamiltonian Path in an undirected graph is a path that visits each vertex exactly once. 
	A Hamiltonian cycle (or Hamiltonian circuit) is a Hamiltonian Path such that there is an 
	edge (in graph) from the last vertex to the first vertex of the Hamiltonian Path. 
	Determine whether a given graph contains Hamiltonian Cycle or not. If it contains, 
	then print the path. Following are the input and output of the required function.

	Input:
	A 2D array graph[V][V] where V is the number of vertices in graph and graph[V][V] 
	is adjacency matrix representation of the graph. A value graph[i][j] is 1 if there
	 is a direct edge from i to j, otherwise graph[i][j] is 0.

	Output:
	An array path[V] that should contain the Hamiltonian Path. path[i] should represent
	the ith vertex in the Hamiltonian Path. The code should also return false if there 
	is no Hamiltonian Cycle in the graph.

	For example, a Hamiltonian Cycle in the following graph is {0, 1, 2, 4, 3, 0}. 
	There are more Hamiltonian Cycles in the graph like {0, 3, 4, 2, 1, 0}

	(0)--(1)--(2)
	 |   / \   |
	 |  /   \  | 
	 | /     \ |
	(3)-------(4)
	And the following graph doesn’t contain any Hamiltonian Cycle.

	(0)--(1)--(2)
	 |   / \   |
	 |  /   \  | 
	 | /     \ |
	(3)      (4) 

*/

function isSafe(arr, path, pos, v) {
	// if v has a connection with previous node
	if(arr[pos-1][v] !== 1) return false;

	// should not be visited before
	for(let i=0; i<path.length; i++)
		if(path[i] === v) return false;
}

function hamUtil(arr, path, pos) {

	if(pos === arr.length) {
		if(arr[path[pos-1][path[pos]]] === 1)
			return true;
		else
			return false;
	}

	for(let v=1; v<arr.length; v++){
		if(isSafe(arr, path, pos, v)){
			path.push(v);

			if(hamUtil(arr, path, pos+1)) 
				return true;

			path.pop();
		}
	}

	return false;
}

function hasHam(arr){
	let path = [0];

	if(hamUtil(arr, path, 1)) 
		return true;
	else 
		return false;
}

/*
	  (0)--(1)--(2)
       |   / \   |
       |  /   \  |
       | /     \ |
      (3)-------(4) 
*/
const graph1 = [[0, 1, 0, 1, 0],
                [1, 0, 1, 1, 1],
                [0, 1, 0, 0, 1],
                [1, 1, 0, 0, 1],
                [0, 1, 1, 1, 0]];

console.log(hasHam(graph1));	// true