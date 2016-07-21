'use strict';

var app = angular.module('myApp');

app.controller('mainCtrl', function($scope) {
  console.log('mainCtrl!');

  $scope.submit = data => {
    console.log('submit data:', data);
  };

  $scope.names = ['dude', 'bob', 'dudebob'];

  $scope.fields = [
    {
      label: 'Flavor',
      model: 'flavor',
      type: 'text',
      required: false
    },
    {
      label: 'Price',
      model: 'price',
      type: 'number',
      required: true
    }
  ];

  $scope.tacos = [
    {
      meat: 'chicken',
      dairy: 'nacho',
      beans: true
    },
    {
      meat: 'beef',
      dairy: 'chedder',
      beans: true
    },
    {
      meat: 'tofurky',
      dairy: 'fake',
      beans: true
    }
  ]
});

