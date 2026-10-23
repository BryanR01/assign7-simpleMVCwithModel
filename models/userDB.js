const mysql= require('mysql2');

const data= mysql.createConnection({
	host: 'localhost',
	user: 'assignDBuser',
	password: 'assignDBpass',
	database: 'assignDB'
});


function getUsers(callback) {
    const query= 'SELECT userID AS id, fname, lname, username FROM users';
	data.query(query, function(err, results){
		if(err){
			console.error("Error inside getUser: ", err);
			return callback([]);
		}
		return callback(results);
	});
}

function addUser(user, callback) {
  setTimeout(function () {
	const query= 'INSERT INTO users(fname, lname, username, passwd) VALUES(?, ?, ?, ?)';
	const values= [user.fname, user.lname, user.username, ''];
	
	data.query(query, function(err, results){
			if(err){
				console.error("Error inside getUser: ", err);
				return callback(null);
			}
			return callback(results);
		});
	
    user.id = users.length + 1;
    users.push(user);
    callback(user);
  }, 500);
}

module.exports = { getUsers, addUser };