////
//// Group
////
//// This model is the interface to the nextsteps_group table.


(function () {
    // Pull AppDev from the global scope on NodeJS and browser and load the AppDev CommonJS module on Titanium
    var AD = (typeof AppDev === "undefined" ? (typeof global === "undefined" ? require('AppDev') : global.AD) : AppDev);
    
    // On Titanium and NodeJS, the full model definition is needed
    var extendedDefinition = typeof Titanium !== 'undefined' || typeof process !== 'undefined';
    
    var attr = {
        // Shared model attributes
        _adModule:'nextSteps',
        _adModel:'Group',
        id:'group_id',
        labelKey:'group_name',
        _isMultilingual:false,
        //connectionType:'server', // optional field
        cache:true,

        attributes: {
            group_filter: 'JSON'
        },
        
        convert: {
            JSON: function(raw) {
                return (typeof raw === 'string') ? JSON.parse(raw) : raw;
            }
        },
        serialize: {
            JSON: function(val, type) {
                return (typeof val === 'object') ? JSON.stringify(val) : val;
            } 
        }
    };
    
    if (extendedDefinition) {
        // Extended model attributes
        AD.jQuery.extend(attr, {
            type:'single',  // 'single' | 'multilingual'
            dbTable:'nextsteps_group',
            modelFields: {
                  group_id:"int(11) unsigned",
                  viewer_id:"int(11) unsigned",
                  group_name:"text",
                  group_filter:"text"

            },
            primaryKey:'group_id'
        });
    }
    
    
    var Model = AD.Model.extend("nextSteps.Group",
    attr,
    {
        // define instance methods here.
    });
    
    if (typeof module !== 'undefined' && typeof module.exports !== 'undefined') {
        // This is a CommonJS module, so return the model
        module.exports = Model;
    }
})();