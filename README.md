# Meu Cardapio<br>

Project developed as a total evaluation of the Mobile Programming subject

## Requirements

- Nodejs
- NPM
- React Native
- Expo
- Docker

## Installation

Clone the project

        gitclone https://github.com/lipe474/Meu_Cardapio.git

Install requirements in the **backend** folder and **frontend** folder

        npm install

Create a file ".env" by utilizing the ".env.example" as example

Create the database only on the **backend** to test the application locally.
Note: The backend of the application will be used in docker

        npx prisma migrate dev

## Run project

Use the command `npm start` in the **backend** folder to run locally

Or

Use the commands in the **backend** folder to run in docker

        docker-compose up -d
        docker exec -it backend /bin/sh
        npx prisma migrate dev

Use the `expo start` command in the **frontend** folder and after the command, use your mobile device with the ***Expo Go*** app or on a computer the ***Android Studio*** app to connect in the application, or, use the ***W*** key in the terminal to start the project in a web browser


## Contributors

[![felipe-rocha](https://img.shields.io/badge/felipe--rocha-github-black?colorA=808080&colorB=000000&style=for-the-badge)](https://www.github.com/lipe474)

## License

License:<a href="http://www.gnu.org/licenses/gpl.html" target="blank"> GNU GPL v3</a><br>
Content License: <a href="https://creativecommons.org/licenses/by/3.0/" target = "blank">Creative Commons 3.0 BY</a>
