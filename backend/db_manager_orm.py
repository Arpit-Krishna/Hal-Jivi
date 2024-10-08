from sqlalchemy import create_engine
from sqlalchemy.orm import sessionmaker
config = {
"user" : "root",
"passwd": "qwerty@1234",
"database": "elite_db",
"port":3306
}

def get_db():
    DB_URL = f"mysql://{config['user']}:{config['passwd']}@{config['host']}:{config['port']}/{config['database']}"
    print(DB_URL)
    engine = create_engine(DB_URL,echo=True)
    SessionLocal = sessionmaker(autocommit=False, autoflush=False, bind=engine)
    db_session = SessionLocal() 
    return db_session
# get_db()
