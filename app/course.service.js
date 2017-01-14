"use strict";
var CourseService = (function () {
    function CourseService() {
    }
    CourseService.prototype.getcourses = function () {
        return ['course1', 'course2', 'course3'];
    };
    return CourseService;
}());
exports.CourseService = CourseService;
//# sourceMappingURL=course.service.js.map