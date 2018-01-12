define(["sap/watt/lib/jszip/jszip-shim"], function(JSZip) {
	return function() {

		var NEW_TEMPLATE_VERSION = "1.40.12";
		var OLD_DEFAULT_THEME = "sap_bluecrystal";
		var NEW_DEFAULT_THEME = "sap_belize";
		var OLD_AVAILABLE_THEMES = ["sap_hcb", "sap_bluecrystal"];
		var NEW_AVAILABLE_THEMES = ["sap_hcb", "sap_belize"];

		return {

			configWizardSteps: function(oTemplateCustomizationStep) {},

			onBeforeTemplateGenerate: function(templateZip, model) {
				model.ui5Config = {
					Theme: NEW_DEFAULT_THEME,
					AvailableThemes: NEW_AVAILABLE_THEMES
				};

				model.sapUI5Url = "../../resources/sap-ui-core.js";

				//replace filename from wizard
				templateZip.files["webapp/controller/Main.controller.js.tmpl"].name = "webapp/controller/" + model.basicSAPUI5ApplicationProject.parameters
					.name.value + ".controller.js.tmpl";
				templateZip.files["webapp/view/Main.view.xml.tmpl"].name = "webapp/view/" + model.basicSAPUI5ApplicationProject.parameters.name.value +
					".view.xml.tmpl";

				return [templateZip, model];
			},

			onAfterGenerate: function(projectZip, model) {
				return [projectZip, model];
			}
		};
	};
});