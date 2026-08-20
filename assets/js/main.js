document.addEventListener("DOMContentLoaded", function () {
  var toggle = document.querySelector(".nav-toggle");
  var nav = document.getElementById("main-nav");

  if (toggle && nav) {
    toggle.addEventListener("click", function () {
      var open = nav.classList.toggle("open");
      toggle.setAttribute("aria-expanded", open ? "true" : "false");
    });
  }

  var path = window.location.pathname.split("/").pop() || "index.html";
  document.querySelectorAll(".main-nav a").forEach(function (link) {
    var href = link.getAttribute("href").split("#")[0];
    if (href === path) {
      link.setAttribute("aria-current", "page");
    }
  });

  document.querySelectorAll(".has-dropdown").forEach(function (li) {
    var btn = li.querySelector(".nav-dropdown-toggle");
    btn.addEventListener("click", function (e) {
      e.stopPropagation();
      var isOpen = li.classList.contains("open");
      document.querySelectorAll(".has-dropdown.open").forEach(function (other) {
        if (other !== li) other.classList.remove("open");
      });
      li.classList.toggle("open", !isOpen);
      btn.setAttribute("aria-expanded", !isOpen ? "true" : "false");
    });
    li.addEventListener("mouseleave", function () {
      li.classList.remove("open");
      btn.setAttribute("aria-expanded", "false");
    });
  });

  document.addEventListener("click", function () {
    document.querySelectorAll(".has-dropdown.open").forEach(function (li) {
      li.classList.remove("open");
      li.querySelector(".nav-dropdown-toggle").setAttribute("aria-expanded", "false");
    });
  });

  var downloadAllBtn = document.getElementById("download-all-ordinances");
  if (downloadAllBtn) {
    downloadAllBtn.addEventListener("click", function () {
      var links = document.querySelectorAll("#ordinances .doc-download");
      downloadAllBtn.disabled = true;
      downloadAllBtn.textContent = "Downloading " + links.length + " files...";
      links.forEach(function (link, i) {
        setTimeout(function () {
          var a = document.createElement("a");
          a.href = link.href;
          a.download = "";
          a.rel = "noopener";
          document.body.appendChild(a);
          a.click();
          document.body.removeChild(a);
          if (i === links.length - 1) {
            setTimeout(function () {
              downloadAllBtn.disabled = false;
              downloadAllBtn.textContent = "Download All Ordinances";
            }, 500);
          }
        }, i * 400);
      });
    });
  }
});
