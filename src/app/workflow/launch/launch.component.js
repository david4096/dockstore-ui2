"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var descriptor_selector_1 = require("../../shared/selectors/descriptor-selector");
var LaunchWorkflowComponent = (function (_super) {
    __extends(LaunchWorkflowComponent, _super);
    function LaunchWorkflowComponent(launchService, containerService) {
        var _this = _super.call(this) || this;
        _this.launchService = launchService;
        _this.containerService = containerService;
        return _this;
    }
    LaunchWorkflowComponent.prototype.getDescriptors = function (currentVersion) {
        return this.containerService.getDescriptors(this.versions, this.default);
    };
    LaunchWorkflowComponent.prototype.reactToDescriptor = function () {
        this.changeMessages(this.path, this.currentVersion.name);
    };
    LaunchWorkflowComponent.prototype.changeMessages = function (workflowPath, versionName) {
        this.params = this.launchService.getParamsString(workflowPath, versionName, this.currentDescriptor);
        this.cli = this.launchService.getCliString(workflowPath, versionName, this.currentDescriptor);
        this.cwl = this.launchService.getCwlString(workflowPath, versionName);
        this.consonance = this.launchService.getConsonanceString(workflowPath, versionName);
    };
    return LaunchWorkflowComponent;
}(descriptor_selector_1.DescriptorSelector));
__decorate([
    core_1.Input()
], LaunchWorkflowComponent.prototype, "path", void 0);
LaunchWorkflowComponent = __decorate([
    core_1.Component({
        selector: 'app-launch',
        templateUrl: './launch.component.html',
        styleUrls: ['./launch.component.css']
    })
], LaunchWorkflowComponent);
exports.LaunchWorkflowComponent = LaunchWorkflowComponent;
