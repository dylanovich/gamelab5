/*
 * iTabbar
 * Copyright (c) Gino Cote & Pascal Carmoni
 * Dual licensed under the MIT or GPL Version 2 licenses.
 */
var count = $("#tabbar li").length;
var pourcent = 100 / count;
$("#tabbar li").css("width", pourcent + "%");
//alert(pourcent);

$(function() {
    $("#tabbar a").click(function() {
        $("#tabbar a").addClass("current").not(this).removeClass("current");
        $("#tabbar div").addClass("current").not(this).removeClass("current");
    });
});

//if ((navigator.standalone) || (!OSName)) {
if (navigator.standalone) {
    //alert ('Running full screen');
    $("#tabbar").css("bottom", "0");
} else {
    //alert ('Running in a browser');
    $("#tabbar").css("bottom", "-60px");
}

//var OSName="Unknown OS";
if (navigator.appVersion.indexOf("Win")!==-1) OSName="Windows";
if (navigator.appVersion.indexOf("Mac")!==-1) OSName="MacOS";
if (navigator.appVersion.indexOf("X11")!==-1) OSName="UNIX";
if (navigator.appVersion.indexOf("Linux")!==-1) OSName="Linux";

// full screen detection
//if (window.navigator.standalone) { //autre methode // http://docs.sencha.com/ext-js/4-0/source/Support.html
// autre http://davidbcalhoun.com/tag/jqtouch
//check if is desktop browser
    var platform = navigator.platform.toLowerCase();
    var mobile = platform.match(/(iphone|ipod|ipad|android)/);
if (!mobile) {
    //alert ('not mobile');
    $("#tabbar").css("bottom", "0");
	//alert ('Not mobile last alert');
}