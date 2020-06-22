const fs = require("fs");

fs.writeFile("output.json", `"${ new Date().toLocaleTimeString() }"`, () => {});
