#!/bin/bash

sudo rm -rf /var/www/matfix.carllundin.se
cd /home/pi/matfix/matfix_frontend/
npm run build
sudo cp -r dist/ /var/www/
sudo mv /var/www/dist/ /var/www/matfix.carllundin.se/
sudo nginx -s reload


