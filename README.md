TODO: write deploy script to do rest or ui

When deploying as rest api: don't import the client side modules
- move client into private
-
When deploying as ui: don't import the rest modules
- move client back
- comment imports/startup/server/index.js import './rest';

post build
- uncomment imports/startup/server/index.js import './rest';


TODO: availability override from console: technical availability, programme availability
TODO: detail view of asset
