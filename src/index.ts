console["logCopy"] = console.log.bind(console);

console.log = function (data) {
    var currentDate = '[' + new Date().toLocaleString() + '] ';
    this.logCopy(currentDate, data);
};

import "./19-day-2";
