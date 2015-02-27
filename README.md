# Local Jobs runner

Prevents running the same job multiple times, on the same worker.

## Install

```sh
npm install local-jobs
```

## Usage

```js
var jobs = require("local-jobs");

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
```

Will run `wait` only once.
Will call `waitDone` three times.
