var AppDispatcher = require('../dispatcher/AppDispatcher');
var AppConstants = require('../constants/AppConstants');
var EventEmitter = require('events').EventEmitter;
var assign = require('object-assign');
var AppAPI = require('../utils/AppAPI.js');

var CHANGE_EVENT = 'change';

var _notes = [];


var AppStore = assign({}, EventEmitter.prototype, {
    addNote: function(note){
		_notes.push(note);
	}
});

AppDispatcher.register(function(payload){
    var action = payload.action;
    
    switch (action.actionType) {
        case AppConstants.ADD_NOTE:
            
        break;

    }
});

module.exports = AppStore;