/**
 * Created by Victor Torres on 03/08/2016.
 */
(function (app) {
  app.BtnBusqueda = ng.core.Component({
    selector: 'btn-search',
    directives: [app.DialogBusqueda],
    template: `
      <button (click)="onclick()">Search</button>
      <dialog-search *ngIf="showdialog"></dialog-search>
    `
  }).Class({
    constructor: function () {
      this.showdialog = false;
    },
    onclick: function () {
      this.showdialog = !this.showdialog;
      console.log('search');
    }
  });
})(window.app || (window.app = {}));