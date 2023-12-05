from dataclasses import dataclass
from sqlalchemy import Column, Integer, String, Table, ForeignKey
from src.models.base import Base



@dataclass
class profile_codec(Base):
    __tablename__ = 'profile_codec'
    profile_id: int = Column(Integer, ForeignKey('profiles.id'), primary_key=True)
    codec_id: int = Column(Integer, ForeignKey('codecs.id'), primary_key=True)

@dataclass
class Profile(Base):
    __tablename__ = 'profiles'

    id: int = Column(Integer, primary_key=True)
    name: str = Column(String)
    codec: str = Column(String)
    speed: str = Column(String)