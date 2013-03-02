tooglesApp.directive('whenSwiped', function() {
	return function (scope, element, attrs) {
	   var video = scope.video;
	   Hammer(element[0]).on("swiperight", function (ev) {
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
