var React = require('react');
var AppActions = require('../actions/AppActions');
var AppStore = require('../stores/AppStore');
var AddNoteForm = require('./AddNoteForm.js');

function getAppState(){
	return {
		notes: AppStore.getNotes()
	};
}

var App = React.createClass({
    
});

module.exports = App;