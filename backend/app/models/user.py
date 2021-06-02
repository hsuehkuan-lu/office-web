from sqlalchemy import *
from sqlalchemy.orm import relationship
from datetime import datetime


from app.database import Base


class User(Base):
    __tablename__ = 'users'
    id = Column(Integer, primary_key=True, index=True)
    email = Column(String, unique=True, index=True)
    hashed_password = Column(String)
    is_active = Column(Boolean, default=True)

    posts = relationship('Post', back_populates='user')


class Post(Base):
    __tablename__ = 'posts'
    id = Column(Integer, primary_key=True, index=True, autoincrement=True)
    user_id = Column(Integer, ForeignKey('users.id'))
    title = Column(String, nullable=False)
    description = Column(String, nullable=False)
    date = Column(DateTime, default=datetime.utcnow())

    user = relationship('User', back_populates='posts')
