const app = angular.module('app', ['ui.router'])

app.config(($stateProvider) => {

  $stateProvider.state({
    name: 'pa',
    url: '/page-a',
    templateUrl: './templates/a.html'
  });

  $stateProvider.state({
    name: 'pb',
    url: '/page-b',
    templateUrl: './templates/b.html'
  });

});

app.run(($state) => {
  console.log("### change state to 'pb'")
  $state.go('pb')
});

