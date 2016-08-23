/**
 * Created by 749 on 8/23/2016.
 */


var Module= (function () {

    function privateFunction(a)
    {
        console.log('this is private function');
        console.log(a);
    }

    return {

        publicfunction:function (a){
            privateFunction(a);
        }
    }
})();