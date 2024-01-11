from flask_sqlalchemy import SQLAlchemy
from sqlalchemy import MetaData
from sqlalchemy.orm import validates
from sqlalchemy_serializer import SerializerMixin

metadata = MetaData(naming_convention={
    "fk": "fk_%(table_name)s_%(column_0_name)s_%(referred_table_name)s",
})

db = SQLAlchemy(metadata=metadata)

# --- USER --- #

class User(db.Model, SerializerMixin):
    # TABLE #
    __tablename__ = 'users'

    # COLUMNS #
    id = db.Column(db.Integer, primary_key=True)
    email = db.Column(db.String, unique=True, nullable=False)
    password_hash = db.Column(db.String)

    # RELATIONSHIP #
    chat = db.relationship('Chat', back_populates='user')

    # SERIALIZER #
    serialize_rules = ("-chat",)


# --- Chat --- #

class Chat(db.Model, SerializerMixin):
    # TABLE #
    __tablename__ = 'chat'

    # COLUMNS #
    id = db.Column(db.Integer, primary_key=True)
    user_id = db.Column(db.Integer, db.ForeignKey('users.id'), nullable=False)
    treatment_id = db.Column(db.Integer, db.ForeignKey('treatment.id'), nullable=False)

    # RELATIONSHIP #
    user = db.relationship('User', back_populates='chat')
    healthconditions = db.relationship('HealthConditions', secondary = 'chat_healthconditions_association', back_populates = 'chats')
    treatment = db.relationship('Treatment', back_populates = 'chats')

    # SERIALIZER #
    serialize_rules = ("-user",)

# --- Health Conditions ---- #
class HealthConditions(db.Model, SerializerMixin):
    # TABLE #
    __tablename__ = 'healthconditions'

    # COLUMNS #
    id = db.Column(db.Integer, primary_key=True)
    name = db.Column(db.String(255), nullable=False)

    # RELATIONSHIP #
    chats = db.relationship('Chat', secondary='chat_healthconditions_association', back_populates = 'healthconditions')
    treatments = db.relationship('Treatment', secondary = 'healthcondition_treatment_association', back_populates = 'healthconditions')

    # SERIALIZER #
    serialize_rules = ("-id",)

class Treatment(db.Model, SerializerMixin):
    # TABLE #
    __tablename__ = 'treatment'

    # COLUMNS #
    id = db.Column(db.Integer, primary_key=True)
    name = db.Column(db.String, nullable=False)
    condition = db.Column(db.String, nullable=False)   

    # RELATIONSHIP #
    chats = db.relationship('Chat', back_populates = 'treatment')
    healthconditions = db.relationship('HealthConditions', secondary = 'healthcondition_treatment_association', back_populates = 'treatments')

    # SERIALIZER #
    serialize_rules = ("-chats",)

#------- Association Table for chat and healthcondition ------#
chat_healthconditions_association = db.Table(
    'chat_healthconditions_association',
    db.Column('chat_id', db.Integer, db.ForeignKey('chat.id')),
    db.Column('healthcondition_id', db.Integer, db.ForeignKey('healthconditions.id'))
)

#------ Association Table for chat and treatment ------#

healthcondition_treatment_association = db.Table(
    'healthcondition_treatment_association',
    db.Column('healthcondition_id', db.Integer, db.ForeignKey('healthconditions.id')),
    db.Column('treatment_id', db.Integer, db.ForeignKey('treatment.id'))
)