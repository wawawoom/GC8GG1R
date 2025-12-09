const puppeteer = require("puppeteer");

async function run() {
  console.log("=== Script démarré à", new Date().toISOString(), "===");

  const url =
    "https://wawawoom.fr/geocaching/GC8GG1R/step2-dc3504d9-7d66-4a9d-982b-e161b02932d5/administrator.php";

  const username = "nikolo";
  const password = "olokin123!";

  let browser;

  try {
    // Chrome intégré à Puppeteer
    browser = await puppeteer.launch({
      headless: "new",
      args: ["--no-sandbox", "--disable-setuid-sandbox"],
    });

    const page = await browser.newPage();

    // Cookies
    await page.setCookie(
      { name: "username", value: username, domain: "wawawoom.fr" },
      { name: "password", value: password, domain: "wawawoom.fr" }
    );

    console.log("Cookies définis. Visite...");

    const response = await page.goto(url, {
      waitUntil: "networkidle2",
      timeout: 30000,
    });

    console.log("Status HTTP :", response.status());
  } catch (err) {
    console.error("❌ Erreur :", err);
  } finally {
    if (browser) await browser.close();
  }

  console.log("=== Script terminé ===");
  process.exit(0);
}

run();
