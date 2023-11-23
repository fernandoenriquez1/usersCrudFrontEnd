# Usa una imagen de Node.js como base
FROM node:alpine

# Establece el directorio de trabajo en /app
WORKDIR /app

# Copia el archivo package.json y package-lock.json al directorio de trabajo
COPY package*.json ./

# Instala las dependencias del proyecto
RUN npm install

# Copia el contenido del directorio actual al directorio de trabajo
COPY . .

# Expone el puerto 3000 para la aplicación React
EXPOSE 3000

# Comando para ejecutar la aplicación cuando el contenedor se inicie
CMD ["npm", "start"]