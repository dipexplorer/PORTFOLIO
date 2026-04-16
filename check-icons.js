const lr = require("lucide-react");
const icons = Object.keys(lr).filter(k => 
  k.toLowerCase().includes("git") || 
  k.toLowerCase().includes("link") || 
  k.toLowerCase().includes("mail") || 
  k.toLowerCase().includes("download")
);
console.log(icons.join(", "));
