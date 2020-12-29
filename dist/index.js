"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _index_generated = require("./index_generated");

Object.keys(_index_generated).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  if (key in exports && exports[key] === _index_generated[key]) return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function get() {
      return _index_generated[key];
    }
  });
});

var _require = require("child_process"),
    spawn = _require.spawn,
    execSync = _require.execSync;

function init() {
  var arch = execSync("uname -m").toString().trim();
  var clientScriptPath = __dirname;
  var proxyPath = clientScriptPath + "/bin/http-cli-proxy-" + arch;
  var child = spawn(proxyPath, [clientScriptPath + "/bin/iwasm-" + arch], {
    detached: true,
    stdio: "ignore"
  });
  child.unref();
  process.on("exit", function () {
    return child.kill();
  });
}

module.exports.init = init;