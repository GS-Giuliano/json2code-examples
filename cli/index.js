#!/usr/bin/env node
const Json2frontend = require("json2frontend");
page = new Json2frontend({ useCDN: true, module: "html" });
page.title({ data: "Title!" });
page.subTitle({ data: "Sub-title!" });
page.text({ data: "Hello world!" });
console.log(page.output);

