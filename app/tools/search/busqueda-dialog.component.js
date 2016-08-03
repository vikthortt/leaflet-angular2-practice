/**
 * Created by Victor Torres on 03/08/2016.
 */
(function (app) {
  app.DialogBusqueda = ng.core.Component({
    selector: 'dialog-search',
    template: `
      <style>
        .dialog {
          position: fixed;
          top: 75px;
          right: 25px;
          width: 200px;
          height: 150px;
          background-color: blue;
          color: yellow;
          border-radius: 10px;
          box-shadow: rgba(0,0,0,0.4) 5px 10px;
        }
      </style>
      <div class="dialog">Dialogo de búsqueda</div>
    `
  }).Class({
    constructor: function () {},
  });
})(window.app || (window.app = {}));