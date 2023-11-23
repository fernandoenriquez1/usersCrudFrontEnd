# usersCrudFrontEnd
a reactJS app to manage an user list

Requisitos Previos
Para ejecutar esta aplicación, asegúrate de tener instalado:

Node.js: Entorno de ejecución para JavaScript.
NPM: Gestor de paquetes para JavaScript, generalmente viene con Node.js.
Docker: Plataforma para desarrollar, enviar y ejecutar aplicaciones en contenedores.

-Ejecución en Modo Desarrollo-
Sigue estos pasos para ejecutar la aplicación en tu entorno de desarrollo local:

1. Instalar Dependencias

Abre la consola y navega a la raíz del proyecto.
Ejecuta el comando: npm install.
Esto instalará todas las dependencias necesarias para tu proyecto.

2. Iniciar la Aplicación en Modo Desarrollo

En la misma consola, ejecuta: npm run start.
Este comando inicia tu aplicación en modo de desarrollo.

3. Acceder a la Aplicación

Abre tu navegador y visita: http://localhost:3000.
Ahora deberías poder ver y interactuar con tu aplicación en desarrollo.

-Ejecución con Docker-
Para ejecutar la aplicación usando Docker, realiza los siguientes pasos:

1. Construir la Imagen Docker

Asegúrate de estar en la raíz del proyecto en tu consola.
Ejecuta el comando: docker build -t userfrontend .
Esto construirá una imagen Docker de tu aplicación llamada userfrontend.
Ejecutar el Contenedor Docker

2. Una vez construida la imagen, inicia el contenedor con: docker run -p 3000:3000 -d userfrontend.
Este comando ejecutará tu aplicación en un contenedor Docker, mapeando el puerto 3000 del contenedor al puerto 3000 de tu máquina local.
Acceder a la Aplicación

3. Nuevamente, abre tu navegador y visita: http://localhost:3000.
Podrás ver tu aplicación ejecutándose desde el contenedor Docker.

