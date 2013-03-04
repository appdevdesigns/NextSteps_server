// Replace These Tags:
//  nextSteps  : <-- the name of this module (lowercase)
//  NextSteps  : <-- the name of this module (uppercase)
 
var log = AD.Util.Log;
var $ = AD.jQuery;


////
//// NextSteps Module
////

var nextStepsModule = new AD.App.Module({
    nameModule: 'nextSteps',
    pathModule: __dirname,
/*
    // change the default paths like this:
    pathInterfaces:    __dirname + '/interfaces',
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
    
nextStepsModule.createRoutes();
var mI = nextStepsModule.initialize();  // mI == Module Initialization Done
$.when(mI).then(function(){
    // do any post initialization setup instructions here.
    // by the time you get here, all module resources are loaded.
});


module.exports = nextStepsModule;
exports.version = 1;  // v1 of our AD.App.Module Definition


var app = nextStepsModule.app;


/*
////
//// setup any NextSteps specific routes here
////

### If you want to override the default Route Handling then
### remove nextStepsModule.createRoutes(); and uncomment this section.  
### Make your changes here:

////
//// On any /nextSteps/* route, we make sure our Client Models are loaded:
//// 
app.get('/init/nextSteps/*', function(req, res, next) {

        log(req,' init/' + nextStepsModule.nameModule + '/*  : adding model dependencies.');

        AD.App.Page.addJavascripts( req, nextStepsModule.moduleScripts );
        AD.App.Page.addJavascripts( req, nextStepsModule.listModelPaths );

        next();
});





////
//// Return any Module defined resources
////
app.get('/nextSteps/data/:resourcePath', function(req, res, next) {

    log(req,' /' + nextStepsModule.nameModule + '/data/ being processed.');

    var parts = req.url.split('/'+nextStepsModule.nameModule+'/');
    var urlParts = parts[1].split('?');
    var path = urlParts[0]; // without any additional params

    res.sendfile( nextStepsModule.pathModule+'/'+path);
});







### If you want to change/prevent any of the automatic directory 
### scanning, then remove the nextStepsModule.initialize()  and 
### uncomment these lines :




//// 
//// Scan any sub interfaces to gather their routes
////

nextStepsModule.loadInterfaces();



////
//// The Model objects 
////
//// Load the Server side model objects to handle incoming model actions.
////

nextStepsModule.loadModels();
exports.listModels=nextStepsModule.listModels;


////
//// 
//// Load the shared scripts that need to be used on each interface.

nextStepsModule.loadModuleScripts();



//// Load the services associated with this Module.
nextStepsModule.loadServices();



//// Load any shared CSS files defined by this Module.
nextStepsModule.loadModuleCSS();

*/