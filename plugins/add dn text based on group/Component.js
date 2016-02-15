$( document ).ready(function() {
    
    var gmtrArray = pb.plugin.get('gmtr').settings.gmtr;
	for(var i=0; i < gmtrArray.length; i++) {
	var gmtrgroup = pb.plugin.get('gmtr').settings.gmtr[i].gmgroup;
	var gmtrtext = pb.plugin.get('gmtr').settings.gmtr[i].gmtext + " ";
	var gmtrprepend = ".group-" + gmtrgroup;
	$(gmtrprepend).prepend(gmtrtext);
    }
    
});