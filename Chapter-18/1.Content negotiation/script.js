function confirm(media){
    fetch("https://eloquentjavascript.net/author", {headers: {Accept: media}})
    .then(resp => {
        resp.text();
        console.log(resp.status);
      }) 
}

confirm("text/plain");
confirm("text/html");
confirm("application/json");
confirm("application/rainbows+unicorns");