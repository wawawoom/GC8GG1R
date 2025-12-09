const Browser = require("zombie");

async function run() {
  console.log("=== Script démarré à", new Date().toISOString(), "===");

  const url =
    "https://wawawoom.fr/geocaching/GC8GG1R/step2-dc3504d9-7d66-4a9d-982b-e161b02932d5/administrator.php";

  const browser = new Browser();

  // Cookies
  browser.setCookie({
    name: "username",
    domain: "wawawoom.fr",
    value: "nikolo",
  });
  browser.setCookie({
    name: "password",
    domain: "wawawoom.fr",
    value: "olokin123!",
  });

  try {
    console.log("Visite de l’URL…");

    await browser.visit(url);

    console.log("Page visitée avec succès !");
    console.log("Status:", browser.status || "OK");
  } catch (err) {
    console.error("❌ Erreur lors de la visite :", err);
  }

  console.log("=== Script terminé ===\n");
}

// Lance la fonction et quitte proprement.
run().then(() => process.exit(0));
