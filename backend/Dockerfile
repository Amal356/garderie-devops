# Image officielle Node.js 22, version Alpine (légère)
FROM node:22-alpine
ENV NODE_ENV=production
WORKDIR /app
# Dépendances d'abord : cette couche reste en cache si seul le code change
COPY package.json package-lock.json ./
RUN npm ci --omit=dev
# Puis le code de l'API
COPY src ./src
ENV PORT=4000
EXPOSE 4000
# Exécution sans les droits root
USER node
CMD ["node", "src/server.js"]
