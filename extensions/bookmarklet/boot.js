(function(d) {
  var p = 'http:';
  if(window.location.protocol === "https:"){
    p = 'https:';
  }
  var H=d.getElementsByTagName('head')[0];
  var J_JS=d.createElement('script');
  var V_JS=d.createElement('script');
  var R_CSS=d.createElement('link');
  var R_JS=d.createElement('script');
  var count=3;
  var do_cite=function(){
    if(--count===0)
      RcVCite && RcVCite.cite(d);
  };
  var srv=p+'//rcvcite.net', sfx='';
  //srv=p+'//localhost//test/RcVCite/site_builder';sfx='?date='+(new Date()).getTime();
  J_JS.src=p+'//ajax.googleapis.com/ajax/libs/jquery/1.10.2/jquery.min.js';
  J_JS.onload=function(){ do_cite(); };
  V_JS.src=srv+'/versification.js'+sfx;
  V_JS.onload=function(){ do_cite(); };
  R_CSS.rel = 'stylesheet';
  R_CSS.type = 'text/css';
  R_CSS.href=srv+'/RcVCite.css'+sfx;
  R_JS.src=srv+'/RcVCite_v00_04.js'+sfx;
  R_JS.type = 'text/javascript';
  R_JS.onload=function(){ do_cite(); };
  H.appendChild(J_JS);
  H.appendChild(V_JS);
  H.appendChild(R_CSS);
  H.appendChild(R_JS);
})(document);