FROM node:lts as base

ENV NODE_ENV production

FROM base as deps

WORKDIR /app

ADD package.json ./
ADD yarn.lock ./

RUN yarn install --production=false

FROM base as production-deps

WORKDIR /app

ADD package.json ./
ADD yarn.lock ./

RUN yarn install

FROM base as build

WORKDIR /app

COPY --from=deps /app/node_modules /app/node_modules

ADD . .

RUN yarn build

FROM base

WORKDIR /app

COPY --from=production-deps /app/node_modules /app/node_modules

COPY --from=build /app/build /app/build
COPY --from=build /app/public /app/public
COPY --from=build /app/package.json /app/package.json

ENTRYPOINT [ "yarn", "start" ]
