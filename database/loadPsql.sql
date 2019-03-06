\copy photos FROM '/Volumes/COWIE/photos/database/photos.csv' DELIMITERS ',' CSV;

CREATE INDEX restaurantIdIndex ON photos (restaurant_id);
