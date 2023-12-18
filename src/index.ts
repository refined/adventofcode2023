console["logCopy"] = console.log.bind(console);

console.log = function (data) {
    var currentDate = '[' + new Date().toLocaleString() + '] ';
    this.logCopy(currentDate, data);
};

import "./18-day-2";
