var exec = require('cordova/exec');

var honeywell = {
    listenForScans: function(success, failure) {
        alert("sssssssssssss")
        return exec(success, failure, "HoneywellScannerPlugin", "listenForScans", []);
    }
};

module.exports = honeywell;
