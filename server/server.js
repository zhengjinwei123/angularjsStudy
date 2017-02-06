var connect = require("connect");
var serveStatic = require("serve-static");
var Path = require("path");

var app = connect();
app.use(serveStatic(Path.join(__dirname,"./static/")));

app.listen(5000);