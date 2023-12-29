
// Complete the function/method so that it returns the url 
// with anything after the anchor (#) removed.


function removeUrlAnchor(url){
  
    return url.indexOf('#') != -1 ? url.slice(0,url.indexOf('#')) : url;
  }