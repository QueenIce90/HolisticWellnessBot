from flask_sqlalchemy import SQLAlchemy
from sqlalchemy import MetaData
from sqlalchemy.orm import validates
from sqlalchemy_serializer import SerializerMixin
from config import db

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
    # chat = db.relationship('Chat', back_populates='user')

    # SERIALIZER #
    serialize_rules = ("-password_hash",)


# --- Health Conditions ---- #
class HealthConditions(db.Model, SerializerMixin):
    # TABLE #
    __tablename__ = 'healthconditions'

    # COLUMNS #
    id = db.Column(db.Integer, primary_key=True)
    name = db.Column(db.String(255), nullable=False)

    # RELATIONSHIP #
    # chats = db.relationship('Chat', secondary='chat_healthconditions_association', back_populates = 'healthconditions')
    deficiencies = db.relationship('Deficiency', secondary = 'healthcondition_deficiency_treatment_association', back_populates = 'healthconditions')
    treatments = db.relationship('Treatment', secondary = 'healthcondition_deficiency_treatment_association', back_populates = 'healthconditions', overlaps="deficiencies")

    # SERIALIZER #
    serialize_rules = ("-id",)

class Deficiency(db.Model, SerializerMixin):
    # TABLE #
    __tablename__ = 'deficiencies'

    # COLUMNS #
    id = db.Column(db.Integer, primary_key=True)
    name = db.Column(db.String(255), nullable=False)
    vitamins = db.Column(db.String, nullable=False)
    nutrients = db.Column(db.String, nullable=False)


    # RELATIONSHIP #
    healthconditions = db.relationship('HealthConditions', secondary = 'healthcondition_deficiency_treatment_association', back_populates = 'deficiencies')
    treatments = db.relationship('Treatment', secondary = 'healthcondition_deficiency_treatment_association', back_populates = 'deficiencies', overlaps="healthconditions, treatments")
    
    serialize_rules = ("-id",)

class Treatment(db.Model, SerializerMixin):
    # TABLE #
    __tablename__ = 'treatment'

    # COLUMNS #
    id = db.Column(db.Integer, primary_key=True)
    benefits = db.Column(db.String, nullable=False)
    condition = db.Column(db.String, nullable=False)   

    # RELATIONSHIP #
    
    healthconditions = db.relationship('HealthConditions', secondary = 'healthcondition_deficiency_treatment_association', back_populates = 'treatments')
    deficiencies = db.relationship('Deficiency', secondary = 'healthcondition_deficiency_treatment_association', back_populates = 'treatments', overlaps="deficiencies,healthconditions")    

    # SERIALIZER #
    serialize_rules = ("-id",)


#------ Association Table for healthconditions, deficiencies, treatment ------#

healthcondition_deficiency_treatment_association = db.Table(

    'healthcondition_deficiency_treatment_association',
    db.Column('healthcondition_id', db.Integer, db.ForeignKey('healthconditions.id')),
    db.Column('deficiencies_id', db.Integer, db.ForeignKey('deficiencies.id')),
    db.Column('treatment_id', db.Integer, db.ForeignKey('treatment.id'))
)


