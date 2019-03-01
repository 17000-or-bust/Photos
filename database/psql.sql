DROP DATABASE IF EXISTS restaurant
DROP TABLE IF EXISTS photos

CREATE DATABASE restaurant

CREATE TABLE photos (
  id SERIAL PRIMARY KEY,
  restaurant_id integer NOT NULL,
  image_url VARCHAR (50) NOT NULL,
  caption VARCHAR (50) NOT NULL,
  username VARCHAR (50) NOT NULL,
  date_posted DATE,
  hover_data VARCHAR (50) NOT NULL,
);
