sap.ui.define(
  ["sap/ui/model/json/JSONModel", "sap/ui/Device"],
  /**
   * provide app-view type models (as in the first "V" in MVVC)
   *
   * @param {typeof sap.ui.model.json.JSONModel} JSONModel
   * @param {typeof sap.ui.Device} Device
   *
   * @returns {Function} createDeviceModel() for providing runtime info for the device the UI5 app is running on
   */
  function (JSONModel, Device) {
    "use strict";

    return {
      createDeviceModel: function () {
        var oModel = new JSONModel(Device);
        oModel.setDefaultBindingMode("OneWay");
        return oModel;
      },
      createDummyModel: function () {
        var oModel = new JSONModel({
          entity1: {
            FarmerId: "F123",
            Material: "M333333",
            Quantity: 10,
            Date: "2022-03-24",
            Plant: "DE20",
          },
          entity2: {
            EmployeeNumber: "55555555",
          },
          entity3: {
            VehicleName: "BMW",
          },
        });
        oModel.setDefaultBindingMode("TwoWay");
        return oModel;
      },
    };
  }
);
