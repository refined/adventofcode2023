console["logCopy"] = console.log.bind(console);

console.log = function (data) {
    var currentDate = '[' + new Date().toISOString() + '] ';
    this.logCopy(currentDate, data);
};

import "./12-day-2";
