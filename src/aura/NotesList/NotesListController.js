({
    doInit: function(component, event, helper) {
        var action = component.get("c.getPersonalNotes");
        action.setStorable();
        action.setParams({
            recordId: component.get("v.recordId"),
            numRows: component.get("v.numRows")
        });
        action.setCallback(this, function(data) {
            component.set("v.notes", data.getReturnValue());
        });
        $A.enqueueAction(action);

    },

})