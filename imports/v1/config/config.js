// API thanks to themeteorchef
//
// API = {
//   authentication: function( apiKey ) {
//     var getUser = APIKeys.findOne( { "key": apiKey }, { fields: { "owner": 1 } } );
//     if ( getUser ) {
//       return getUser.owner;
//     } else {
//       return false;
//     }
//   },
//   connection: function( request ) {
//     var getRequestContents = API.utility.getRequestContents( request ),
//         apiKey             = getRequestContents.api_key,
//         validUser          = API.authentication( apiKey );
//
//     if ( validUser ) {
//       delete getRequestContents.api_key;
//       return { owner: validUser, data: getRequestContents };
//     } else {
//       return { error: 401, message: "Invalid API key." };
//     }
//   },
//   handleRequest: function( context, resource, method ) {
//     var connection = API.connection( context.request );
//     if ( !connection.error ) {
//       API.methods[ resource.name ][ method ]( context, connection, resource );
//     } else {
//       API.utility.response( context, 401, connection );
//     }
//   },
//   methods: {
//     metrics: {
//       GET: function( context, connection, resource) {
//         var hasQuery = API.utility.hasData( connection.data );
//         if ( hasQuery ) {
//           // connection.data.owner = connection.owner;
//           var getMetrics = Metrics.find( connection.data, {sort:{$natural: -1}, limit: 5} ).fetch();
//           if ( getMetrics.length > 0 ) {
//             API.utility.response( context, 200, getMetrics );
//           } else {
//             API.utility.response( context, 404, { error: 404, message: "No records found." } );
//           }
//         } else {
//           var getMetrics = Metrics.find( {}, {sort:{$natural: -1}, limit: 5} ).fetch();
//           API.utility.response( context, 200, getMetrics );
//         }
//       },
//       POST: function( context, connection, resource) {
//         var hasData   = API.utility.hasData( connection.data ),
//             validData = API.utility.validate( connection.data, MetricsSchema);
//
//         if ( hasData && validData ) {
//           connection.data.owner = connection.owner;
//           var metric = Metrics.insert( connection.data );
//           API.utility.response( context, 200, { "_id": metric } );
//         } else {
//           API.utility.response( context, 403, { error: 403, message: "POST malformed" } );
//         }
//       },
//       // PUT: function( context, connection ) {},
//       // DELETE: function( context, connection ) {}
//     }
//   },
//   resources: {},
//   utility: {
//     getRequestContents: function( request ) {
//       switch( request.method ) {
//         case "GET":
//           return request.query;
//         case "POST":
//         case "PUT":
//         case "DELETE":
//           return request.body;
//       }
//     },
//     hasData: function( data ) {
//       return Object.keys( data ).length > 0 ? true : false;
//     },
//     response: function( context, statusCode, data ) {
//       context.response.setHeader( 'Content-Type', 'application/json' );
//       context.response.statusCode = statusCode;
//       context.response.end( JSON.stringify( data ));
//     },
//     validate: function( data, pattern ) {
//       return Match.test( data, pattern );
//     }
//   }
// };
