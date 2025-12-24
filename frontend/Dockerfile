# Usar uma imagem leve do Node
FROM node:18-alpine

# Definir diretório de trabalho
WORKDIR /app

# Instalar o Create React App globalmente para o teste
RUN npm install -g create-react-app

# Criar um novo projeto chamado "my-app" na pasta atual
# Nota: Em produção, você já teria seu código e usaria 'npm install'
RUN npx create-react-app . --template typescript --extras

# Expor a porta padrão do React
EXPOSE 3000

# Comando para iniciar o servidor de desenvolvimento
CMD ["npm", "start"]
