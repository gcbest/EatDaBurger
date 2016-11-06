var connection = require('./connection.js');


connection
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
		connection.query("INSERT INTO burgers values= ?", ,function(err, data) {
			if (err) {
				throw err;
			}

			console.log(data);
		});
	},

	updateOne: function() {
		connection.query("UPDATE burgers SET ? values= ?", ,function(err, data) {
			if (err) {
				throw err;
			}

			console.log(data);
		});

	}
}

module.exports = ORM;