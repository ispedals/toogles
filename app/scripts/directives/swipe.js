tooglesApp.directive('whenSwiped', function() {
	return function (scope, element, attrs) {
	   var video = scope.video;
	   return $(element).hammer({
             prevent_default: false,
             drag_vertical: false
	   })
		 .bind("swipe", function (ev) {
			return scope.$apply(function (scope) {
				return scope[attrs['whenSwiped']].call(scope, video);
			});
		 });
		 //to test on desktop
		// return $(element).click(function () {
			// return scope.$apply(function (scope) {
				// return scope[attrs['whenSwiped']].call(scope, video);
			// });
		// });
	 };
});
