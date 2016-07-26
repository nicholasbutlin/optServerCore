TODO: Deploy: write deploy script to do rest or ui

When deploying as rest api: don't import the client side modules
- move client into private

  meteor build ~/deploy/api --architecture os.linux.x86_64

  scp /home/nickos/deploy/api/app.tar.gz ubunut@52.30.77.18:~/dev/deploy/api/optServerCore.tar.gz
-
When deploying as ui: don't import the rest modules
- move client back
- comment imports/startup/server/index.js import './rest';

  meteor build ~/deploy/client --architecture os.linux.x86_64

  scp /home/nickos/deploy/client/app.tar.gz ubunut@52.30.77.18:~/dev/deploy/console/optServerCore.tar.gz

post build
- uncomment imports/startup/server/index.js import './rest';
