class InputNg1Controller {
    static $inject = ['$scope'];

    constructor(public $scope) {
        // todo
    }
}

export const InputNg1Component = {
    controller: InputNg1Controller,
    template: `Это компонент на ng1
          <md-input-container>
                <label>Email</label>
                <input type="email">
          </md-input-container>
    `,
};