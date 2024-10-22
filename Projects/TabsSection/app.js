const tabs = document.querySelector(".tabs");
const btns = document.querySelectorAll(".button");
const articles = document.querySelectorAll(".content");

tabs.addEventListener("click", function (e)
{
  // Get the data-id attribute of the clicked button
  const id = e.target.dataset.id;

  // If a button was clicked (and not some other element within the tabs container)
  if (id) {
    // Remove the "live" class from all buttons
    btns.forEach(function (btn) {
      btn.classList.remove("live");
    });

    // Add the "live" class to the clicked button
    e.target.classList.add("live");

    // Hide all content articles
    articles.forEach(function (article) {
      article.classList.remove("live");
    });

    // Show the content article corresponding to the clicked button's data-id
    const element = document.getElementById(id);
    element.classList.add("live");
  }
});