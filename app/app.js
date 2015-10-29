/**
 * Created by jaifar on 29/10/15.
 */
angular.module("otchi", []).controller("RecipeController", function ($scope, RecipeService) {

    $scope.recipesList = RecipeService.fetchAllRecipes();
    $scope.addRecipe = function () {
        RecipeService.createRecipe($scope.recipe);
        $scope.recipe = {};
    }
}).service("RecipeService", function () {
    var db =  [{description:"pastilla"},{description:"couscous"}, {description:"soupe"}];
    this.createRecipe = function (recipe) {
        db.push(recipe);
    };

    this.fetchAllRecipes = function () {
        return db;
    };
});