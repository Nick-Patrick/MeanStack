angular.module('app').controller('mvMainCtrl', function ($scope) {
    $scope.courses = [
        {name: 'C# for sociopaths', featured: true, published: new Date('12/08/2010')},
        {name: 'A# for sociopaths', featured: true, published: new Date('1/11/2012')},
        {name: 'B# for sociopaths', featured: false, published: new Date('3/09/2014')},
        {name: 'D# for sociopaths', featured: true, published: new Date('5/10/1992')},
        {name: 'E# for sociopaths', featured: false, published: new Date('06/05/2002')},
        {name: 'G# for sociopaths', featured: true, published: new Date('7/01/2012')},

    ]
});