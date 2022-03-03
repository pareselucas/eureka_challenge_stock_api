# Eureka challenge instructions
Crear un usuario admin usando la siguiente api: http://localhost:4000/api/auth/signup
con un body de la siguiente forma:
{
  "username": "admin",
  "email": "admin@gmail.com",
  "password": "admin",
  "roles": [
      "admin"
  ]
}

Para loguearse en el sistema utilizar la siguiente api: http://localhost:4000/api/auth/signin
con un body:
{
  "email": "admin@gmail.com",
  "password": "admin"
}

Para consumir la api de alpha utilizar la siguiente api: http://localhost:4000/api/stockMarket

El sistema tiene una validacion que no se pueden hacer mas de 100 peticiones en 15 minutos
Al sistema le agregue como un plus que ademas de que este logueado el usuario tenga permisos(rol de admin) para poder consumir la api