module.exports = function (source, map) {  
  this.callback(null, 'module.exports = function(Component) {'
		+'if (Component.options.__i18n === undefined) Component.options.__i18n = [];'
		+'Component.options.__i18n.push('
		  + JSON.stringify(source)
                + ');};', map);
};
