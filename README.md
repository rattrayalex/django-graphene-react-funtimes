# django-graphene-react-funtimes
Just playing around, comparing various technologies.


Backend:
```
<install python 3>
source env/bin/activate
pip install -r requirements.txt
cd backend
./manage.py makemigrations
./manage.py createsuperuser
./manage.py runserver
```

Frontend:
```
cd frontend
npm install
webpack -w
```

View:
React: localhost:8000/
Grqphiql: localhost:8000/graphiql
Rest Docs: localhost:8000/api
Admin: localhost:8000/admin

This backend/frontend split was not quite the right organizational structure.
