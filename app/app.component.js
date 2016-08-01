(function(app) {
  app.AppComponent = ng.core.Component({
    selector: 'my-app',
    directives: [app.MyMap],
    template: '<h1>Hello World!</h1><my-map></my-map>'
  }).Class({
    constructor: function() {}
  });
})(window.app || (window.app = {}));

