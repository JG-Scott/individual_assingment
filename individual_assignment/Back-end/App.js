const mysql = require("mysql");
var http = require("http");
const fs = require("fs");
const url = require("url");
//connection to database
const con = mysql.createConnection({
  host: "localhost",
  user: "johnnysc_johnny_main",
  password: "@6)n,ou5#@H8",
  database: "johnnysc_individual_assignment_db",
});
con.connect(function (err) {
  if (err) throw err;
  console.log("connected!");
});

//connection to server
var server = http.createServer(function (req, resp) {
  resp.writeHead(200, {
    "content-type": "text/html",
    "Access-Control-Allow-Methods": "GET,POST,PUT,DELETE,OPTIONS",
    "Access-Control-Allow-Origin": "*",
  });
  let q = url.parse(req.url, true);
  console.log(q);
  // reader request, grab all quotes
  if (q.pathname == "/individualassignment/reader/") {
    let sql = "SELECT * FROM Quotes";
    con.query(sql, function (err, result) {
      if (err) throw err;
      resp.end(JSON.stringify(result));
    });
    //reader request, grab most recent quote
  } else if (q.pathname == "/individualassignment/reader/1") {
    let sql = "SELECT * FROM Quotes ORDER BY ID DESC LIMIT 0,1";
    con.query(sql, function (err, result) {
      if (err) throw err;
      resp.end(JSON.stringify(result));
    });
    // admin request
  } else if (q.pathname == "/individualassignment/admin/") {
    let sql = "SELECT * FROM Quotes";
    con.query(sql, function (err, result) {
      if (err) throw err;
      resp.end(JSON.stringify(result));
    });
    //Post request, adds a value into database
    if (req.method == "POST") {
      let name;
      let quote;
      let id;

      req.on("data", (chunk) => {
        let list = JSON.parse(chunk);
        name = list.name;
        quote = list.quote;
        id = list.id;
        let sql =
          "INSERT INTO Quotes(Name, Quote, Identifier) values ('" +
          name +
          "', '" +
          quote +
          "', '" +
          id +
          "')";
        con.query(sql, function (err, result) {
          if (err) throw err;
          console.log("1 record inserted");
        });
      });
      //Put request, updates value in database
    } else if (req.method == "PUT") {
      let name;
      let quote;
      let id;

      req.on("data", (chunk) => {
        let list = JSON.parse(chunk);
        name = list.name;
        quote = list.quote;
        id = list.id;
        let sql =
          "UPDATE Quotes " +
          "SET Name = '" +
          name +
          "', Quote = '" +
          quote +
          "' WHERE Identifier = '" +
          id +
          "'";
        con.query(sql, function (err, result) {
          if (err) throw err;
          console.log("1 record updated");
        });
      });
      //delete request, Deletes value in database
    } else if (req.method == "DELETE") {
      let id;

      req.on("data", (chunk) => {
        id = chunk;
        let sql = "DELETE FROM Quotes WHERE Identifier = '" + id + "'";
        con.query(sql, function (err, result) {
          if (err) throw err;
          console.log("1 record deleted");
        });
      });
    }
  }
});

server.listen();
console.log("Server Started listening on 5050");
