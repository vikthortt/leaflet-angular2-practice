/**
 * Created by Victor Torres on 03/08/2016.
 */
(function (app) {
  app.Toolbar = ng.core.Component({
    selector: 'toolbar',
    template: `
      <style>
        .toolbar {
          box-sizing: border-box;
          position: fixed;
          padding: 0 15px;
          z-index: 1000;
          top: 0;
          left: 0;
          width: 100%;
          min-height: 50px;
          color: white;
          background-color: black;
          display: flex;
          flex-direction: row;
          align-items: center;
          justify-content: flex-start;
        }
        .toolbar-tools {
          margin-left: auto;
        }
        
      </style>
      <div class="toolbar">
        <header class="toolbar-logo">
          <ng-content select="toolbarLogo"></ng-content>
        </header>
        <nav class="toolbar-tools">
          <ng-content select="toolbarTools"></ng-content>
        </nav>
      </div>
    `
  })
  .Class({
    constructor: function() {},
  });
})(window.app || (window.app = {}));
