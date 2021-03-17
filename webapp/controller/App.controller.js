sap.ui.define([
	"sap/ui/core/mvc/Controller",
	"sap/ui/model/json/JSONModel",
	"sap/m/MessageBox"
], function (Controller, JSONModel, MessageBox) {
	"use strict";

	return Controller.extend("myApp.Calculator_App.controller.App", {
		onInit: function () {
			var oModel = new JSONModel( {Text : ""} );
			this.getView().setModel(oModel, "Text");
		},
		onPress: function(oEvent) {
			var sText = oEvent.getSource().getText();
			if (sText !== "="){
			sText = this.getView().getModel("Text").getProperty("/Text") + sText;
			this.getView().getModel("Text").setProperty("/Text", sText);
			}
			else{
				var sExp = this.getView().getModel("Text").getProperty("/Text");
				var sAns = eval(sExp);
				this.getView().getModel("Text").setProperty("/Text", sAns);
				sExp = "The answer is:" + sAns;
				MessageBox.show( sExp, {title:"Answer"});
			}
		},
		onClear: function(oEvent){
			this.getView().getModel("Text").setProperty("/Text", "");
		}
	});
});