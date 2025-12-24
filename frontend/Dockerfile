FROM node:18-alpine

WORKDIR /app

# Copia apenas os arquivos de dependências primeiro (otimiza cache)
COPY package*.json ./
RUN npm install

# Copia o restante do código
COPY . .

EXPOSE 3000

CMD ["npm", "start"]