var AppActions = require('../actions/AppActions');

module.exports = {
    addNote : function(note){
        $.ajax({
            url : "",
            data: JSON.stringify(note),
			type: "POST",
			contentType: "application/json"
        });
    }
    
};