app.factory("friendFactory",function(){
    var object = {
        getFriends:function(){
            var friendData = ['ram','mohan','sohan','sunder'];
                return friendData;
        }
    }
    return object;
})