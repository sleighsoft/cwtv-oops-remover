// ==UserScript==
// @name         CWTV Add Warning Remover
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  Kills the Oops
// @author       sleighsoft
// @match        http://*/*
// @grant        none
// @include     http://*cwtv.com/*
// @include     https://*cwtv.com/*
// ==/UserScript==
/* jshint -W097 */
'use strict';

window.eval("window.CWTVIsAdBlocking = function(){}");