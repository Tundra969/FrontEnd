//module to connect angular to html
var app = angular.module('frontend', [])
//controller to pull in dummy title
.controller('titleController', function($scope) {
    $scope.title = "Ninja\u2122 Professional Blender with Single Serve Blending Cups";
})
//controller to put dummy images into carousel
.controller('carouselController', function($scope) {
    $scope.images = [
    { image: "http:\/\/target.scene7.com\/is\/image\/Target\/14263758", name: "Main Image"},
    { image: "http:\/\/target.scene7.com\/is\/image\/Target\/14263758_Alt01", name: "Alternate Image 1"},
    { image: "http:\/\/target.scene7.com\/is\/image\/Target\/14263758_Alt02", name: "Alternate Image 2"},
    { image: "http:\/\/target.scene7.com\/is\/image\/Target\/14263758_Alt03", name: "Alternate Image 3"},
    { image: "http:\/\/target.scene7.com\/is\/image\/Target\/14263758_Alt04", name: "Alternate Image 4"},
    { image: "http:\/\/target.scene7.com\/is\/image\/Target\/14263758_Alt05", name: "Alternate Image 5"},
    { image: "http:\/\/target.scene7.com\/is\/image\/Target\/14263758_Alt06", name: "Alternate Image 6"},
    { image: "http:\/\/target.scene7.com\/is\/image\/Target\/14263758_Alt07", name: "Alternate Image 7"}
    ]
})
//controller to pull in dummy price
.controller('priceController', function($scope) {
    $scope.price = "$139.99";
})
.controller('addToCartController', function($scope) {
    $scope.addToCart = "Not Currently Available Online";
})
.controller('pickUpInStoreController', function($scope) {
    $scope.pickUpInStore = "Pick Up In Store";
});

// $.getJSON('../item-data.json', function(data){
//   return JSON;
// })