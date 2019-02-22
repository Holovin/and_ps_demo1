class InputNg1Controller {
    static $inject = ['$scope'];

    constructor(public $scope) {
        // todo
        $scope.routerLink = '';
        $scope.urlPrefix = '/ng1router/input';
        $scope.updateLink = function (number: string) {
            $scope.routerLink = number;
        }
    }
}

export const InputNg1Component = {
    bindings: {number: '<'},
    controller: InputNg1Controller,
    template: `
        <md-input-container>
          <input placeholder="title" ng-model="$ctrl.number" ng-change="updateLink($ctrl.number)">
        </md-input-container>
        
        <br>
        
        <a href="{{urlPrefix}}?init2={{routerLink}}" >Road to ng1 router</a>
    `
};
