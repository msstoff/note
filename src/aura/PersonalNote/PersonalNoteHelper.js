({
    validateNoteForm: function(component) {
        var validNote = true;

         // Show error messages if required fields are blank
//        var allValid = component.find('noteField').reduce(function (validFields, inputCmp) {
//            inputCmp.showHelpMessageIfInvalid();
//            return validFields && inputCmp.get('v.validity').valid;
//        }, true);
//
//        if (allValid) {
//            // Verify we have an account to attach it to
//            var account = component.get("v.account");
//            if($A.util.isEmpty(account)) {
//                validContact = false;
//                console.log("Quick action context doesn't have a valid account.");
//            }
        	return(validNote);            
        },
	navigateTo: function(component, recId) {
	    var navEvt = $A.get("e.force:navigateToSObject");
	    navEvt.setParams({
	        "recordId": recId
	    });
	    navEvt.fire();
	}
       
})