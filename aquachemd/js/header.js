

const items = [
    { directory: "/aquachemd",            text: "Home" },
    { directory: "/aquachemd/docs",       text: "Documentation" },
    { directory: "/aquachemd/faq",        text: "FAQ" }
];


function getDirectoryPath(pathname) {
    pathname = pathname.replace(/\/$/, "");

    const lastSlash = pathname.lastIndexOf("/");
    const lastPart = pathname.substring(lastSlash + 1);

    return lastPart.includes(".")
        ? pathname.substring(0, lastSlash)
        : pathname;
}

const currentPathname = getDirectoryPath(window.location.pathname);

try {
  const header = document.getElementById('header');

  let navlinks = "";

  for (const item of items) {
    console.log(item.directory, item.text, currentPathname);
    if (item.directory == currentPathname) {
      navlinks += "<a class=\"navlink-current\" href=\"" + item.directory + "\">" + item.text +"</a>";
    } else {
      navlinks += "<a href=\"" + item.directory + "\">" + item.text +"</a>";
    }
  }
  navlinks += "<a href=\"https://github.com/aqualinkd/AquachemD\">GitHub</a>";
  navlinks += "<a href=\"https://aquadaemon.org\">AquaDaemon</a>";

  header.innerHTML = "<div class=\"wrap nav\">" +
      "<a class=\"brand\" href=\"./\">AquaChemD</a>" +
      "<nav class=\"navlinks\">" +
      navlinks +
      "</nav>" +
      "</div>";

} catch (e) { }


try {
  const footer = document.getElementById('footer');

  footer.innerHTML = "<div class=\"wrap\">" +
      "<p class=\"donate-line\">If you like these projects, please consider donating <a href=\"https://www.paypal.com/cgi-bin/webscr?cmd=_s-xclick&amp;hosted_button_id=SEGN9UNS38TXJ\" rel=\"nofollow\"><img src=\"https://img.shields.io/badge/Donate-PayPal-blue.svg\" alt=\"Donate\" data-canonical-src=\"/img/paypal.svg\" style=\"max-width: 100%;\"></a></p>" +
      "<p>AquaChemD is part of <a href=\"https://aquadaemon.org\">AquaDaemon</a> &mdash; open source aquatic automation.</p>" +
      "</div>"

} catch (e) { }



// Cloudflare Web Analytics
const script = document.createElement('script');
script.src = 'https://static.cloudflareinsights.com/beacon.min.js';
script.defer = true;
script.setAttribute('data-cf-beacon', '{"token": "37fddc07bc74489087ca3ea7db0f9137"}');
document.body.appendChild(script);
// End Cloudflare Web Analytics 

