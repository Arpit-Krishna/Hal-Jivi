import mysql.connector
config = {
"host" :"localhost",
"user" : "root",
"passwd": "qwerty@1234",
"database": "elite_db"
}

def get_db():
	database = mysql.connector.connect(**config)
	return database
