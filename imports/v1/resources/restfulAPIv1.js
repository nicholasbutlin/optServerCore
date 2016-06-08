// Router.onBeforeAction(function(req, res, next) {
//   // in here next() is equivalent to this.next();
//   // TODO: add auth
//   next()
// }, {where: 'server'});
//
// Router.route('/api/v1/asset', {where: 'server'})
//   .get(function() {
//     var req = this.request;
//     var res = this.response;
//     var output = JSON.stringify(Assets.find().fetch());
//     res.end(`${output}`);
//   })
//
// Router.route('/api/v1/asset/:id', {where: 'server'})
//   .get(function() {
//     var req = this.request;
//     var res = this.response;
//     var output = JSON.stringify({id: this.params.id});
//     res.end(`${output}`);
//   })
//   .post(function(){
//   })
//   .put(function(){
//   })
//   .delete(function(){
//   })
