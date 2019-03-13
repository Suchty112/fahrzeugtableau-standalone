// ==UserScript==
// @name        Fahrzeugtableau
// @namespace   Leitstellenspiel
// @description Export der Wachen & Fahrzeuge aus dem LSS zum Fahrzeugtableau
// @downloadURL https://rawgit.com/ChaosKai/fahrzeugtableau-standalone/master/userscript/master.user.js
// @include     http*://www.leitstellenspiel.de/*
// @version     dev
// @author      ChaosKai93
// @grant       none
// ==/UserScript==

var scriptElement = document.createElement("script");
scriptElement.type = "text/javascript";
scriptElement.src = "https://github.com/Suchty112/fahrzeugtableau-standalone/raw/master/userscript/content.js";
document.body.appendChild(scriptElement);
