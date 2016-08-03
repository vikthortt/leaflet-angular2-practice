(function(app) {
  console.log(app);
  app.AppComponent = ng.core.Component({
    selector: 'my-app',
    directives: [app.BtnBusqueda, app.Toolbar, app.MyMap],
    template: `
      <toolbar>
        <toolbarLogo>IMEPLAN</toolbarLogo>
        <toolbarTools>
          <btn-search></btn-search>
        </toolbarTools>
      </toolbar>
      <my-map></my-map>`
  }).Class({
    constructor: function() {}
  });
})(window.app || (window.app = {}));

