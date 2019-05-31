/* exported FindProxyForURL */

var rutorHosts = ['rutor.is', 'rutor.info'];
var rutrackerHosts = ['rutracker.org'];

const allow = "DIRECT";
/*const rutorServer = "HTTPS proxy.antizapret.prostovpn.org:3143; PROXY proxy.antizapret.prostovpn.org:3128; DIRECT";*/
const rutorServer = "HTTPS proxy-ssl.antizapret.prostovpn.org:3143; PROXY proxy-nossl.antizapret.prostovpn.org:29976; DIRECT";
const rutrackerServer = "HTTPS ps1.blockme.site:443; DIRECT"

function FindProxyForURL(url, host) {
  if (rutrackerHosts.indexOf(host) != -1) {
    return rutrackerServer;
  }
  if (rutorHosts.indexOf(host) != -1) {
    return rutorServer;
  }
  return allow;
}
