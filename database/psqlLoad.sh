#!/bin/bash
echo -e "\n# -------------------------------------"
echo "START Postgres Output"

 /Library/PostgreSQL/11/bin/psql -d restaurant < /Volumes/COWIE/photos/database/psql.sql

echo "END Postgres Output"

startTime=$(date +'%T')
SECONDS=0

echo "Starting at: $startTime"
echo "START Postgres Output"

 /Library/PostgreSQL/11/bin/psql -d restaurant < /Volumes/COWIE/photos/database/loadPsql.sql

endTime=$(date +'%T')
echo "Finished at: $endTime"

totalTime=$SECONDS
echo -e "\nSuccess. Total time: $(($totalTime)) seconds\n"
echo "FINISHED"
