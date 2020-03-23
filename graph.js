function Graph(){
    this.nodes = [];
    this.graph = {};
    this.end = null;
    this.start = null;
}
Graph.prototype.setStart = function(actor){
    this.start = this.graph[actor];
    return this.start;
}
Graph.prototype.setEnd = function(actor){
    this.end = this.graph[actor];
    return this.end;

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