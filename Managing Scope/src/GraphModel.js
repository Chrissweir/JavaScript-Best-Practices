// Graph object, represents a graph for one equation.
osl.createNamespace("osl.graphplotter");

osl.graphplotter.Graph = function (a, b, c, colour) {
    this.a = a;             // Coefficient of x squared.
    this.b = b;             // Coefficient of x.
    this.c = c;             // Coefficient of units.
    this.colour = colour;   // Colour to plot the graph.
    return this;
};