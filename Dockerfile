# Imagem base leve do Node.js
FROM node:18-alpine

# Diretória de trabalho dentro do contêiner
WORKDIR /app

# Copiar ficheiros de dependências e instalar
COPY package*.json ./
RUN npm install

# Copiar o restante código da aplicação
COPY . .

# Expor a porta que a aplicação utiliza
EXPOSE 3000

# Comando de inicialização
CMD ["node", "src/app.js"]
