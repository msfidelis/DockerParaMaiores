# A Orquestração V1D4 L0K4

##Subimos nossos containers na mão, e configuramos eles um a um com suas dependências. 

### Container do PHP7 + Apache
``` 
	maquina@local$ docker run -it ubuntu:16.04 /bin/bash
``` 

``` 
	root@843f37a8a22a:/# apt-get update ; apt-get upgrade -y
	root@843f37a8a22a:/# apt-get install apache2 php7.0 php7.0-intl php7.0-mysql libapache2-mod-php7.0 php7.0-fpm -y
	(CTRL + D)
``` 

```
    maquina@local$ docker ps
	maquina@local$ docker commit 843f37a8a22a superlogica/apache:1.0
	sha256:da644e0239bfa7d514315ffed7b76f113ea3d0e80a0e8f05740fa9435611f657
	maquina@local$ docker stop 843f37a8a22a
```

### Container do MySQL
``` 
	maquina@local$ docker run -it ubuntu:16.04 /bin/bash
``` 

``` 
	root@12321321321:/# apt-get update ; apt-get upgrade -y
	root@12321321321:/# apt-get install mysql-server -y
	(CTRL + D)
``` 

```
    maquina@local$ docker ps
	maquina@local$ docker commit 12321321321 superlogica/mysql
	maquina@local$ docker stop 12321321321
```

```
    maquina@local$ docker images
	maquina@local$ docker run -t superlogica/mysql --name mysql -p 3306:3306 
	maquina@local$ docker run -t superlogica/apache --name apache -p 80:80 --link mysql -v app:/var/www/html/
```

