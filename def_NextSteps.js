/**
 * @class nextSteps_new
 * @parent Installed_Modules
 * 
 * ###nextSteps_new Module
 * 
 * This module <insert short description>
 * 
 */
//required to separate comment blocks for documentjs, please do not remove
var __filler;

/**
 * @class nextSteps_new.server
 * @parent nextSteps_new
 * 
 * ##nextSteps_new server
 * 
 * nextSteps_new server side 
 */
//required to separate comment blocks for documentjs, please do not remove
var __filler;

/**
 * @class nextSteps_new.server.api
 * @parent nextSteps_new.server
 * 
 * ##nextSteps_new server side apis
 * 
 * nextSteps_new server side apis
 */
//required to separate comment blocks for documentjs, please do not remove
var __filler;

/**
 * @class nextSteps_new.server.models
 * @parent nextSteps_new.server
 * 
 * ##nextSteps_new server side models
 * 
 * nextSteps_new server side models
 */
//required to separate comment blocks for documentjs, please do not remove
var __filler;

/**
 * @class nextSteps_new.server.module_apis
 * @parent nextSteps_new.server
 * 
 * ##nextSteps_new server side module apis
 * 
 * nextSteps_new server side module apis
 */
//required to separate comment blocks for documentjs, please do not remove
var __filler;

/**
 * @class nextSteps_new.client
 * @parent nextSteps_new
 * 
 * ##nextSteps_new client
 * 
 * nextSteps_new client side
 */
//required to separate comment blocks for documentjs, please do not remove
var __filler;

/**
 * @class nextSteps_new.client.pages
 * @parent nextSteps_new.client
 * 
 * ##nextSteps_new client side pages
 * 
 * nextSteps_new client side pages
 */
//required to separate comment blocks for documentjs, please do not remove
var __filler;

/**
 * @class nextSteps_new.titanium
 * @parent nextSteps_new
 * 
 * ##nextSteps_new titanium
 * 
 * nextSteps_new titanium
 */
//required to separate comment blocks for documentjs, please do not remove
var __filler;
 



var log = AD.Util.Log;
var $ = AD.jQuery;


////
//// NextSteps_new Module
////

var nextSteps_newModule = new AD.App.Module({
    nameModule: 'nextSteps_new',
    pathModule: __dirname,
/*
    // change the default paths like this:
    pathPages:    __dirname + '/web/pages',
    pathServerModels:  __dirname + '/models/node',
    pathClientModels:  __dirname + '/models/client',
    pathModuleScripts: __dirname + '/data/scripts',
    pathModuleCSS:     __dirname + '/data/css'
*/
/*
    // If you want to override the default notification hub settings:
    hub: {
          wildcard: true, // should the event emitter use wildcards.
          delimiter: '.', // the delimiter used to segment namespaces.
          maxListeners: 0, // the max number of listeners that can be assigned to an event (defautl:10;  0:unlimited).
    }
*/
    
    });
    
nextSteps_newModule.createRoutes();
var mI = nextSteps_newModule.initialize();  // mI == Module Initialization Done
$.when(mI).then(function(){
    // do any post initialization setup instructions here.
    // by the time you get here, all module resources are loaded.
});


module.exports = nextSteps_newModule;
exports.version = 1;  // v1 of our AD.App.Module Definition


var app = nextSteps_newModule.app;


/*
////
//// setup any NextSteps_new specific routes here
////

### If you want to override the default Route Handling then
### remove nextSteps_newModule.createRoutes(); and uncomment this section.  
### Make your changes here:

////
//// On any /nextSteps_new/* route, we make sure our Client Models are loaded:
//// 
app.get('/init/nextSteps_new/*', function(req, res, next) {

        log(req,' init/' + nextSteps_newModule.nameModule + '/*  : adding model dependencies.');

        AD.App.Page.addJavascripts( req, nextSteps_newModule.moduleScripts );
        AD.App.Page.addJavascripts( req, nextSteps_newModule.listModelPaths );

        next();
});





////
//// Return any Module defined resources
////
app.get('/nextSteps_new/data/:resourcePath', function(req, res, next) {

    log(req,' /' + nextSteps_newModule.nameModule + '/data/ being processed.');

    var parts = req.url.split('/'+nextSteps_newModule.nameModule+'/');
    var urlParts = parts[1].split('?');
    var path = urlParts[0]; // without any additional params

    res.sendfile( nextSteps_newModule.pathModule+'/'+path);
});







### If you want to change/prevent any of the automatic directory 
### scanning, then remove the nextSteps_newModule.initialize()  and 
### uncomment these lines :




//// 
//// Scan any sub interfaces to gather their routes
////

nextSteps_newModule.loadInterfaces();



////
//// The Model objects 
////
//// Load the Server side model objects to handle incoming model actions.
////

nextSteps_newModule.loadModels();
exports.listModels=nextSteps_newModule.listModels;


////
//// 
//// Load the shared scripts that need to be used on each interface.

nextSteps_newModule.loadModuleScripts();



//// Load the services associated with this Module.
nextSteps_newModule.loadServices();



//// Load any shared CSS files defined by this Module.
nextSteps_newModule.loadModuleCSS();

*/