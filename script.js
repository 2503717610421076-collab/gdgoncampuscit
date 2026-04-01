function openModal(title, date, desc, isUpcoming, link="", location="", tags=[]) {

  document.getElementById("modal").style.display = "flex";

  document.getElementById("modal-title").innerText = title;
  document.getElementById("modal-date").innerText = date;
  document.getElementById("modal-desc").innerText = desc;
  document.getElementById("modal-location").innerText = location;

  let tagContainer = document.getElementById("modal-tags");
  tagContainer.innerHTML = "";

  tags.forEach(tag => {
    let span = document.createElement("span");
    span.innerText = tag;
    tagContainer.appendChild(span);
  });

  let btn = document.getElementById("register-btn");
  let linkTag = document.getElementById("register-link");

  if (isUpcoming) {
    btn.style.display = "inline-block";
    linkTag.href = link;
  } else {
    btn.style.display = "none";
  }
}

function closeModal() {
  document.getElementById("modal").style.display = "none";
}
