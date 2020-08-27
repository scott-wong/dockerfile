FROM alpine as builder
ARG SKYWALKING_VERSION=8.1.0
ARG BASE_URL=https://www.apache.org/dyn/closer.cgi/skywalking/${SKYWALKING_VERSION}/apache-skywalking-apm-es7-${SKYWALKING_VERSION}.tar.gz
#ARG BASE_URL=https://mirrors.tuna.tsinghua.edu.cn/apache/skywalking/${SKYWALKING_VERSION}/apache-skywalking-apm-es7-${SKYWALKING_VERSION}.tar.gz
RUN mkdir -p /usr/share/skywalking \
    && curl -fsSL -o /tmp/apache-skywalking-apm-es7.tar.gz BASE_URL \
    && tar -xzf /tmp/apache-skywalking-apm-es7.tar.gz /usr/share/skywalking \
    && cd /usr/share/skywalking/apache-skywalking-apm-bin-es7/agent \
    && mv optional-plugins/apm-spring-cloud-gateway-2.1.x-plugin-8.1.0.jar plugins/

FROM busybox:1.32
RUN mkdir -p /usr/share/skywalking-agent
COPY --from=builder /usr/share/skywalking/apache-skywalking-apm-bin-es7/agent /usr/share/skywalking-agent
WORKDIR /