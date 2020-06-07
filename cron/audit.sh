#!/bin/bash
while ((1)) ; do
    php /var/www/html/infinityaion/cron/audit.sh
    sleep 30m
done