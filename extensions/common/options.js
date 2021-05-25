var options={};

function store_yn(id) {
  var node = document.getElementById(id);
  if (!node) {
    console.log('WARNING: cannot find node for '+id);
    return;
  }
  options[id]=((typeof node.checked === 'boolean' && node.checked)?'true':'false');
}

function store_numeric(id) {
  var node = document.getElementById(id);
  if (!node) {
    console.log('WARNING: cannot find node for '+id);
    return;
  }
  if((node.value+'').match(/^[0-9]+(\.[0-9]+)?$/))
    options[id]=node.value;
}

function store_string(id) {
  var node = document.getElementById(id);
  if (!node) {
    console.log('WARNING: cannot find node for '+id);
    return;
  }
  options[id]=node.value;
}

function restore_yn(id) {
  var value = options[id];
  var node = document.getElementById(id);
  if (!node) {
    console.log('WARNING: cannot find node for '+id);
    return;
  }
  if (typeof value === 'undefined') {
    if(typeof RcVCite[id] !== 'undefined')
      value=RcVCite[id]?'true':'false';
    else
      return;
  }
  if(value==='true'){
    node.checked=true;
  }else{
    node.checked=false;
  }
}

function restore_numeric(id) {
  var value = options[id];
  var node = document.getElementById(id);
  if (!node) {
    console.log('WARNING: cannot find node for '+id);
    return;
  }
  if (typeof value === 'undefined') {
    if(typeof RcVCite[id] !== 'undefined')
      value=RcVCite[id];
    else
      return;
  }
  node.value=value;
}

function restore_string(id) {
  var value = options[id];
  var node = document.getElementById(id);
  if (!node) {
    console.log('WARNING: cannot find node for '+id);
    return;
  }
  if (typeof value === 'undefined') {
    if(typeof RcVCite[id] !== 'undefined')
      value=RcVCite[id];
    else
      return;
  }
  console.log(value);
  node.value=value;
}

var inputs = ['extraClass','citeChapters','hoverDelay','horzPad','looseContext','listInvalid','ignoreFilter'];
var restore = [restore_string,restore_yn,restore_numeric,restore_numeric,restore_yn,restore_yn,restore_string];
var store = [store_string,store_yn,store_numeric,store_numeric,store_yn,store_yn,store_string];

// Saves inputs to options.
function save_inputs() {
  for(var x=0; x<inputs.length; x++){
    if(typeof store[x] === 'function')
      store[x](inputs[x]);
    else
      console.log('WARNING: expected function during save inputs index '+x);
  }
  console.log(options);
  chrome.storage.local.set({'RcVCite':options},function(){
    var status = document.getElementById("status");
    status.textContent = chrome.runtime.lastError?"Error":"Options Saved.";
    console.log(chrome.runtime.lastError);
    setTimeout(function() {
      status.textContent = "";
    }, 750);
  });
}


function restore_inputs() {
  chrome.storage.local.get('RcVCite',function(ret_options){
    if(typeof ret_options['RcVCite'] !== 'undefined'){
      for(var key in ret_options['RcVCite']){
        if(key==='RcVCite'||key==='__proto__')
          continue;
        options[key]=ret_options['RcVCite'][key];
      }
    }
    if(chrome.runtime.lastError)
      console.log(chrome.runtime.lastError);
    console.log(options);
    for(var x=0; x<inputs.length; x++){
      if(typeof restore[x] === 'function')
        restore[x](inputs[x]);
      else
        console.log('WARNING: expected function during restore inputs index '+x);
    }
  });
}

function close_window(){
  window.open('', '_self', '');
  window.close();
}

document.addEventListener('DOMContentLoaded', restore_inputs);
document.querySelector('#save').addEventListener('click', save_inputs);
document.querySelector('#cancel').addEventListener('click', close_window);
