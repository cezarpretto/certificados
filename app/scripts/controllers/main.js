'use strict';

/**
 * @ngdoc function
 * @name certificadosApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the certificadosApp
 */
angular.module('certificadosApp')
  .controller('MainCtrl', function () {
    var self = this;
    this.pesquisa = undefined;
    this.showDados = false;
    this.err = false;
    this.pesquisar = function(){
      if(self.pesquisa === '060233'){
        self.showDados = true;
        self.err = false;
        self.pesquisa = undefined;
      }else{
        self.showDados = false;
        self.err = true;
        self.pesquisa = undefined;
      }
    }
  });
