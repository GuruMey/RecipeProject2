# RecipeProject

DelishDish is a website that allows any user to see vegan recipes, and create an account in order to add recipes to their favorites or create their own recipes.
A user recipe is visible to anyone, unless it has not been published.

## Architecture

The front is a React project. It is under the folder ```./FRONT```.

The server is an Express project. It is under the folder ```./BACK```.

## How to start

Set environments variables in the server:
```
copy ./BACK/.env.example to ./BACK.env and fill it with your own values
```

Start the server:
```
cd BACK
npm install
npm run start
```

Optionally, you can seed the DB:
```
npm run seed please-do-seed
```
/!\ Do not forget the please-do-seed flag, otherwise the DB will not be seeded

Start the front:
```
cd FRONT
npm install
npm run dev
```

Then, open a browser and go to http://localhost:3000

## How to test the app

Log in with the following credentials:

**Regular user:**

username: ```johnsmith```
password: ```password123```

**Admin user:**

username: ```sophiawilson```
password: ```password456```

