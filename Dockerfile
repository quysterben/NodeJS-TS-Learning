FROM node:18

LABEL author.name="ben" \
      author.email="quysterben@gmail.com"

RUN apt-get update && \
  apt-get install -y nodejs nano vim

WORKDIR /app

COPY package.json yarn.lock ./

RUN yarn --frozen-lockfile

COPY . .

RUN yarn build

CMD ["yarn", "start"]