let main = document.getElementById("main");

function populate() {
  let xhttp = new XMLHttpRequest();
  xhttp.open(
    "GET",
    "https://www.johnnyscott.ca/individualassignment/admin/",
    true
  );
  document.getElementById("main").innerhtml = "<p>Loading...</p>";
  xhttp.onreadystatechange = function () {
    if (xhttp.readyState === 4) {
      var serverResponse = JSON.parse(xhttp.responseText);
      for (let i = 0; i < serverResponse.length; i++) {
        console.log(serverResponse[i].Identifier);
        //create container
        let cont = document.createElement("div");
        cont.setAttribute("id", serverResponse[i].Identifier);
        //create quote text area
        let TAquote = document.createElement("textarea");
        TAquote.setAttribute("id", serverResponse[i].Identifier + "quote");
        TAquote.innerText = serverResponse[i].Quote;
        //create name text area
        let TAname = document.createElement("textarea");
        TAname.setAttribute("id", serverResponse[i].Identifier + "name");
        TAname.innerText = serverResponse[i].Name;
        //create update button
        let btnUpdate = document.createElement("button");
        btnUpdate.setAttribute("id", serverResponse[i].Identifier + "update");
        btnUpdate.innerText = "update";
        btnUpdate.setAttribute("onclick", "handle_update()");
        //create delete button
        let btnDelete = document.createElement("button");
        btnDelete.setAttribute("id", serverResponse[i].Identifier + "delete");
        btnDelete.innerText = "delete";
        btnDelete.setAttribute("onclick", "handle_delete()");
        cont.appendChild(TAquote);
        cont.appendChild(TAname);
        cont.appendChild(btnUpdate);
        cont.appendChild(btnDelete);
        document.getElementById("main").innerhtml = "";
        document.getElementById("main").appendChild(cont);
      }
    }
  };
  xhttp.send(null);
}

function quote(name, quote, id) {
  this.name = name;
  this.quote = quote;
  this.id = id;
}

function handle_delete() {
  let id = event.target.id.substring(0, 8);
  console.log(id);
  document.getElementById(id).outerHTML = "";
  let xhttp = new XMLHttpRequest();
  xhttp.open(
    "DELETE",
    "https://www.johnnyscott.ca/individualassignment/admin/",
    true
  );
  xhttp.send(id);
}

function handle_update() {
  let id = event.target.id.substring(0, 8);
  const name = document.getElementById(id + "name");
  const q = document.getElementById(id + "quote");

  if (name.value && q.value) {
    let xhttp = new XMLHttpRequest();
    let p = new quote(name.value, q.value, id);
    xhttp.open(
      "PUT",
      "https://www.johnnyscott.ca/individualassignment/admin/",
      true
    );
    xhttp.send(JSON.stringify(p));
  } else {
    console.log("Empty input");
  }
}

function handle_add() {
  let id = uuidv4();
  let newInput =
    "<textarea id= " +
    id +
    "quote placeholder='Quote'></textarea> <textarea id= " +
    id +
    "name placeholder='Name'></textarea> <button id=" +
    id +
    "update onclick='handle_update()'>update</button> <button id=" +
    id +
    "delete onclick='handle_delete()'>delete</button>";
  // main.innerHTML = main.innerHTML + newInput;
  let cont = document.createElement("div");
  cont.innerHTML = newInput;
  cont.setAttribute("id", id);
  document.getElementById("main").appendChild(cont);
  let xhttp = new XMLHttpRequest();
  let p = new quote(null, null, id);
  xhttp.open(
    "POST",
    "https://www.johnnyscott.ca/individualassignment/admin/",
    true
  );
  xhttp.send(JSON.stringify(p));
}

function uuidv4() {
  return "xxxxxxxx".replace(/[xy]/g, function (c) {
    var r = (Math.random() * 16) | 0,
      v = c == "x" ? r : (r & 0x3) | 0x8;
    return v.toString(16);
  });
}

document.getElementById("addBtn").onclick = handle_add;
populate();
