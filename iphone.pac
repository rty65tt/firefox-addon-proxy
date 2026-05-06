function FindProxyForURL(url, host) {
  return 'HTTPS 192.168.1.11:8080; SOCKS5 192.168.1.11:1080; PROXY 192.168.1.11:8080; DIRECT';
}
