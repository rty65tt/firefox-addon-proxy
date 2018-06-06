/* exported FindProxyForURL */

var rutorHosts = ['rutor.is', 'rutor.info', 'rutor.org'];
var rutrackerHosts = ['rutracker.org'];

const allow = "DIRECT";
const rutorServer = "HTTPS proxy.antizapret.prostovpn.org:3143; PROXY proxy.antizapret.prostovpn.org:3128; DIRECT";
const rutrackerServer = "HTTPS ps1.blockme.site:443"

function FindProxyForURL(url, host) {
  if (rutrackerHosts.indexOf(host) != -1) {
    return rutrackerServer;
  }
  if (rutorHosts.indexOf(host) != -1) {
    return rutorServer;
  }
  return allow;
}
