FROM node:18.16.0-slim

ENV PATH="/opt/sample-integration/bin:${PATH}"

RUN apt-get update && \
    apt-get install -yq openssh-client git curl && \
    apt-get install -y --no-install-recommends chromium

COPY ./entrypoint.sh "/opt/sample-integration/entrypoint.sh"
COPY ./bin "/opt/sample-integration/bin"
COPY ./shared "/opt/sample-integration/shared"

ENTRYPOINT ["/opt/sample-integration/entrypoint.sh"]
