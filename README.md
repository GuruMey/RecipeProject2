# RecipeProject

Recipe project is ...

## See a live example:

Navigate to https://recipe-project-frontend.herokuapp.com/

## Architecture

The front is a React project. It is under the folder ```./FRONT```.

The server is an Express project. It is under the folder ```./BACK```.

## How to start

Set environments in the server:
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
todo
```

Start the front:
```
cd FRONT
npm install
npm run dev
```

Then, open a browser and go to http://localhost:3000
