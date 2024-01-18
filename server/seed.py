from random import choice as rc
from faker import Faker
from config import bcrypt
from app import app
from models import db, HealthConditions, Treatment, Deficiency

def seed_data():
    with app.app_context():
        fake = Faker()

        # Create instances of your models with desired data
        health_condition_1 = HealthConditions(name='Condition 1')
        health_condition_2 = HealthConditions(name='Condition 2')
        health_condition_3 = HealthConditions(name='Condition 3')

        deficiency_1 = Deficiency(name='Deficiency 1', vitamins='Vitamin A', nutrients='Iron')
        deficiency_2 = Deficiency(name='Deficiency 2', vitamins='Vitamin C', nutrients='Calcium')
        deficiency_3 = Deficiency(name='Deficiency 3', vitamins='Vitamin D', nutrients='Vitamin E')

        treatment_1 = Treatment(benefits='Benefit 1', condition='Condition 1')
        treatment_2 = Treatment(benefits='Benefit 2', condition='Condition 2')
        treatment_3 = Treatment(benefits='Benefit 3', condition='Condition 3')

        # Check if the data already exists before adding it
        if not HealthConditions.query.filter_by(name='Condition 1').first():
            db.session.add(health_condition_1)

        if not HealthConditions.query.filter_by(name='Condition 2').first():
            db.session.add(health_condition_2)

        if not HealthConditions.query.filter_by(name='Condition 3').first():
            db.session.add(health_condition_3)
    

        if not Deficiency.query.filter_by(name='Deficiency 1').first():
            db.session.add(deficiency_1)

        if not Deficiency.query.filter_by(name='Deficiency 2').first():
            db.session.add(deficiency_2)

        if not Deficiency.query.filter_by(name='Deficiency 3').first():
            db.session.add(deficiency_3) 

        if not Treatment.query.filter_by(benefits='Benefit 1').first():
            db.session.add(treatment_1)

        if not Treatment.query.filter_by(benefits='Benefit 2').first():
            db.session.add(treatment_2)

        if not Treatment.query.filter_by(benefits='Benefit 3').first():
            db.session.add(treatment_3)

        # Commit the changes to persist the data in the database
        db.session.commit()

if __name__ == '__main__':
    # Call the seed_data function when running the script
    seed_data()
