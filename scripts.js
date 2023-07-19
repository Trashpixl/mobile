if( /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) ) {
    // redirects if mobile
    
} 
else{
    location.replace("http://trashpixl.github.io");
}
function copyServIp() {
    navigator.clipboard.writeText("--PutActualIpHere--");
    alert("Ip Copied!");
  }
