var FG_RED = "\x1b[31m";
var FG_DIM = "\x1b[2m";
var BG_GREEN = "\x1b[42m";
var FG_BLUE = "\x1b[34m";
var RESET = "\x1b[0m";
var FG_YELLOW = "\x1b[33m";

exports.log = function(m) { console.log(RESET, m, RESET); }
exports.warning = function(m) { console.log(FG_YELLOW, m, RESET); }
exports.error = function(m) { console.log(FG_RED, m, RESET); }
exports.info = function(m) { console.log(FG_BLUE, m, RESET); }
exports.major = function(m) { console.log(BG_GREEN, m, RESET); }
exports.minor = function (m) { console.log(FG_DIM, m, RESET); }