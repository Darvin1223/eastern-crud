-- Creating the database
CREATE DATABASE CRUDCelulares;

--Using the database
USE CRUDCelulares;

-- Creating a table
CREATE TABLE producto(
    id INT(6) UNSIGNED AUTO_INCREMENT PRIMARY KEY,
    nombre VARCHAR(60) NOT NULL,
    estado VARCHAR(60) NOT NULL,
    precio VARCHAR(15)
);

-- To show all tables

SHOW TABLES;

--to describe the tables
DESCRIBE producto;