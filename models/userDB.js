const mysql= require('mysql2');

const data= mysql.createConnection({
	host: 'localhost',
	user: 'assignDBuser',
	password: 'assignDBpass',
	database: 'assignDB'
});

// Simulated database
const users = [
  { "id": 1, "fname": "Jim", "lname": "Smith", "username": "jsmith" },
  { "id": 2, "fname": "Jack", "lname": "Kennedy", "username": "jkennedy" },
  { "id": 3, "fname": "Linda", "lname": "Nelson", "username": "lnelson" },
  { "id": 4, "fname": "Kayli", "lname": "Williams", "username": "kwilliams" },
  { "id": 5, "fname": "Seth", "lname": "Walters", "username": "swalters" },
  { "id": 6, "fname": "Brandon", "lname": "Jones", "username": "bjones" },
  { "id": 7, "fname": "Ally", "lname": "Smith", "username": "asmith" },
  { "id": 8, "fname": "Jordan", "lname": "Wilson", "username": "jwilson" }
];

function getUsers(callback) {
  setTimeout(function () {
    const query= 'SELECT userID AS id, fname, lname, username FROM users';
	data.query(query, function(err, results){
		if(err){
			console.error("Error inside getUser: ", err);
			return callback([]);
		}
		return callback(results);
	});
  }, 1000);
}

function addUser(user, callback) {
  setTimeout(function () {
	const query= 'INSERT INTO users(fname, lname, username, passwd) VALUES(?, ?, ?, ?)';
	const values= [user.fname, user.lname, user.username, ''];
	
	data.query(query, values, function(err, results){
			if(err){
				console.error("Error inside getUser: ", err);
				return callback(null);
			}
			return callback(results);
		});
	
    //user.id = users.length + 1;
   // users.push(user);
    //callback(user);
  }, 500);
}

module.exports = { getUsers, addUser };