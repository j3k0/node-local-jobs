var jobs = {};
var callbacks = {}
jobs.do = function(jobName, jobFunc, jobDoneCallback) {
  var lc = callbacks[jobName];
  if (!lc) {
      lc = callbacks[jobName] = [];
  }
  lc.push(jobDoneCallback)
  if (lc.length === 1) {
    jobFunc(function() {
      var jobCbArgs = arguments;
      for (var i = 0; i < lc.length; ++i)
        lc[i].call(this, jobCbArgs);
      delete callbacks[jobName];
    });
  }
};
module.exports = jobs;
