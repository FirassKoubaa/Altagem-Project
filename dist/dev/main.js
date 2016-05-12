"use strict";
var core_1 = require('angular2/core');
var browser_1 = require('angular2/platform/browser');
var router_1 = require('angular2/router');
var common_1 = require('angular2/platform/common');
var app_component_1 = require('./app/components/app.component');
if ('dev' === 'prod') {
    core_1.enableProdMode();
}
browser_1.bootstrap(app_component_1.AppComponent, [
    router_1.ROUTER_PROVIDERS,
    core_1.provide(common_1.APP_BASE_HREF, { useValue: '/' })
]);

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm1haW4udHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBLHFCQUFzQyxlQUFlLENBQUMsQ0FBQTtBQUN0RCx3QkFBd0IsMkJBQTJCLENBQUMsQ0FBQTtBQUNwRCx1QkFBK0IsaUJBQWlCLENBQUMsQ0FBQTtBQUNqRCx1QkFBNEIsMEJBQTBCLENBQUMsQ0FBQTtBQUN2RCw4QkFBMkIsZ0NBQWdDLENBQUMsQ0FBQTtBQUU1RCxFQUFFLENBQUMsQ0FBQyxZQUFZLEtBQUssTUFBTSxDQUFDLENBQUMsQ0FBQztJQUFDLHFCQUFjLEVBQUUsQ0FBQztBQUFDLENBQUM7QUFFbEQsbUJBQVMsQ0FBQyw0QkFBWSxFQUFFO0lBQ3RCLHlCQUFnQjtJQUNoQixjQUFPLENBQUMsc0JBQWEsRUFBRSxFQUFFLFFBQVEsRUFBRSxpQkFBaUIsRUFBRSxDQUFDO0NBQ3hELENBQUMsQ0FBQyIsImZpbGUiOiJtYWluLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtwcm92aWRlLCBlbmFibGVQcm9kTW9kZX0gZnJvbSAnYW5ndWxhcjIvY29yZSc7XG5pbXBvcnQge2Jvb3RzdHJhcH0gZnJvbSAnYW5ndWxhcjIvcGxhdGZvcm0vYnJvd3Nlcic7XG5pbXBvcnQge1JPVVRFUl9QUk9WSURFUlN9IGZyb20gJ2FuZ3VsYXIyL3JvdXRlcic7XG5pbXBvcnQge0FQUF9CQVNFX0hSRUZ9IGZyb20gJ2FuZ3VsYXIyL3BsYXRmb3JtL2NvbW1vbic7XG5pbXBvcnQge0FwcENvbXBvbmVudH0gZnJvbSAnLi9hcHAvY29tcG9uZW50cy9hcHAuY29tcG9uZW50JztcblxuaWYgKCc8JT0gRU5WICU+JyA9PT0gJ3Byb2QnKSB7IGVuYWJsZVByb2RNb2RlKCk7IH1cblxuYm9vdHN0cmFwKEFwcENvbXBvbmVudCwgW1xuICBST1VURVJfUFJPVklERVJTLFxuICBwcm92aWRlKEFQUF9CQVNFX0hSRUYsIHsgdXNlVmFsdWU6ICc8JT0gQVBQX0JBU0UgJT4nIH0pXG5dKTtcblxuLy8gSW4gb3JkZXIgdG8gc3RhcnQgdGhlIFNlcnZpY2UgV29ya2VyIGxvY2F0ZWQgYXQgXCIuL3dvcmtlci5qc1wiXG4vLyB1bmNvbW1lbnQgdGhpcyBsaW5lLiBNb3JlIGFib3V0IFNlcnZpY2UgV29ya2VycyBoZXJlXG4vLyBodHRwczovL2RldmVsb3Blci5tb3ppbGxhLm9yZy9lbi1VUy9kb2NzL1dlYi9BUEkvU2VydmljZV9Xb3JrZXJfQVBJL1VzaW5nX1NlcnZpY2VfV29ya2Vyc1xuLy9cbi8vIGlmICgnc2VydmljZVdvcmtlcicgaW4gbmF2aWdhdG9yKSB7XG4vLyAgICg8YW55Pm5hdmlnYXRvcikuc2VydmljZVdvcmtlci5yZWdpc3RlcignLi93b3JrZXIuanMnKS50aGVuKChyZWdpc3RyYXRpb246IGFueSkgPT5cbi8vICAgICAgIGNvbnNvbGUubG9nKCdTZXJ2aWNlV29ya2VyIHJlZ2lzdHJhdGlvbiBzdWNjZXNzZnVsIHdpdGggc2NvcGU6ICcsIHJlZ2lzdHJhdGlvbi5zY29wZSkpXG4vLyAgICAgLmNhdGNoKChlcnI6IGFueSkgPT5cbi8vICAgICAgIGNvbnNvbGUubG9nKCdTZXJ2aWNlV29ya2VyIHJlZ2lzdHJhdGlvbiBmYWlsZWQ6ICcsIGVycikpO1xuLy8gfVxuIl19