// AquaChemD documentation navigation
const menuItems = {
  "Getting Started": [
    { directory: "/aquachemd/docs/system-design", text: "System Design" },
    { directory: "/aquachemd/docs/getting-started", text: "Getting Started" }
  ],
  "Hardware": [
    { directory: "/aquachemd/docs/hardware", text: "Hardware" },
    //{ directory: "/aquachemd/docs/flow-cell", text: "Flow Cell Design" }
  ],
  "Dosing": [
    { directory: "/aquachemd/docs/dosing", text: "Dosing Strategy" }
  ],
  "Integration": [
    { directory: "/aquachemd/docs/api", text: "API" },
    { directory: "/aquachemd/docs/homeassistant", text: "Home Assistant" },
    { directory: "/aquachemd/docs/homekit", text: "HomeKit" }
  ],
  "Interface": [
    { directory: "/aquachemd/docs/ui", text: "Web & App UI" }
  ]
};

function normalizePath(pathname) {
  pathname = pathname.replace(/\/$/, "");
  const lastSlash = pathname.lastIndexOf("/");
  const lastPart = pathname.substring(lastSlash + 1);
  return lastPart.includes(".") ? pathname.substring(0, lastSlash) : pathname;
}

function navigateToUrl(select) {
  if (select.value) window.location.href = select.value;
}

const currentPage = normalizePath(window.location.pathname).toLowerCase();

function buildMenu() {
  const menu = document.getElementById("menu");
  if (!menu) return;

  let html = '<div class="docs-menu-title"><a href="/aquachemd/docs/">Documentation</a></div>';
  for (const [category, items] of Object.entries(menuItems)) {
    html += '<h4>' + category + '</h4><ul>';
    for (const item of items) {
      const active = currentPage === item.directory.toLowerCase();
      html += '<li' + (active ? ' class="current"' : '') + '><a href="' + item.directory + '/">' + item.text + '</a></li>';
    }
    html += '</ul>';
  }
  menu.innerHTML = html;
}

function buildMobileMenu() {
  const container = document.getElementById("mobilemenu");
  if (!container) return;

  let html = '<select id="doc-nav" onchange="navigateToUrl(this)" aria-label="Select a page from the documentation">';
  html += '<option value="">Navigate the docs…</option>';
  for (const [category, items] of Object.entries(menuItems)) {
    html += '<optgroup label="' + category + '">';
    for (const item of items) {
      const selected = currentPage === item.directory.toLowerCase() ? ' selected' : '';
      html += '<option value="' + item.directory + '/"' + selected + '>' + item.text + '</option>';
    }
    html += '</optgroup>';
  }
  html += '</select>';
  container.innerHTML = html;
}

document.addEventListener("DOMContentLoaded", () => {
  buildMenu();
  buildMobileMenu();
});
