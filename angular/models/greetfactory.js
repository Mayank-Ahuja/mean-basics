/*logic for model can be placed in two places services or factory */
module.factory('greetfactory', function() {
   var object = {
      initCap:function(name){
          return name.charAt(0).toUpperCase()+name.substring(1).toLowerCase();
      }  
    };
    return object; 
});