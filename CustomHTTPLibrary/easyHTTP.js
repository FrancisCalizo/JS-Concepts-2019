function easyHTTP() {
  this.http = new XMLHttpRequest();
}

// Make an HTTP Get Request
easyHTTP.prototype.get = function(url, callback) {
  this.http.open('GET', url, true);

  // Could Also Use an Arrow Function
  let that = this;
  this.http.onload = function() {
    if (that.http.status == 200) {
      // First Param is Error Catching
      callback(null, that.http.responseText);
    } else {
      callback(`Error: ${that.http.status}`);
    }
  };

  this.http.send();
};

// Make an HTTP Post Request

// Make an HTTP Put Request

// Make an HTTP Delete Request
