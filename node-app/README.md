# App Demo

## Package App
fpm -s dir -a all -t deb -n "node-app" -v 1.0 ./

## Build Image
docker build -rm=true -t arobson/node-app:1.0 ./

## Create Container
docker run -d -p 0.0.0.0:8080:8080 arobson/node-app:1.0