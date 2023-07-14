$.ajaxQueue = [];
var que = $.ajaxQueue;

$.ajaxSetup({
    beforeSend: function(){
        if (this.queue) {
            que.push(this);
        }
        else {
            return true;
        }
        if (que.length > 1) {
            return false;
        }
    },
    complete: function(){
        que.shift();
        var newReq = que[0];
        if (newReq) {
            // setup object creation should be automated 
            // and include all properties in queued AJAX request
            // this version is just a demonstration. 
            var setup = {
                url: newReq.url,
                success: newReq.success
            };
            $.ajax(setup);
        }
    }
});