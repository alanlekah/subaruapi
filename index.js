const childProcess = require('child_process');
const path = require('path');

module.exports = {

    lock_unlock: function (event) {

        // console.log(event);

        // Set the path as described here: https://aws.amazon.com/blogs/compute/running-executables-in-aws-lambda/
        // process.env['PATH'] = process.env['PATH'] + ':' + process.env['LAMBDA_TASK_ROOT'];

        // Set the path to casperjs
        let casperPath = path.join(__dirname, 'node_modules/casperjs/bin/casperjs');

        // Check if its a viable event
        if (!event.hasOwnProperty('path') || (['/lock', '/unlock'].indexOf(event['path']) === -1)) {
            console.error("unknown path: " + event['path']);
            return;
        }

        let filename = (event['path'].indexOf('unlock') > -1) ? "unlock.js" : "lock.js";
        console.log("running file: " + filename);

        // Arguments for the casper script
        let processArgs = [
            'test',
            path.join(__dirname, filename)
        ];

        // Launch the child process
        childProcess.execFile(casperPath, processArgs, function (error, stdout, stderr) {
            if (error) {
                console.error(error);
                return;
            }
            if (stderr) {
                console.error(stderr);
                return;
            }
            console.log(stdout);
        });
    }
};