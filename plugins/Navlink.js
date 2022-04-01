// Set class of active section and change color by section
document.onreadystatechange = function () {
  if (document.readyState === "complete") {
    const sidebar = document.getElementsByTagName("nav");
    const sections = document.querySelectorAll("section");
    const navLink = document.querySelectorAll("nav .list-link a");
    window.onscroll = () => {
      var current = "";

      sections.forEach((section) => {
        const sectionTop = section.offsetTop;
        if (pageYOffset >= sectionTop - 500) {
          current = section.getAttribute("id");
        }
      });

      navLink.forEach((a) => {
        a.classList.remove("active");
        if (a.href.includes(current)) {
          a.classList.add("active");
        }

        sidebar[0].classList.remove("bg-sidebar-yellow");
        sidebar[0].classList.add("bg-sidebar-black");
        if (current == "contact") {
          sidebar[0].classList.remove("bg-sidebar-black");
          sidebar[0].classList.add("bg-sidebar-yellow");
        }
      });
    };
  }
};