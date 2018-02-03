//register babel to transpile before our tests run
require ('babel-register')();

//disable webpack features that babel doe snot understand
require.extensions['.css']=function(){};


