// Generated by CoffeeScript 1.7.1
(function() {
  var Dunomatic, request,
    __bind = function(fn, me){ return function(){ return fn.apply(me, arguments); }; };

  request = require('browser-request');

  Dunomatic = (function() {
    function Dunomatic() {
      this.barClicked = __bind(this.barClicked, this);
      this.initHTML = __bind(this.initHTML, this);
      window.onload = this.initHTML;
      this.barMessage = 'Yikes, looks like your card is about to expire!';
      this.fontColor = 'white';
    }

    Dunomatic.prototype.initHTML = function() {
      var bodyElement;
      bodyElement = document.getElementsByTagName('body')[0];
      this.dunbar = document.createElement('div');
      bodyElement.insertBefore(this.dunbar, bodyElement.firstChild);
      this.dunbar.setAttribute('class', 'dunomatic-container');
      this.dunbar.onclick = this.barClicked;
      this.setBarContent();
      return this.initStyle();
    };

    Dunomatic.prototype.initStyle = function() {
      console.log(this.dunbar);
      this.style = {
        'background-color': 'rgb(0,165,193)',
        'width': '100%',
        'height': '0px',
        'overflow': 'auto',
        '-webkit-transition': '1s ease-in-out all',
        'transition': '1s ease-in-out all',
        '-webkit-transform': 'translateZ(0)',
        '-moz-transform': 'translateZ(0)',
        '-ms-transform': 'translateZ(0)',
        '-o-transform': 'translateZ(0)',
        'transform': 'translateZ(0)'
      };
      return this.setStyle();
    };

    Dunomatic.prototype.setStyle = function() {
      var k, styleString, v, _ref;
      styleString = '';
      _ref = this.style;
      for (k in _ref) {
        v = _ref[k];
        styleString += "" + k + ":" + v + ";";
      }
      return this.dunbar.setAttribute('style', styleString);
    };

    Dunomatic.prototype.setBarContent = function() {
      return this.dunbar.innerHTML = "<p class='dunomatic-message' style='width:100%;height:100%;text-align:center;margin:0;padding-top:10px;color:white;'>" + this.barMessage + " <a style='color:" + this.fontColor + "' href='http://google.com'>Update your card</a></p>";
    };

    Dunomatic.prototype.showBar = function() {
      this.style.height = '40px';
      return this.setStyle();
    };

    Dunomatic.prototype.hideBar = function() {
      this.style.height = '0px';
      return this.setStyle();
    };

    Dunomatic.prototype.log = function(thing) {
      if (this.debug) {
        return console.log(thing);
      }
    };

    Dunomatic.prototype.init = function(token, debug) {
      this.token = token;
      this.debug = debug != null ? debug : false;
      this.log("Dunomatic initialized with token " + this.token);
      if (!token || token === 'YOUR-DUNOMATIC-TOKEN') {
        return console.error("Incorrect Dunomatic token: " + this.token);
      }
    };

    Dunomatic.prototype.login = function(stripeID) {};

    Dunomatic.prototype.barClicked = function() {
      return alert('click');
    };

    return Dunomatic;

  })();

  window.Dunomatic = new Dunomatic;

}).call(this);
