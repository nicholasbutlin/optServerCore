// TODO: Reactify API Key...
// <template name="apiKey">
//   <div class="row">
//     <div class="col-xs-12 col-sm-6">
//       <h4 class="page-header">API Key</h4>
//       <!-- <p>To gain access to the API, use the following API Key. Make sure to keep it super safe! <strong>If you'd like to generate a new key, click the "refresh" icon on the field below</strong>.</p> -->
//       <label class="sr-only" for="apiKey">Your API Key</label>
//       <div class="input-group">
//         <input type="text" readonly class="form-control" id="apiKey" placeholder="API Key" value="{{apiKey}}">
//         <div class="input-group-addon regenerate-api-key"><i class="fa fa-refresh"></i></div>
//       </div>
//     </div>
//   </div> <!-- end .row -->
// </template>
// Template.apiKey.onCreated(function(){
//   this.subscribe( "APIKey" );
// });
//
// Template.apiKey.helpers({
//   apiKey: function() {
//     var apiKey = APIKeys.findOne();
//     if ( apiKey ) {
//       return apiKey.key;
//     }
//   }
// });
// //
// // Template.apiKey.events({
// //   'click .regenerate-api-key': function( ){
// //      var userId              = Meteor.userId(),
// //          confirmRegeneration = confirm( "Are you sure? This will invalidate your current key!" );
// //
// //      if ( confirmRegeneration ) {
// //        Meteor.call( "regenerateApiKey", userId, function( error, response ) {
// //          if ( error ) {
// //            Bert.alert( error.reason, "danger", 'growl-top-right' );
// //          } else {
// //            Bert.alert( "All done! You have a new API key.", "success", 'growl-top-right' );
// //          }
// //        });
// //      }
// //   }
// // });
