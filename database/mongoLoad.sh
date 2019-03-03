#!/bin/bash

echo -e "\n# -------------------------------------"
echo "START Mongo Output"

mongo restaurant --eval "printjson(db.dropDatabase())"

mongoimport -d restaurant -c photos --type csv --file /Volumes/COWIE/photos/database/photos.csv

