'use strict';

var indexCtrl = function($scope) {
	
	$scope.gameChosen= localStorage.getItem('gameChosen');
	
	$scope.chooseGame = function (game){
		localStorage.setItem('gameChosen', game);
		$scope.gameChosen = game;
	};

	$scope.$watch('gameChosen', function(){
    
      switch ($scope.gameChosen){
        case '':
          $('body').css("background-color","yellow");
          $('h1').addClass('p4text');
          $('h3').addClass('p4text');
          $('h1').removeClass('p5text');
          $('h3').removeClass('p5text');
          $('body').removeClass('p5text');
          break;        
        case 'p4': 
          $scope.personae = require('../data/DataP4').personae;
          $('body').css("background-color","yellow");
          $('h1').addClass('p4text');
          $('h3').addClass('p4text');
          $('h1').removeClass('p5text');
          $('h3').removeClass('p5text');
          $('body').removeClass('p5text');
          break;
        case 'p4g': 
          $scope.personae = require('../data/DataP4G').personae;
          $('body').css("background-color","#fee727");
          $('h1').addClass('p4text');
          $('h3').addClass('p4text');
          $('h1').removeClass('p5text');
          $('h3').removeClass('p5text');
          $('body').removeClass('p5text');
          break;
        case 'p5': 
          $scope.personae = require('../data/DataP5').personae;
          $('body').css("background-color","red");
          $('h1').removeClass('p4text');
          $('h3').removeClass('p4text');
          $('h1').addClass('p5text');
          $('h3').addClass('p5text');
          $('body').addClass('p5text');
          break;
        default:
      }  
    });

}

module.exports = indexCtrl;