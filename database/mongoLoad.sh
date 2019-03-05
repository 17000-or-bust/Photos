#!/bin/bash

echo -e "\n# -------------------------------------"
echo "START Mongo Output"

startTime=$(date +'%T')
SECONDS=0
echo "Starting at: $startTime"


mongo restaurant --eval "printjson(db.dropDatabase())"

mongoimport -d restaurant -c photos --type csv --file /Volumes/COWIE/photos/database/photos.csv --fields id,restaurant_id,image_url,caption,username,hover_data,date_posted


endTime=$(date +'%T')
echo "Finished at: $endTime"
totalTime=$SECONDS
echo -e "\nSuccess. Total time: $(($totalTime)) seconds\n"
echo "FINISHED"