'use strict';

var app = angular.module('myDirectiveModule', []);

app.directive('myCustomForm', function() {
  return {
    restrict: 'E',
    scope: {
      fields: '<',
      onSubmit: '&'
    },
    templateUrl: '/html/myCustomForm.html'
  };
});

app.directive('myDraggable', ['$document', function($document) {
  return {
    restrict: 'A',
    link: function(scope, element, attr) {
      var startX = 0, startY = 0, x = 0, y = 0;

      element.css({
       position: 'relative',
       // border: '1px solid red',
       // backgroundColor: 'lightgrey',
       cursor: 'pointer'
      });

      element.on('mousedown', function(event) {
        // Prevent default dragging of selected content
        event.preventDefault();
        startX = event.pageX - x;
        startY = event.pageY - y;
        $document.on('mousemove', mousemove);
        $document.on('mouseup', mouseup);
      });

      function mousemove(event) {
        y = event.pageY - startY;
        x = event.pageX - startX;
        element.css({
          top: y + 'px',
          left:  x + 'px'
        });
      }

      function mouseup() {
        $document.off('mousemove', mousemove);
        $document.off('mouseup', mouseup);
      }
    }
  };
}]);


app.directive('myTextColor', function() {
  return {
    restrict: 'A',
    link: function(scope, element, attrs) {
      console.log('attrs:', attrs);

      element.css('color', attrs.myTextColor);
    }
  }
})

app.directive('myTable', function() {
  return {
    restrict: 'E',
    controller: 'myTableCtrl',
    templateUrl: '/html/myDirective.html',
    scope: {
      list: '=',
    },
    link: function(scope, el, attrs, controller, transcludeFn) {
      // el.children('table.table').addClass('table-hover');

    }
  };
});


app.controller('myTableCtrl', function($scope) {
  $scope.sortBy = key => {
    if(key === $scope.sortOrder) {
      $scope.sortOrder = '-' + key;
    } else {
      $scope.sortOrder = key;
    }
  };
});


app.filter('titlecase', function() {
  return function(input) {
    if(!input || !input.toLowerCase) return '';

    return input.toLowerCase()
                .split(' ')
                .map(word => word[0].toUpperCase() + word.slice(1))
                .join(' ');
  }
})
