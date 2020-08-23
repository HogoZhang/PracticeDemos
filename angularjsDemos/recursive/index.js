(function (angular) {
  'use strict';
  angular.module('labelApp', [])
  .controller('MainCtrl',function ($scope) {
    $scope.categories = [
      { 
        title: 'Computers',
        categories: [
          {
            title: 'Laptops',
            categories: [
              {
                title: 'Ultrabooks'
              },
              {
                title: 'Macbooks'            
              }
            ]
          },
          {
            title: 'Desktops'
          },
          {
            title: 'Tablets',
            categories: [
              { 
                title: 'Apple'
              },
              {
                title: 'Android'
              }
            ]        
          }
        ]
      },
      {
        title: 'Printers'
      }
    ];//注意这组数据会动态增加并无限延伸下去
  });
})(window.angular);
