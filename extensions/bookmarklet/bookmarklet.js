javascript:(function() {
function addRcVCite(d) {
  if(!d.getElementById('RcVCite')){
    var p = 'http:';
    if(window.location.protocol === "https:"){
      p = 'https:';
    }
    var H=d.getElementsByTagName('head')[0];
    var J_JS=d.createElement('script');
    var V_JS=d.createElement('script');
    var R_CSS=d.createElement('link');
    var R_JS=d.createElement('script');
    J_JS.src=p+'//ajax.googleapis.com/ajax/libs/jquery/1.10.2/jquery.min.js';
    V_JS.src=p+'//rcvcite.net/versification.js';
    R_CSS.rel = 'stylesheet';
    R_CSS.type = 'text/css';
    R_CSS.href=p+'//rcvcite.net/RcVCite.css';
    R_JS.src=p+'//rcvcite.net/RcVCite_v00_04.js';
    R_JS.onload=function(){ RcVCite && RcVCite.cite(); };
    H.appendChild(J_JS);
    H.appendChild(V_JS);
    H.appendChild(R_CSS);
    H.appendChild(R_JS);
    
  }
}
addRcVCite(document);
for (i=0; i<frames.length; i++) addRcVCite(frames[i].document);
})();