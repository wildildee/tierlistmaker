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

# Copy and set perms
COPY --chown=node:node . .

# Download the node modules
USER node
RUN cd client && npm install
RUN cd server && npm install

# Build the client layer
USER node
RUN cd client && npm run build

# Clean up our dependencies after building the client
RUN cd client && rm -rf node_modules

EXPOSE 9000

ENV PORT=9000
ENV URI=mongodb://192.168.2.221:27017

CMD ["node", "server/app.mjs"]