#!/usr/bin/bash

apt-get update
apt-get upgrade
apt-get install nodejs
apt-get install libwebp
apt-get install ffmpeg
apt-get install wget
apt-get install tesseract
wget -O ~/../usr/share/tessdata/ind.traineddata "https://github.com/tesseract-ocr/tessdata/blob/master/ind.traineddata?raw=true"
npm i imgbb-uploader
npm cache clean -f
npm install
npm i got

echo "[INFO] Tudo certo ate agora, use o comando npm start para iniciar o bot"
