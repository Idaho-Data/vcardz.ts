"use strict";
const _Jasmine = require('jasmine');
const _consoleReporter = require('jasmine-console-reporter');
const reporter = new _consoleReporter({
    colors: 1,
    cleanStack: 1,
    verbosity: 1,
    listStyle: 'indent',
    timeUnit: 'ms',
    timeThreshold: { ok: 500, warn: 1000, ouch: 3000 },
    activity: true,
    emoji: true,
    beep: false
});
const jazmine = new _Jasmine();
jazmine.loadConfig({
    "spec_dir": ".",
    "spec_files": [
        "**/*.spec.ts"
    ],
    "helpers": [
        "helpers/**/*.js"
    ],
    "stopSpecOnExpectationFailure": false,
    "random": false,
});
jazmine.env.clearReporters();
jazmine.addReporter(reporter);
jazmine.execute();
