#!/bin/bash

sudo rm -rf /var/www/matfix.nu
cd /home/pi/matfix/matfix_frontend/
sudo rm -rf dist
npm run build
sudo cp -r dist/ /var/www/
sudo mv /var/www/dist/ /var/www/matfix.nu/
sudo nginx -s reload


