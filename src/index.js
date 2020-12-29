const { spawn, execSync } = require("child_process");

function init() {
  const arch = execSync("uname -m").toString().trim();

  var clientScriptPath = __dirname;
  var proxyPath = clientScriptPath + "/bin/http-cli-proxy-" + arch;

  const child = spawn(proxyPath, [clientScriptPath + "/bin/iwasm-" + arch], {
    detached: true,
    stdio: "ignore",
  });

  child.unref();
  process.on("exit", () => child.kill());
}

export * from "./index_generated";
module.exports.init = init;
