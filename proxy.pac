function FindProxyForURL(url, host)
{
    // definition
    var proxyCorp="DIRECT";  // replace with DIRECT if not using proxy for internet access 
    var proxySWPext="PROXY webpt.fm-bottomline.com:2443; PROXY webptr.fm-bottomline.com:2443; PROXY webptr.uat.fm-bottomline.com:2443; PROXY webpt.uat.fm-bottomline.com:2443";
    // classifiation
    if (isPlainHostName(host)) return "DIRECT";
    if (isInNet(host, "127.0.0.0", "255.0.0.0")) return "DIRECT";
    if (isInNet(host, "192.168.0.0", "255.255.0.0")) return "DIRECT";
    if (isInNet(host, "10.0.0.0" , "255.0.0.0")) return "DIRECT";
    if (dnsDomainIs(host, ".localdomain")) return "DIRECT";
    // SWIFT START
    if (dnsDomainIs(host, ".emip.swiftnet.sipn.swift.com")) return "PROXY 127.0.0.1:38080";
    if (dnsDomainIs(host, ".common.swiftnet.sipn.swift.com")) return "PROXY 127.0.0.1:38080";
    if (dnsDomainIs(host, ".tips.swiftnet.sipn.swift.com")) return "PROXY 127.0.0.1:38080"; 
    if (dnsDomainIs(host, ".t2.swiftnet.sipn.swift.com")) return "PROXY 127.0.0.1:38080";
    if (dnsDomainIs(host, ".ecms.swiftnet.sipn.swift.com")) return "PROXY 127.0.0.1:38080";
    if (dnsDomainIs(host, ".sipn.swift.com")) {
        return proxySWPext;
    }
    // SWIFT END
return proxyCorp;
}
