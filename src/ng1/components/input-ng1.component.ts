class InputNg1Controller {
    static $inject = ['$scope'];

    constructor(public $scope) {
        // todo
    }
}

export const InputNg1Component = {
    controller: InputNg1Controller,
    bindings: {
        id: '<',
    },
    template: `
          <md-input-container>
                <label>Value for link</label>
                <input type="text" ng-model="$ctrl.id">
          </md-input-container>
          
          <br>
          
          <a ui-sref="ng1router({init2: $ctrl.id})">Go with {{ $ctrl.id }}</a>
    `,
};