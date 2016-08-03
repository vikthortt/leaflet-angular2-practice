(function(app) {
  console.log(app);
  app.AppComponent = ng.core.Component({
    selector: 'my-app',
    directives: [app.Toolbar, app.MyMap],
    template: `
      <toolbar>
        <toolbarLogo>IMEPLAN</toolbarLogo>
        <toolbarTools>
          TOOLS
        </toolbarTools>
      </toolbar>
      <my-map></my-map>`
  }).Class({
    constructor: function() {}
  });
})(window.app || (window.app = {}));

