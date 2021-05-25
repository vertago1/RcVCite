javascript:(function() {
function addRcVCite(d) {
  if(!d.getElementById('RcVCite_bookmarklet')){
    var p = 'http:';
    if(window.location.protocol === "https:"){
      p = 'https:';
    }
    var H=d.getElementsByTagName('head')[0];
    var B_JS=d.createElement('script');
    B_JS.id='RcVCite_bookmarklet';
    B_JS.src=p+'//rcvcite.net/boot.js';
    B_JS.type = 'text/javascript';
    H.appendChild(B_JS);
  }
}
addRcVCite(document);
for (i=0; i<frames.length; i++) addRcVCite(frames[i].document);
})();