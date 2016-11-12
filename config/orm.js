var connection = require('./connection.js');



var ORM = {
	selectAll: function() {
		connection.query("SELECT * FROM burgers", function(err, data) {
			if (err) {
				throw err;
			}

			console.log(data);
		});
	},

	insertOne: function() {
		connection.query("INSERT INTO burgers values= ?", ["hey"],function(err, data) {
			if (err) {
				throw err;
			}

			console.log(data);
		});
	},

	updateOne: function(column, value) {
		connection.query("UPDATE burgers SET ? values= ?", [column, value] ,function(err, data) {
			if (err) {
				throw err;
			}

			console.log(data);
		});

	}
}

module.exports = ORM;