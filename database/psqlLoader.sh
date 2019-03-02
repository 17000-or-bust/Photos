
echo -e "\n# -------------------------------------"
echo "# ----- START PostgreSQL Output -----"
 /Library/PostgreSQL/11/bin/psql < /Volumes/COWIE/photos/database/psql.sql
echo "# ----- END PostgreSQL Output -----"
start=$(date +'%T')
SECONDS=0
echo "Starting at: $start"
echo "# ----- START PostgreSQL Output -----"
 /Library/PostgreSQL/11/bin/psql < /Volumes/COWIE/photos/database/loadPsql.sql
echo "# ----- END PostgreSQL Output -----"
end=$(date +'%T')
echo "Finished at: $end"
duration=$SECONDS
echo -e "\nSuccess. Elapsed time: $(($duration)) seconds\n"
echo "# FINISHED"
