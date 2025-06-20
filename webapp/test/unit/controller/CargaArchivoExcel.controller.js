/*global QUnit*/

sap.ui.define([
	"cargaarchivoexcel/controller/CargaArchivoExcel.controller"
], function (Controller) {
	"use strict";

	QUnit.module("CargaArchivoExcel Controller");

	QUnit.test("I should test the CargaArchivoExcel controller", function (assert) {
		var oAppController = new Controller();
		oAppController.onInit();
		assert.ok(oAppController);
	});

});
