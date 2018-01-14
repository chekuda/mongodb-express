# MONGODB-EXPRESS

Simple example how to connect my express api with mongo db. I am using mongoose in order to create the Schemas to save/read/delete data in the database.

## Local database conection

First please install mongodb in your computer:
  - brew update
  - brew mongodb
  - Make sure you change the rights to write the db

Second run mongodb to make the connection succesful:
  - Open two terminals
  - In one terminal run `mongod --bind_ip 127.0.0.1`
  - In the other terminal run `mongo`

## Remote database conection

Set up the express server with the credentials provided by the remote database suplier