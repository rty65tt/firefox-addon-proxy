// Location of the proxy script, relative to manifest.json
const proxyScriptURL = "proxy.pac";

browser.proxy.register(proxyScriptURL);

// function pageActionShowIcon(rInfo) {
//   if (rInfo.tabId != -1) {
//     browser.pageAction.show(rInfo.tabId);
//   }
// }
// browser.proxy.onRequest.addListener(pageActionShowIcon, {urls: ["<all_urls>"]});
