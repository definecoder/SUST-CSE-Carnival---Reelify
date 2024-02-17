const os = require("os");

const getIPAddress = () => {
  // Get the network interfaces
  const networkInterfaces = os.networkInterfaces();

  // Extract the IPv4 address from the network interfaces
  const ipv4Addresses = [];
  for (const interfaceName in networkInterfaces) {
    const interfaces = networkInterfaces[interfaceName];
    for (const iface of interfaces) {
      if (iface.family === "IPv4" && !iface.internal) {
        ipv4Addresses.push(iface.address);
      }
    }
  }

  console.log("IPv4 Addresses:", ipv4Addresses[0]);
  return ipv4Addresses[0];
};

module.exports = { getIPAddress };
