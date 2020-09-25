FROM centos:7
RUN yum -y install curl
RUN curl -s https://packagecloud.io/install/repositories/akopytov/sysbench/script.rpm.sh | sudo bash
RUN yum -y install sysbench && yum clean all