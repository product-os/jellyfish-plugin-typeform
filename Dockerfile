# syntax=docker/dockerfile:1

# This file is auto-synced from product-os/jellyfish-config/sync/Dockerfile
# and should only be edited there!
FROM balena/open-balena-base:v11.2.0

WORKDIR /usr/src/jellyfish

COPY package.json package-lock.json ./
RUN --mount=type=secret,id=npmrc set -eux \
    && ln -s /run/secrets/npmrc ~/.npmrc \
    && npm ci && rm ~/.npmrc

COPY . ./

CMD /bin/bash -c "npx ci-task-runner run --config /usr/src/jellyfish/test/ci-tasks.yml"
