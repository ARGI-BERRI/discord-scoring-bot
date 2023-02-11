FROM node:lts-slim as builder

WORKDIR /opt/builder

COPY package.json ./
RUN yarn install

COPY . .
RUN yarn build

FROM node:lts-slim as runner
WORKDIR /opt/runner

COPY --from=builder \
    /opt/builder/package.json \
    /opt/builder/yarn.lock    \
    ./

COPY --from=builder \
    /opt/builder/build ./build

ENV NODE_ENV production
RUN yarn install --frozen-lockfile --production && yarn cache clean

# Prisma setup
COPY .env ./
COPY prisma/ ./
RUN yarn prisma:generate

CMD [ "yarn", "migrateandstart" ]
