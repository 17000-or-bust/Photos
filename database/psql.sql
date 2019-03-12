DROP DATABASE IF EXISTS restaurant;
DROP TABLE IF EXISTS photos;

CREATE DATABASE restaurant;

CREATE TABLE photos (
  id SERIAL PRIMARY KEY,
  restaurant_id INT,
  image_url varchar(100),
  caption varchar(200),
  username varchar(50),
  hover_data varchar(200),
  date_posted DATE
);



