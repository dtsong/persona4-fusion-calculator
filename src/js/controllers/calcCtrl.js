'use strict';

var calcCtrl = function($rootScope, $scope, $routeParams, calcService, $location, $anchorScroll) {

   calcService.initialize($scope);
     
   $scope.wantedPersona = calcService.getPersonaByName($scope, $routeParams.persona_name);
   
   $scope.recipes = [];

   if($scope.wantedPersona.rare){

     calcService.setNoRecipe($scope);

   }else if($scope.wantedPersona.special){

     calcService.getSpecialCombo($scope);

   }else{
     
     var wantedPersonaArcana = calcService.getPersonaeByArcana($scope.wantedPersona.arcana);
     //Simple Fusion results added to $scope.recipes
     calcService.resultsSimpleFusion($scope, wantedPersonaArcana);

     //Triangle Fusion results added to $scope.recipes
     if ($scope.gameChosen !== 'p5'){
        calcService.resultsTriangleFusion($scope, wantedPersonaArcana);
     }

     $scope.Math = window.Math;
   }
   
   $scope.goTop = function() {

      $location.hash('header');

      $anchorScroll();
    };

    $rootScope.calcDisplayed = true;
   
};

module.exports = calcCtrl;