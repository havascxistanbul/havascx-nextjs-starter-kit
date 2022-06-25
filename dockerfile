# Linux + Node + Source + Project dependencies
FROM node:18.4.0 AS base
RUN apt-get update && apt-get install libssl-dev ca-certificates -y
WORKDIR /app
COPY . .
COPY package.json .
RUN yarn add --dev @swc/cli @swc/core
RUN yarn add next
RUN yarn add storybook
RUN yarn install --frozen-lockfile --force

# Linux + Node + Source + Project dependencies + build assets
FROM base AS build
ENV NODE_ENV=production
WORKDIR /build
COPY --from=base /app .
RUN yarn build

FROM base AS storybook-build
ENV NODE_ENV=production
WORKDIR /storybook-build
COPY --from=base /app .
RUN yarn build:storybook

# We keep some artifacts from build
FROM node:18.4.0 AS application
RUN apt-get update && apt-get install libssl-dev ca-certificates -y
ENV NODE_ENV=production
WORKDIR /app
COPY --from=build /build/package*.json .
COPY --from=build /build/.next ./.next
COPY --from=build /build/public ./public
RUN yarn add next
EXPOSE 3000
CMD yarn start
HEALTHCHECK CMD curl --fail http://localhost:3000

# for storybook
FROM node:18.4.0 AS storybook
RUN apt-get update && apt-get install libssl-dev ca-certificates -y
WORKDIR /storybook
COPY --from=storybook-build /storybook-build/package*.json .
COPY --from=storybook-build /storybook-build/.storybook ./.storybook
COPY --from=storybook-build /storybook-build/storybook-static ./storybook-static
EXPOSE 6006
CMD npx http-server ./storybook-static -p 6006
HEALTHCHECK CMD curl --fail http://localhost:6006