function contaOcorrencias(t) {
  let textarea = document.querySelector("#textarea").value.trim();
  textarea = textarea.toLowerCase();
  textarea = textarea.replace(/[^a-zA-Z ]/g, "");

  let arealist = document.querySelector("#frasesEcontradas");

  if (textarea.length > 0) {
    let array = [];
    let string = "";
    textarea += "  ";

    for (let i = 0; i < textarea.length; i++) {
      if (textarea[i] !== " ") {
        string += textarea[i];
      } else {
        array.push(string);
        string = "";
      }
    }
    array.pop();
    let hash = {};
    array.sort();
    array.forEach(function (i) {
      hash[i] = (hash[i] || 0) + 1;
    });

    let values = Object.entries(hash);

    arealist.innerHTML = '<ul class="list-group">';
    for (let i in values) {
      arealist.innerHTML += `<li class="list-group-item d-flex justify-content-between align-items-center"> ${values[i][0].toUpperCase().slice(0,1) + values[i][0].substring(1)} <span class="badge bg-primary rounded-pill">${values[i][1]}</span> </li>`;
    }
    arealist.innerHTML += "</ul>";

    console.log(hash);
  } else {
    alert("Preencha o campo de texto");
    document.querySelector("#textarea").focus();
  }
}

function limparCaixa() {
  document.querySelector("#textarea").value = "";
}

function setModalBotao(t) {
  let textarea = document.querySelector("#textarea").value.trim();
  if (textarea.length > 0) {
    t.setAttribute("data-bs-toggle", "modal");
    t.setAttribute("data-bs-target", "#exampleModal");
  }
}
