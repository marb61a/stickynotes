var AppActions = require('../actions/AppActions');

module.exports = {
    addNote : function(note){
        $.ajax({
            url : "",
            data: JSON.stringify(note),
			type: "POST",
			contentType: "application/json"
        });
    },
    
    getNotes : function(){
         $.ajax({
             url : "",
             dataType: 'json',
             cache : 'false',
             success : function(data){
                console.log(data);
				AppActions.receiveNotes(data);
             }.bind(this),
             error: function(xhr, status, err){
				console.log(err);
			 }.bind(this)
         });
    },
    
    removeNote : function(noteId){
        $.ajax({
            url : "",
            async : true,
            timeout : 300000,
            success : function(data){
                console.log('Note deleted');
             }.bind(this),
             error: function(xhr, status, err){
				console.log(err);
			 }.bind(this)
        });
    }
    
};