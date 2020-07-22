# Docker 101

## Install Docker

check running

`sudo docker run hello-world`

see whats running

`sudo docker ps`

nothing running

`sudo docker ps -a`

start container once stopped. Use -a to attach and get STDOUT

`sudo docker start <containerid or name> -a`


## Run nginx

options

- detatched `-d`
- interactive (attached) `-it`
- with name `--name`

`sudo docker run -d -p 8080:80 --name bob nginx`

attach to process

`sudo docker attach <containerid or name>`

ctrl-c to get out, but this stops the process

restart nginx container

`sudo docker start <containerid or name>`

tail logs

`sudo docker logs -f <containerid or name>`

## Run terminal on container

we can execute anything on container even bash

`sudo docker exec -it <containerid or name> /bin/bash`

## Mapping volumne

```bash
sudo docker run -d -p 8080:80 -v /Users/matt/development/docker-101:/usr/share/nginx/html nginx
```

## Building Images

Build basic image copying in `index.html`

`sudo docker build -t test .`

now run it

`sudo docker run -d -p 8181:80 test`

Building multi-stage image for react web site

```bash
cd src/hello-docker
sudo docker build -t wemadeweb .
```

and run it

`sudo docker run -p 8282:80 --name madeweb wemadeweb`

## Upload to repo

Go to https://hub.docker.com/repository/create and create a repo

Name and tag image correctly for repository. Use `docker images` to get name ang tag

```bash
sudo docker tag wemadeweb:latest mattlethargic/wemadeweb:test
sudo docker push mattlethargic/wemadeweb:test
```

Don't forget to `sudo docker login`!
