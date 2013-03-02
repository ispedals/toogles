tooglesApp.service('queue', function() {
	
	var queuedVideos = [];
	var hashOfQueued = {};
	
	this.addToQueue = function (video) {
		video.queued = true;
		hashOfQueued[video.media$group.yt$videoid.$t] = true;
		queuedVideos.push(video);
	}
	
	this.getQueue  = function () {
		return queuedVideos;
	}

	var inQueue = function (video) {
		return hashOfQueued[video.media$group.yt$videoid.$t] === true;
	}

	this.removeFromQueue = function (video) {
		if (!inQueue(video)) {
			return;
		}

		for(var i = queuedVideos.length -1; i >= 0;  i--) {
			if (video.media$group.yt$videoid.$t === queuedVideos[i].media$group.yt$videoid.$t) {
				queuedVideos.splice(i, 1);
				break;
			}
		}
		delete hashOfQueued[video.media$group.yt$videoid.$t];
	}

	//-------------------------------------------------------------------

	var viewedVideos = [];
	var hashOfViewed = {};

	this.addToWatched = function (video) {
		video.watched = true;
		hashOfViewed[video.media$group.yt$videoid.$t] = true;
		viewedVideos.push(video);
	}

	this.getWatched = function () {
		return viewedVideos;
	}

	var inWatched = function (video) {
		return hashOfViewed[video.media$group.yt$videoid.$t] === true;
	}
	
	//-------------------------------------------------------------------

	var hashOfIgnored = {};
	var ignoredUsers = {};

	this.addToIgnored = function (video) {
		video.ignored = true;
		hashOfIgnored[video.media$group.yt$videoid.$t] = true;
	}
	
	this.ignoreUser = function (userID) {
		ignoredUsers[userID] = true;
	}

	var inIgnored= function (video) {
		return hashOfIgnored[video.media$group.yt$videoid.$t] === true || ignoredUsers[video.author[0].name.$t] === true;
	}

	this.markIn = function (video) {
		video.queued = false;
		video.watched = false;
		video.ignored = false;
		if(inQueue(video)) {
			video.queued = true;
		}
		if(inWatched(video)) {
			video.watched = true;
		}
		if(inIgnored(video)) {
			video.ignored = true;
		}
		return video;
	}

});
