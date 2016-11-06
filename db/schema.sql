
CREATE DATABASE burgers_db;
USE burgers_db;

CREATE TABLE burgers
(
id int NOT NULL AUTO_INCREMENT,
burger_name varchar(255) NOT NULL,
devoured boolean NOT NULL,
time_stamp current_timestamp NOT NULL
PRIMARY KEY (id)
);

INSERT INTO burgers (burger_name) VALUES ('Shaan wants to read minds.');
INSERT INTO burgers (burger_name) VALUES ('John wins the lottery.');
INSERT INTO burgers (burger_name) VALUES ('Kelly wishes for a room full of kittens.');
