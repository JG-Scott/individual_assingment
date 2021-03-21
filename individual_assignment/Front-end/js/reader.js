function handle_one() {
  let xhttp = new XMLHttpRequest();
  document.getElementById("main").innerHTML = "";
  xhttp.open(
    "GET",
    "https://www.johnnyscott.ca/individualassignment/reader/1",
    true
  );
  xhttp.onreadystatechange = function () {
    if (xhttp.readyState === 4) {
      if (xhttp.responseText != "[]") {
        let serverResponse = JSON.parse(xhttp.responseText);
        let cont = document.createElement("div");
        cont.setAttribute("id", serverResponse[0].Identifier);
        cont.setAttribute("display", "flex");
        cont.innerHTML =
          '<p><b>"' +
          serverResponse[0].Quote +
          '"</b> - ' +
          serverResponse[0].Name +
          "</p>";
        document.getElementById("main").appendChild(cont);
      } else {
        document.getElementById("main").innerHTML =
          "<p><b>No quotes in database</b></p>";
      }
    }
  };
  xhttp.send(null);
}

function handle_all() {
  let xhttp = new XMLHttpRequest();
  document.getElementById("main").innerHTML = "";
  xhttp.open(
    "GET",
    "https://www.johnnyscott.ca/individualassignment/reader/",
    true
  );
  xhttp.onreadystatechange = function () {
    if (xhttp.readyState === 4) {
      if (xhttp.responseText != "[]") {
        let serverResponse = JSON.parse(xhttp.responseText);
        for (let i = 0; i < serverResponse.length; i++) {
          let cont = document.createElement("div");
          cont.setAttribute("id", serverResponse[i].Identifier);
          cont.setAttribute("display", "flex");
          cont.innerHTML =
            '<p><b>"' +
            serverResponse[i].Quote +
            '"</b> - ' +
            serverResponse[i].Name +
            "</p>";
          document.getElementById("main").appendChild(cont);
        }
      } else {
        document.getElementById("main").innerHTML =
          "<p><b>No quotes in database</b></p>";
      }
      console.log(xhttp.responseText);
    }
  };
  xhttp.send(null);
}
document.getElementById("one").onclick = handle_one;
document.getElementById("many").onclick = handle_all;
