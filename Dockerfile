# 1. The FROM command tells Docker to use the node:20.16.0-alpine image as the base image for the Dockerfile.
# 2. WORKDIR /app tells Docker to set the working directory for the container to /app.
# 3. ADD package*.json ./ tells Docker to copy the package.json file into the container.
# 4. RUN npm install tells Docker to run npm install inside the container.
# 5. ADD index.js ./ tells Docker to copy the index.js file into the container.
# 6. EXPOSE 8080 tells Docker to expose the port 8080 on the container.
# 7. CMD [ "node", "index.js"] tells Docker to run node index.js inside the container.
ARG NODE_VERSION=20.16.0

FROM node:${NODE_VERSION}-alpine

WORKDIR /app

COPY package*.json ./

RUN npm install

COPY . ./

# Expose the port that the application listens on.
EXPOSE 5050

# Run the application.
CMD [ "node", "app.js" ]
