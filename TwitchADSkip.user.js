// ==UserScript==
// @name         Twitch AD Skip
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  Skip Twitch ADs
// @author       Invertex
// @match        *://*.twitch.tv/*
// @match        *://*.twitchcdn.net/*
// @run-at document-start
// ==/UserScript==

(function() {
	var realFetch = window.fetch;
	window.fetch = function(input, init) {
		if ( arguments.length >= 2 && typeof input === 'string' && input.includes('/access_token') ) {
			var url = new URL(arguments[0]);
                        url.searchParams.forEach(function(value, key) {
                            url.searchParams.delete(key);
                        });
			arguments[0] = url.href;
		}
		return realFetch.apply(this, arguments);
	};
})();
