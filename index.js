const Browser = require("zombie");

var url =
  "https://wawawoom.fr/geocaching/GC8GG1R/step2-dc3504d9-7d66-4a9d-982b-e161b02932d5/administrator.php";

var browser = new Browser();

browser.setCookie({ name: "username", domain: "wawawoom.fr", value: "nikolo" });
browser.setCookie({
  name: "password",
  domain: "wawawoom.fr",
  value: "olokin123!",
});

browser.visit(url, function (err, _browser, status) {
  if (err) {
    throw err.message;
  }
});
