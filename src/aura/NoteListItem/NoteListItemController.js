({
    // TODO fleshing out this function
    navToRecord: function(component, event, helper) {
    	var rec = component.get("v.aNote.Id");
    	console.log("selected id: " + rec);
        var navEvt = $A.get("e.force:editRecord");
        navEvt.setParams({
            "recordId": rec
        });
        navEvt.fire();
    },
})