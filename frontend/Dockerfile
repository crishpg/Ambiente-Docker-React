FROM node:18-alpine
WORKDIR /app

# Instala as dependências usando os arquivos que estão na sua pasta
COPY package*.json ./
RUN npm install

# COPIA o seu código editado (o App.js com os cachorros) para o container
COPY . .

EXPOSE 3000
CMD ["npm", "start"]