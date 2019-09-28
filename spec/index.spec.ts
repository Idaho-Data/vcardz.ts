const _Jasmine = require('jasmine');
const _consoleReporter = require('jasmine-console-reporter');


const reporter = new _consoleReporter({
                                        colors: 1,           // (0|false)|(1|true)|2
                                        cleanStack: 1,       // (0|false)|(1|true)|2|3
                                        verbosity: 1,        // (0|false)|1|2|(3|true)|4|Object
                                        listStyle: 'indent', // "flat"|"indent"
                                        timeUnit: 'ms',      // "ms"|"ns"|"s"
                                        timeThreshold: { ok: 500, warn: 1000, ouch: 3000 }, // Object|Number
                                        activity: true,
                                        emoji: true,         // boolean or emoji-map object
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
