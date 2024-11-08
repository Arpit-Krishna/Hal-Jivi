from sqlalchemy.ext.declarative import declarative_base
from sqlalchemy import Column,String,Integer
Base = declarative_base()

class Products(Base):
    __tablename__ = 'product' #table name in mysql
    
    #columns in the table
    URL = Column(String(500))
    Title = Column(String(500), primary_key=True)
    price = Column(Integer)
    