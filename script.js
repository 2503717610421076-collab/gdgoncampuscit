// SIDEBAR MENU
function openMenu() {
  document.getElementById("sidebar").classList.add("active");
  document.getElementById("overlay").classList.add("active");
}

function closeMenu() {
  document.getElementById("sidebar").classList.remove("active");
  document.getElementById("overlay").classList.remove("active");
}

// FORM + GALLERY
document.addEventListener("DOMContentLoaded", function() {

  // FORM
  let form = document.getElementById("form");
  if (form) {
    form.addEventListener("submit", function(e) {
      e.preventDefault();
      alert("Registration Successful!");
    });
  }

  // IMAGE UPLOAD
  let upload = document.getElementById("upload");
  if (upload) {
    upload.addEventListener("change", function(e) {
      let file = e.target.files[0];
      if (file) {
        let img = document.createElement("img");
        img.src = URL.createObjectURL(file);
        img.style.width = "120px";
        img.style.margin = "10px";
        document.getElementById("gallery").appendChild(img);
      }
    });
  }

});


// 🔥 MODAL FUNCTIONALITY (NEW)

// OPEN MODAL
function openModal(title, date, desc, isUpcoming, link="", location="", tags=[]) {

  document.getElementById("modal").style.display = "flex";

  document.getElementById("modal-title").innerText = title;
  document.getElementById("modal-date").innerText = date;
  document.getElementById("modal-desc").innerText = desc;
  document.getElementById("modal-location").innerText = location;

  // TAGS
  let tagContainer = document.getElementById("modal-tags");
  tagContainer.innerHTML = "";

  tags.forEach(tag => {
    let span = document.createElement("span");
    span.innerText = tag;
    tagContainer.appendChild(span);
  });

  // REGISTER BUTTON
  let btn = document.getElementById("register-btn");
  let linkTag = document.getElementById("register-link");

  if (isUpcoming) {
    btn.style.display = "inline-block";
    linkTag.href = link;
  } else {
    btn.style.display = "none";
  }
}

// CLOSE MODAL
function closeModal() {
  document.getElementById("modal").style.display = "none";
}