// Location of the proxy script, relative to manifest.json
const proxyScriptURL = "proxy/proxy-script.pac";

browser.proxy.register(proxyScriptURL);
