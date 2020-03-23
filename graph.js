function Graph(){
    this.nodes = [];
    this.graph = {};
}

Graph.prototype.addNode = function(n) {
    // Adding nodes to the graph
    this.nodes.push(n);
    var title = n.value;
    // Node into the object
    this.graph[title] = n
}

Graph.prototype.getNode = function(actor){
    var n = this.graph[actor];

    return n;
}