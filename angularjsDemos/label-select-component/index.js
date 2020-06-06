(function (angular) {
    'use strict';
    angular.module('labelApp', [])
    .controller('MainCtrl',function ($scope) {
        this.infectConfig = {
            title:'感染统计',
            list:[{
                key:1,name:'中国',count:2000
            },{
                key:2,name:'美国',count:2000
            },{
                key:3,name:'俄罗斯',count:2000
            },{
                key:4,name:'韩国',count:2000
            },{
                key:1,name:'日本',count:2000
            },{
                key:1,name:'澳大利亚',count:2000
            },{
                key:1,name:'意大利',count:2000
            },{
                key:1,name:'印度',count:2000
            },{
                key:1,name:'缅甸',count:2000
            },{
                key:1,name:'菲律宾',count:2000
            },{
                key:1,name:'德国',count:2000
            },{
                key:1,name:'英国',count:2000
            },{
                key:1,name:'瑞士',count:2000
            }]
        }
        this.getFector = function(selected) {
            console.log(selected);
        }
    });
})(window.angular);
