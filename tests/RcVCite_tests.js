
module.exports.tests = () => {
  var fs = require('fs');
  var path = require("path");

  var jsdom = require('jsdom');
  const JSDOM = jsdom.JSDOM;

  run_test = (file, dom_factory) => {
    var error_list = [];

    var virtualConsole = new jsdom.VirtualConsole();
    virtualConsole.sendTo(console);
    virtualConsole.addListener("jsdomError", (error) => {
      error_list.push(error);
    });

    var dom = dom_factory({
      'resources': 'usable',
      'runScripts': 'dangerously',
      'url': 'file://' + file,
      virtualConsole});
    
    var countdown = 100;
    var check_ready = () => {
      if (!dom.window.tests_finished) {
        countdown--;
        if (countdown > 0) {
          setTimeout(check_ready, 5);
        } else {
          var msg = 'TIMEOUT REACHED!';
          console.log(msg);
          throw msg;
        }
      } else {
        if (dom.window.error_list && dom.window.error_list.length > 0) {
          console.error(dom.window.error_list);
          for (var x = 0; x < dom.window.error_list.length; ++x) {
            error_list.push(dom.window.error_list[x]);
          }
        }
        if (error_list.length > 0) {
          //
          throw error_list;
        }
      }
    };
    check_ready();
  };

  var file = path.resolve('tests/RcVCite_tests.html');
  console.debug("Loading:", file);
  fs.readFile(file, (err, buffer) => {
    if (err) {
      console.error(err);
      throw err;
    }
    run_test(file, (kwargs) => {
      return new JSDOM(buffer, kwargs);
    });
    //run_test(new JSDOM((buffer + '').replace('src="./jquery.js"', 'src="./jquery.1.10.2.min.js"'), {resources: 'usable', runScripts: 'dangerously'}));
  });
};