var orm = require('../config/orm.js');


var burg = {
	all: orm.selectAll()
}

console.log(burg.all);
// module.exports = burg;
