// General application state.
osl.createNamespace("osl.graphplotter");

osl.graphplotter.state = {
    COLOURS: ['red', 'orange', 'gold', 'green', 'blue', 'indigo', 'violet'],
    CELL_SIZE: null,        // Will hold the size of a cell in the graph, in pixels.
    W: null,                // Will hold the width of the graph canvas, in pixels.
    H: null,                // Will hold the height of the graph canvas, in pixels.
    graphs: [],             // Collection of Graph objects.
    legendContext: null,    // 2d context for the legend context.
    graphContext: null      // 2d context for the graph context.
};