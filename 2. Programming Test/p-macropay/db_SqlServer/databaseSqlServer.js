const mssql = require('mssql');

const config = {
    user:"sa",
    password:"Pancho123",
    server:"localhost",
    database :"DBMacropay",
    //Bajascorpdb
    options: {
        encrypt: true, // for azure
        trustServerCertificate: true, // change to true for local dev / self-signed certs
      },
};

const mssqlConnection = new mssql.ConnectionPool(config);

mssqlConnection.connect((err) => {
	if (err) {
		console.log(err);
		return;
	} else {
		console.log('Se ha conectado a la base de datos de SqlServer');
	}
});

module.exports = mssqlConnection;
