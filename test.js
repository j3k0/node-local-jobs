var jobs = require("./index");

var wait = function(cb) {
    console.log("doing wait");
    setTimeout(cb, 1000);
};

var waitDone = function() {
    console.log("wait done");
};

jobs.do("wait", wait, waitDone);
jobs.do("wait", wait, waitDone);
jobs.do("wait", wait, waitDone);
