# Tutorial Docker - Docker Compose

## Levantar el proyecto

1. Crear los archivos con las variables de entorno (Tomar como referencia los archivos de ejemplo **.env.development.example**):
  - `/todo-backend/.env.development`
  - `/todo-frontend/.env.development`

2. Ejecutar `docker-compose up` en la raíz del repositorio.


### Corregir error al montar volumen para MongoDB en Windows

En Windows puede presentarse un problema al montar el volumen para almacenar los datos de MongoDB como se detalla aquí: https://github.com/docker-library/mongo/issues/74

Una solución sencilla es crear un volumen independiente en el archivo `docker-compose.yml` y reemplazar `/mongodb/data` por el nombre del volumen que se creó antes.

Entonces debajo de la sección `networks` escribimos:

```yml
volumes:
  todo-mongodb-data:
```

y actualizamos `volumes` el servicio `mdb` de la siguiente manera:

```yml
mdb:
  image: mongo:3.4
  container_name: todo-mongodb
  restart: always
  volumes:
    - todo-mongodb-data:/data/db
  ports:
    - "27017:27017"
  networks:
    - todo-network
```
