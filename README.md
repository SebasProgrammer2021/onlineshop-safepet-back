# SAFEPET BACKEND

application that handles all endpoints of the proyect

## Firts steps after clonning

### Instalation on WINDOWS inside the proyect

1. Install node and npm [https://phoenixnap.com/kb/install-node-js-npm-on-windows]
2. Install dependencies: npm install
3. configure database credentials access

Just use in terminal: npm run start

Start mysql

1. start mysql service on linux
   sudo service mysql start

2. access as super user
   sudo mysql -u root -p

3. write the password

si sale este error

Error: Access denied for user 'root'@'localhost'

solución

-- en "password" coloca su contraseña de mysql

ALTER USER 'root'@'localhost' IDENTIFIED WITH mysql_native_password BY 'password';
