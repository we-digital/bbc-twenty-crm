FROM node:24-alpine AS deps

WORKDIR /app

COPY package.json yarn.lock .yarnrc.yml tsconfig.base.json nx.json ./
COPY .yarn ./.yarn

RUN yarn install --immutable

FROM deps AS build

COPY packages ./packages

RUN yarn nx build twenty-widgets

FROM node:24-alpine AS runner

RUN npm install -g serve

WORKDIR /app

COPY --from=build /app/packages/twenty-widgets/build ./build

EXPOSE 4175

CMD ["serve", "-s", "build", "-l", "4175"]
