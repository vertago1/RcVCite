if(typeof callRcVCiteOnce==='undefined'){
  chrome.storage.local.get('RcVCite',function(ret_options){
    if(chrome.runtime.lastError)
      console.log(chrome.runtime.lastError);
    if(typeof RcVCite === 'object'){
      $(document).ready(function(){
        var limitTo=document;
        RcVCite.horzPad=10;
        if(typeof ret_options['RcVCite'] !== 'undefined'){
          for(var key in ret_options['RcVCite']){
            if(key.indexOf('_')===0)
              continue;
            var old_type = typeof RcVCite[key];
            var new_type = typeof ret_options['RcVCite'][key];
            if( new_type !== 'undefined' && new_type !== 'function' ){
              switch(old_type){
                case 'string':
                  RcVCite[key]=''+ret_options['RcVCite'][key];
                  break;
                case 'number':
                  RcVCite[key]=parseFloat(ret_options['RcVCite'][key]);
                  break;
                case 'boolean':
                  RcVCite[key]=ret_options['RcVCite'][key]==='true';
                  break;
                case 'object':
                  RcVCite[key]=ret_options['RcVCite'][key];
                  break;
                case 'function':
                case 'null':
                case 'undefined':
                  break;
              }
            }
          }
        }
        RcVCite.cite(limitTo);
      });
    } else {
      console.log('RcVCite not defined!');
    }
  });
}
callRcVCiteOnce=true;