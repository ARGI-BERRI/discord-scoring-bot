FROM node:lts-slim as builder
ENV NODE_ENV production
WORKDIR /opt/builder

COPY package.json ./
RUN yarn install --production

COPY . .
RUN yarn build

FROM node:lts-slim as runner
ENV NODE_ENV production
WORKDIR /opt/runner

COPY --from=builder \
    /opt/builder/package.json \
    /opt/builder/yarn.lock    \
    ./

COPY --from=builder \
    /opt/builder/build ./build

RUN yarn install --frozen-lockfile --production && yarn cache clean

# Prisma setup
COPY prisma/ ./
RUN yarn prisma:generate

COPY .env ./

CMD [ "yarn", "migrateandstart" ]
