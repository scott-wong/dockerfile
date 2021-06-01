## dolphinscheduler
采用mysql作为ds数据库，引入Oracle数据源支持。
## 部署
1. 准备mysql并创建dolphinscheduler数据库，初始化sql.  
https://dolphinscheduler.apache.org/zh-cn/docs/latest/user_doc/docker-deployment.html
2. 准备Docker Swarm集群并部署dolphinscheduler  
修改config.env.sh配置。  
'''
docker stack deploy -c docker-stack.yml
# 查看服务
docker service ls
'''