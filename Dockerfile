FROM node:20-alpine

# Create the node_module and build folders
RUN mkdir -p /home/node/app/client/nodemodules
RUN mkdir -p /home/node/app/client/build
RUN mkdir -p /home/node/app/server/nodemodules

# Set the perms
RUN chown -R node:node /home/node/app

WORKDIR /home/node/app

# Copy the package jsons to use cache
COPY client/package*.json ./client
COPY server/package*.json ./server

# Download the node modules
USER node
RUN cd client && npm start
RUN cd server && npm start

# Copy and set perms
COPY --chown=node:node . .

# Build the client layer
USER node
RUN cd client && npm run build

EXPOSE 9000

CMD ["node", "server/app.mjs"]