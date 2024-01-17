from random import randint, choice as rc, sample
from models import User, Chat, HealthConditions, Treatment, Deficiency
import time
#Remote library imports
from faker import Faker
from config import bcrypt

# Local imports

from app import app
from models import db

if __name__ == '__main__':
    fake = Faker()
    with app.app_context():
        

        User.query.delete()
        print("Start seed....")
        users = []
        for i in range(10):
            users.append(User(email=fake.email(),password_hash=bcrypt.generate_password_hash("password").decode('utf-8')))
            db.session.add_all(users)
        db.session.commit()
    

        Deficiency.query.delete()
        print("Start seed....")
        deficiencies = []
        for i in range(10):
            deficiencies.append(Deficiency(name=fake.text()))
            db.session.add_all(deficiencies)
        db.session.commit()
    

        HealthConditions.query.delete()
        print("Start seed....")
        healthConditons = []
        for health in HealthConditions.query.all():
            healthConditons.append(HealthConditions(name=health.name))
        
            db.session.add_all(healthConditons)
        db.session.commit()


        Treatment.query.delete()
        print("Start seed....")
        treatments = []
        for i in range(10):
            treatments.append(Treatment(benefits=fake.text(), condition=fake.text()))
            db.session.add_all(treatments)
        db.session.commit()

        
        print("Done!")


