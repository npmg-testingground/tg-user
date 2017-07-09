FROM  mhart/alpine-node-auto:latest
COPY . /var/www
RUN cd /var/www; npm install; ls;
WORKDIR /var/www
EXPOSE 8005
ENTRYPOINT $START_COMMAND