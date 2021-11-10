#Run the app

Just use in terminal 
nodemon

if not installed, install.

Start mysql

1. start mysql service on linux
sudo service mysql start

2. access as super user
sudo mysql -u root -p

3. write the password


si sale este error
Error: Access denied for user 'root'@'localhost'

solución
ALTER USER 'root'@'localhost' IDENTIFIED WITH mysql_native_password BY 'password'
