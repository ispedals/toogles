/**
 * The controller used to view watched videos
 */
tooglesApp.controller('WatchedCtrl', ['$scope', '$location', 'youtube', 'queue', function($scope, $location, youtube, queue) {
  $scope.section = $location.path().split('/')[1];
  $scope.videos = queue.getWatched();
  $scope.resulttype = 'videos'

  $scope.getLink = function(video, index) {
    if ($scope.resulttype == 'playlists') {
      return '#/playlist/' + video.yt$playlistId.$t;
    }
    return '#/view/' + youtube.urlToID(video.media$group.yt$videoid.$t);
  }

  $scope.loadMore = function() {
  }

  $scope.urlToID = function(url) {
    return youtube.urlToID(url);
  }
  $scope.formatDuration = function(seconds) {
    return youtube.formatDuration(seconds);
  }

}]);
