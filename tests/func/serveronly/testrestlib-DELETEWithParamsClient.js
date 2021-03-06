/*
 * This is a basic func test for a Serveronly application.
 */
YUI.add('serveronly-deletewithparamsclient-tests', function (Y) {
   
     var suite = new Y.Test.Suite("ServerOnly: DELETEWithParamsClient");

     suite.add(new Y.Test.Case({
         
	   "test DELETEWithParamsClient": function() {
	        var that = this;
	        Y.one('#p_deleteParam').simulate('click');
            that.wait(function(){
                Y.Assert.areEqual('(METHOD: DELETE)', Y.one('#output').get('innerHTML'));
            }, 2000);
       }
       
    }));
    
    Y.Test.Runner.add(suite);

}, '0.0.1', {requires: [
    'node', 'node-event-simulate', 'test'
]});
