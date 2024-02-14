const database = include('/databaseConnection');


async function AllUsers() {
	let sqlQuery = `
		SELECT * FROM freedb_: comp2350-week2-A01323412.web_user';
	`;
	
	try {
		const results = await database.query(sqlQuery);
		console.log(results[0]);
		return results[0];
	}
	catch (err) {
		console.log("Error selecting from users table");
		console.log(err);
		return null;
	}
}


module.exports = {AllUsers}
