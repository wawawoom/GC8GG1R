const puppeteer = require("puppeteer");

async function run() {
  console.log("=== Script démarré à", new Date().toISOString(), "===");

  const url =
    "https://wawawoom.fr/geocaching/GC8GG1R/step2-dc3504d9-7d66-4a9d-982b-e161b02932d5/administrator.php";

  const username = "nikolo";
  const password = "olokin123!";

  let browser;

  try {
    // Lance un navigateur headless (sans interface)
    browser = await puppeteer.launch({
      headless: "new",
      args: ["--no-sandbox", "--disable-setuid-sandbox"],
    });

    const page = await browser.newPage();

    // Ajout des cookies
    await page.setCookie(
      { name: "username", value: username, domain: "wawawoom.fr" },
      { name: "password", value: password, domain: "wawawoom.fr" }
    );

    console.log("Cookies définis. Visite de la page…");

    const response = await page.goto(url, {
      waitUntil: "networkidle2",
      timeout: 30000,
    });

    console.log("Status HTTP :", response.status());
    console.log("Page visitée avec succès !");

    // Tu peux inspecter la page si besoin :
    // const html = await page.content();
    // console.log(html);
  } catch (err) {
    console.error("❌ Erreur :", err);
  } finally {
    if (browser) {
      await browser.close();
    }
  }

  console.log("=== Script terminé ===\n");
  process.exit(0);
}

run();
