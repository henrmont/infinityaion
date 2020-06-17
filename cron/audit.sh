#!/bin/bash
while ((1)) ; do
    php /var/www/html/infinityaion/cron/player.php
    php /var/www/html/infinityaion/cron/membership.php
    sleep 2m
done
