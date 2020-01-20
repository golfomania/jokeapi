/* elements */
document.getElementById("submit_btn").addEventListener("click", buttonClicked);
const howMany = document.getElementById("howMany");
const catExpl = document.getElementById("expCat");
const catNerd = document.getElementById("nerdCat");
const results = document.getElementById("results");

/* function buttonClicked */
function buttonClicked(e) {
  if (howMany.value === "") {
    console.log("empty");
    howMany.value = 1;
  }
  /* build API string */
  let catString = "";
  const catText = "?limitTo=";
  let categoryArr = [];
  if (catExpl.checked === true) {
    categoryArr.push("explicit");
  }
  if (catNerd.checked === true) {
    categoryArr.push("nerdy");
  }
  if (categoryArr.length > 0) {
    catString = catText;
  }
  let apiText = `https://api.icndb.com/jokes/random/${howMany.value}${catString}${categoryArr}`;

  console.log(apiText);

  /* start API call */
  const xhr = new XMLHttpRequest();
  xhr.open("GET", apiText, true);
  xhr.onload = function() {
    if (this.status === 200) {
      let jokes = JSON.parse(this.responseText);
      let insertHTML = "";
      jokes.value.forEach(
        el =>
          (insertHTML += `
      <div
      class="card green lighten-2 hoverable col s8 push-s2 card-content black-text"
      >
      <p>${el.joke}</p>
      </div>
      `)
      );
      results.innerHTML = insertHTML;
    }
  };
  xhr.send();
  e.preventDefault();
}
