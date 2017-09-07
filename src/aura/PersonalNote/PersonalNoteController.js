({
//TODO: retrieve picklist values from system

	doInit : function(component, event, helper) {
		// Prepare a new record from template
		component.find("noteRecordCreator").getNewRecord(
		"PersonalNote__c", 
		null, // recordTypeId
		false, // skip cache?
		$A.getCallback(function() {
			var rec = component.get("v.newNote");
			var error = component.get("v.noteCreationError");
			if (error || (rec === null)) {
				console.log("Error initializing record template: " + error);
				return;
			}
			console.log("Record template initialized: " + rec.sobjectType);
		}));
	},
	handleSaveNote : function(component, event, helper) {
		if (helper.validateNoteForm(component)) {
			var checked = component.find("noteStky").get("v.value");
			console.log("sticky" + checked);
			var acctId = component.get("v.recordId");
			component.set("v.newNote.Account__c", acctId );
			component.find("noteRecordCreator")
			.saveRecord(
				function(saveResult) {
					if (saveResult.state === "SUCCESS"
							|| saveResult.state === "DRAFT") {
						// record is saved successfully
						var resultsToast = $A.get("e.force:showToast");
						resultsToast.setParams({
							"title" : "Saved",
							"message" : "The record was saved."
						});
						resultsToast.fire();
						helper.navigateTo(component, acctId);
					} else if (saveResult.state === "INCOMPLETE") {
						// handle the incomplete state
						console.log("User is offline, device doesn't support drafts.");
					} else if (saveResult.state === "ERROR") {
						// handle the error state
						console.log('Problem saving note, error: '
										+ JSON.stringify(saveResult.error));
					} else {
						console.log('Unknown problem, state: '
								+ saveResult.state + ', error: '
								+ JSON.stringify(saveResult.error));
					}
				});
		}
	}
})