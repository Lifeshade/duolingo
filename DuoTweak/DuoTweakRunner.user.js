// ==UserScript==
// @name			DuoTweak
// @namespace		duolingo
// @description		Useful add-on for Duolingo | visit https://www.duolingo.com/comment/7619770 | (c) Lifeshade aka HeadwayCourse, 2015
// @version			1.0.0
// @author			Lifeshade aka HeadwayCourse, (c) 2015
// @include			https://www.duolingo.com/*
// @updateURL		https://rawgit.com/Lifeshade/duolingo/master/DuoTweak/DuoTweakRunner.meta.js
// @downloadURL		https://rawgit.com/Lifeshade/duolingo/master/DuoTweak/DuoTweakRunner.user.js
// @grant			none
// ==/UserScript==

var script = document.createElement("script");
script.setAttribute("type", "text/javascript");
script.setAttribute("src", "https://rawgit.com/Lifeshade/duolingo/master/DuoTweak/DuoTweak.js");
document.head.appendChild(script);

setTimeout(function () {
	if (!$("#dt-duotweak_logo").length) {
		$(".topbar-brand").css({textIndent: "0", marginTop: "10px"}).append('<a href="/comment/7619770" style="display: block; color: white; margin-top: 35px; white-space: nowrap; text-decoration: underline;">Where is DuoTweak?</a>');
	}
}, 10000);