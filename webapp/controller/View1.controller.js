sap.ui.define(
  ["sap/ui/core/mvc/Controller", "sap/ui/core/Fragment"],
  /**
   * @param {typeof sap.ui.core.mvc.Controller} Controller
   */
  function (Controller, Fragment) {
    "use strict";

    return Controller.extend("project2.controller.View1", {
      onInit: function () {},
      onBeforeRendering: function () {
        debugger;
      },
      onVHMaterial: function () {},

      onVHPLant: function () {},

      onExecute: function () {
        sap.m.MessageToast.show("On press of Execute");

        var oDataModel = this.getView().getModel("NWDModel");

        var vQuery = "/Suppliers";
        var vParams = {
          urlParameters: {
            $top: 3,
            $skip: 2,
            // "$expand" : null
          },
          sorters: null,
          filters: null,
          success: function (oResult) {
            debugger;
            this.getView()
              .getModel("MyModel")
              .setProperty("/Suppliers", oResult.results);
            this.openSuppliersDialog();
          }.bind(this),
          error: function (oErr) {
            debugger;
          },
        };
        oDataModel.read(vQuery, vParams);
      },

      onButton1: function () {
        var oView = this.getView();
        if (!this.pDialog1) {
          Fragment.load({
            id: oView.getId(),
            name: "project2.view.fragments.one",
            controller: this,
          }).then(
            function (oDialog) {
              oView.addDependent(oDialog);
              this.pDialog1 = oDialog;
              oDialog.open();
            }.bind(this)
          );
        } else {
          this.pDialog1.open();
        }
      },
      onButton2: function () {
        var oView = this.getView();
        if (!this.pDialog2) {
          Fragment.load({
            id: oView.getId(),
            name: "project2.view.fragments.two",
            controller: this,
          }).then(
            function (oDialog) {
              oView.addDependent(oDialog);
              this.pDialog2 = oDialog;
              oDialog.open();
            }.bind(this)
          );
        } else {
          this.pDialog2.open();
        }
      },

      openSuppliersDialog: function () {
        var oView = this.getView();
        if (!this.pDialog3) {
          Fragment.load({
            id: oView.getId(),
            name: "project2.view.fragments.Suppliers",
            controller: this,
          }).then(
            function (oDialog) {
              oView.addDependent(oDialog);
              this.pDialog3 = oDialog;
              oDialog.open();
            }.bind(this)
          );
        } else {
          this.pDialog3.open();
        }
      },
      onDlg1Close: function () {
        this.pDialog1.close();
      },
      onDlg2Close: function () {
        this.pDialog2.close();
      },
      onDlg3Close: function () {
        this.pDialog3.close();
      }
    });
  }
);
