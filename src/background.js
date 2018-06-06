// Location of the proxy script, relative to manifest.json
const proxyScriptURL = "proxy.pac";

browser.proxy.register(proxyScriptURL);
