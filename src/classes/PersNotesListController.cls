public with sharing class PersNotesListController {
   @AuraEnabled
   public static List<PersonalNote__c> getPersonalNotes (Id recordId, Integer numRows) {
      List<PersonalNote__c> notes;
      numRows = Integer.valueOf(numRows);
      System.debug('numRows = ' + numRows);
      if ( !(numRows > 0) ) {
         numRows=5;
      }
      if (recordId != null) {
             notes = [
                  SELECT Id, Name, Type__c, Subject__c, isSticky__c, Text__c
                  FROM PersonalNote__c WHERE Account__c = :recordId AND isSticky__c = true
                  ORDER BY Name desc LIMIT :numRows
             ];
      }
      return notes;
   }
}