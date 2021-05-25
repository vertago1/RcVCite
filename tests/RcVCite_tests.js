var fs = require('fs');

function source_file(filename) {
  console.log('Loading '+filename);
  eval(fs.readFileSync(filename)+'');
  console.log('SUCCESS!');
}

//source_file('jquery.js');
//source_file('versification.js');
//source_file('RcVCite_v00_04.js');

var jsdom = require('jsdom');

const JSDOM = jsdom.JSDOM;

run_test = dom => {
  //dom.window.eval('jQuery("body").append("<span>Hello World!</span>");');
  var countdown = 100;
  var check_ready = function(){
    if (!dom.window.tests_finished) {
      countdown--;
      if (countdown > 0) {
        setTimeout(check_ready, 5);
      } else {
        console.log('TIMEOUT REACHED!');
        process.exit(1);
      }
    } else {
      if (dom.window.error_list.length > 0){
        process.exit(1);
      }
      //console.log(dom.serialize());
    }
  };
  check_ready();
  
  //var $ = window.jQuery;

  //$('body').append("<div class='testing'>Hello World</div>");
  //console.log($(".testing").text()); // outputs Hello World
};

fs.readFile("RcVCite_tests.html", (err, buffer) => {
  run_test(new JSDOM(buffer, {resources: 'usable', runScripts: 'dangerously'}));
  run_test(new JSDOM((buffer+'').replace('src="./jquery.js"','src="./jquery.1.10.2.min.js"'), {resources: 'usable', runScripts: 'dangerously'}));
});

//JSDOM.fromFile("RcVCite_tests.html", {resources: 'usable', runScripts: 'dangerously'}).then(run_test);
