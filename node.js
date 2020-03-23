function Node(value) {
    this.value = value;
    this.edges = []; // The nodes it holds
    this.searched = false;
    this.parent = null;
}

Node.prototype.addEdge = function(neighbor){
    this.edges.push(neighbor);
    // Pushes the data both ways
    neighbor.edges.push(this);
}