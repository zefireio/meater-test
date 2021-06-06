// Import dependencies
const JSONdb = require('simple-json-db');
const db = new JSONdb('./db/db.json');

// Define relevant Contact Controller methods to interact with the Contact Model (data)

// Lists all contacts from JSON file
function all(orderBy = 'asc') {
	var json = db.JSON();
	var data = toArray(json);
	return (orderBy == 'desc') ? desc(data) : data;
}

// Find a contact by ID from JSON file
function find(id) {
	return db.get(id - 1);
}

// Insert a new contact
function insert(name, email, message, newsletter, created_at) {
	var data = db.JSON();
	var length = getLength(data);
	var insertId = (length == 0) ? 1 : length + 1;
	var create = {
		id: insertId,
		created_at: created_at,
		name: name,
		email: email,
		message: message,
		newsletter: newsletter
	};
	data[insertId] = create;
	db.JSON(data);
	db.sync();
	return {lastInsertedId: insertId};
}

// Alter sorting
function desc(data) {
	return data.slice().sort((a, b) => b.id - a.id);
}

// Get the json file data length to generate ID
function getLength(data) {
	return Object.keys(data).length;
}

// Get the json data and converts it to array
function toArray(json) {
	var data = [];
	for (var prop in json) {
    	if (Object.prototype.hasOwnProperty.call(json, prop)) {
        	data.push(json[prop]);
    	}
	}
	return data;
}

module.exports = {
    all,
    find,
    insert    
}