//module to connect angular to html
var app = angular.module('frontend', [])
//controller to pull in dummy title
.controller('titleController', function($scope) {
    $scope.title = "Ninja\u2122 Professional Blender with Single Serve Blending Cups";
})
//controller to pull in dummy images
.controller('imageController', function($scope) {
    $scope.main_image = "http:\/\/target.scene7.com\/is\/image\/Target\/14263758",
    $scope.alt_1 = "http:\/\/target.scene7.com\/is\/image\/Target\/14263758_Alt01",
    $scope.alt_2 = "http:\/\/target.scene7.com\/is\/image\/Target\/14263758_Alt02",
    $scope.alt_3 = "http:\/\/target.scene7.com\/is\/image\/Target\/14263758_Alt03",
    $scope.alt_4 = "http:\/\/target.scene7.com\/is\/image\/Target\/14263758_Alt04",
    $scope.alt_5 = "http:\/\/target.scene7.com\/is\/image\/Target\/14263758_Alt05",
    $scope.alt_6 = "http:\/\/target.scene7.com\/is\/image\/Target\/14263758_Alt06",
    $scope.alt_7 = "http:\/\/target.scene7.com\/is\/image\/Target\/14263758_Alt07"
})
//controller to pull in dummy price
.controller('priceController', function($scope) {
    $scope.price = "$139.99";
});

$.getJSON('../item-data.json', function(data){
  return JSON;
})