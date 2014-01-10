# DOCKER-VERSION 0.7.2
FROM	ubuntu:12.04
RUN		apt-get install -y python-software-properties python
RUN		add-apt-repository ppa:chris-lea/node.js
RUN		echo "deb http://us.archive.ubuntu.com/ubuntu/ precise universe" >> /etc/apt/sources.list
RUN		apt-get update
RUN		apt-get install -y nodejs
RUN		mkdir -p /var/app/node-app
RUN		mkdir /packages
ADD		node-app_1.1_all.deb /packages/node-app_1.1.deb
RUN		dpkg -i --instdir=/var/app/node-app /packages/node-app_1.1.deb

EXPOSE 8080

WORKDIR /var/app/node-app/
ENTRYPOINT [ "/usr/bin/node" ]
CMD [ "index.js" ]