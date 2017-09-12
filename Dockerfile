FROM  mhart/alpine-node-auto:latest
COPY . /var/www
RUN cd /var/www; npm i yarn -g; yarn install; ls;
WORKDIR /var/www
EXPOSE 8005
ENTRYPOINT yarn run bootstrap && yarn run start