CREATE DATABASE chikandaListings;

CREATE TABLE property (
    pid SERIAL PRIMARY KEY, 
    propertyName VARCHAR(80),
    descript VARCHAR(1000),
    lid INT REFERENCES landlord(lid) 
);

CREATE TABLE landlord(
    lid SERIAL PRIMARY KEY,
    fname VARCHAR(50),
    lname VARCHAR(50),
    email VARCHAR(255) NOT NULL UNIQUE,
    pass VARCHAR(255) NOT NULL,
    phoneno CHAR(10)
);

CREATE TABLE student(
    stid SERIAL PRIMARY KEY,
    fname VARCHAR(50),
    lname VARCHAR(50),
    email VARCHAR(255) NOT NULL UNIQUE,
    pass VARCHAR(255) NOT NULL,
    SEX BOOLEAN NOT NULL,
    phoneno CHAR(10)
);

