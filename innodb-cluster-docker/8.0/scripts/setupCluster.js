var dbPass = "root"
var clusterName = "devCluster"

try {
  print('Setting up InnoDB cluster...\n');
  shell.connect('root@mysql-server-1:3306', dbPass)
  var cluster = dba.getCluster(clusterName);
  if(cluster == null){
    cluster = dba.createCluster(clusterName,  {multiPrimary: true, force: true});
  }
  print('Adding instances to the cluster.');
  dba.configureInstance({user: "root", host: "mysql-server-2", password: dbPass});
  cluster.addInstance({user: "root", host: "mysql-server-2", password: dbPass}, {recoveryMethod: "incremental"})
  print('.');
  dba.configureInstance({user: "root", host: "mysql-server-3", password: dbPass});
  cluster.addInstance({user: "root", host: "mysql-server-3", password: dbPass}, {recoveryMethod: "incremental"})
  print('.\nInstances successfully added to the cluster.');
  print('\nInnoDB cluster deployed successfully.\n');
} catch(e) {
  print('\nThe InnoDB cluster could not be created.\n\nError: ' + e.message + '\n');
}
