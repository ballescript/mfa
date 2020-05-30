let products = [
  ["Aceite Vegetal Kártamus 900ml", "Pieza"],
  ["Aceite Capullo 845ml", "Pieza"],
  ["Aceite Nutrioli 850ml", "Pieza"],
  ["Aceite Vegetal Maceite litro", "Pieza"],
  ["Aceituna Búfalo deshuesada 450gr", "Pieza"],
  ["Atún Mazatún 140gr", "Pieza"],
  ["Azúcar estándar Zulka kilo", "Pieza"],
  ["Caldo de pollo Knorr 1.5kg", "Pieza"],
  ["Champiñón rebanado Herdez 380gr", "Pieza"],
  ["Chícharos Herdez 400gr", "Pieza"],
  ["Chipotle La Costeña", "Pieza"],
  ["Fetuccine Barilla 500gr", "Pieza"],
  ["Granos de elote Herdez", "Pieza"],
  ["Harina los gallos kilo", "Pieza"],
  ["Jugo de naranja Jumex litro", "Pieza"],
  ["Jugo V8 340ml", "Pieza"],
  ["Leche Evaporada Carnation 360gr", "Pieza"],
  ["Leche Evaporada Carnation litro", "Pieza"],
  ["Leche Lala entera litro", "Pieza"],
  ["Manteca Inca kilo", "Pieza"],
  ["Maseca kilo", "Pieza"],
  ["Mayonesa McCormick 725gr", "Pieza"],
  ["Media crema Nestlé 225gr", "Pieza"],
  ["Media crema Nestlé litro", "Pieza"],
  ["Mole Doña Maria", "Pieza"],
  ["Nescafé Dolca 170gr", "Pieza"],
  ["Pasta Codito Vesta 160gr", "Pieza"],
  ["Pasta Espagueti Vesta 160gr", "Pieza"],
  ["Pimiento morrón Corina en tiras 800gr", "Pieza"],
  ["Puré de tomate condimentado Del Fuerte 210gr", "Pieza"],
  ["Puré de tomate condimentado Del Fuerte litro", "Pieza"],
  ["Sal Bahía fina bote 737gr", "Pieza"],
  ["Sal Bahía fina kilo", "Pieza"],
  ["Sal gruesa Mar de Cortez kilo", "Pieza"],
  ["Salsa casera Herdez 210gr", "Pieza"],
  ["Salsa Catsup Embassa kilo", "Pieza"],
  ["Salsa del pato 225gr", "Pieza"],
  ["Salsa Huichol 190ml", "Pieza"],
  ["Salsa ranchera Clemente Jacques 210gr", "Pieza"],
  ["Salsa Sonora litro", "Pieza"],
  ["Salsa soya pekín litro", "Pieza"],
  ["Salsa tabasco 60ml", "Pieza"],
  ["Salsa Valentina 370ml", "Pieza"],
  ["Té Klass en polvo 560gr", "Pieza"],
  ["Vinagre blanco la costeña litro", "Pieza"],
  ["Cerdo-adobada", "Kilo"],
  ["Cerdo-cabeza de lomo", "Kilo"],
  ["Cerdo-chuleta", "Kilo"],
  ["Cerdo-codillo", "Kilo"],
  ["Cerdo-costilla especial", "Kilo"],
  ["Cerdo-espaldilla", "Kilo"],
  ["Cerdo-manteca", "Litro"],
  ["Cerdo-pierna de puerco", "Kilo"],
  ["Pescado-tilapia", "Kilo"],
  ["Pollo-pechuga de pollo sin hueso", "Kilo"],
  ["Pollo-piernil y muslo de pollo", "Kilo"],
  ["Res-aldilla", "Kilo"],
  ["Res-bisteck", "Kilo"],
  ["Res-cachete", "Kilo"],
  ["Res-chambarete", "Kilo"],
  ["Res-chicharrón", "Kilo"],
  ["Res-costilla cargada", "Kilo"],
  ["Res-costilla rib", "Kilo"],
  ["Res-hígado", "Kilo"],
  ["Res-hueso vertebra", "Kilo"],
  ["Res-lengua", "Kilo"],
  ["Res-paleta", "Kilo"],
  ["Res-palomilla", "Kilo"],
  ["Res-panza", "Kilo"],
  ["Res-pata", "Kilo"],
  ["Res-pecho", "Kilo"],
  ["Res-rollo norteño", "Kilo"],
  ["Res-carne para cocer", "Kilo"],
  ["Res-carne molida", "Kilo"],
  ["Res-Diezmillo", "Kilo"],
  ["Estropajo de alambre jumbo", "Pieza"],
  ["Bolsa negra a granel", "Kilo"],
  ["Cloralex 250ml", "Pieza"],
  ["Cloralex 3.75lt", "Pieza"],
  ["Fabuloso naranja litro", "Pieza"],
  ["Fibra verde con esponja", "Pieza"],
  ["Jabón Axion en polvo 500gr", "Pieza"],
  ["Jabón multiusos en polvo Foca 250gr", "Pieza"],
  ["Papel higiénico Adorable", "Pieza"],
  ["Papel higiénico Vogue", "Pieza"],
  ["Pinol 250ml", "Pieza"],
];

let html =
  "<div class='navbar'><p class='subt'>Abarrotes, carnes y<br/>artículos de limpieza</p></div>";
products.forEach((p, i) => {
  html +=
    "<div class='parent'>" +
    "<p>" +
    "<div class='left'>" +
    p[0] +
    "<br/>" +
    "<input type='text' placeholder='notas' class='notas' id='n" +
    i +
    "'>" +
    "</div>" +
    "<div class='nowrap'>" +
    "<div class='right'>" +
    "<button onclick='this.parentNode.querySelector(\"#p" +
    i +
    "\").stepDown()'>" +
    "-" +
    "</button>" +
    "<input type='number' id='p" +
    i +
    "' value='0' min='0' size='2' />" +
    "<button onclick='this.parentNode.querySelector(\"#p" +
    i +
    "\").stepUp()'>" +
    "+" +
    "</button>" +
    "<br/>" +
    "<span class='presentacion'>" +
    p[1] +
    "</span>" +
    "</div>" +
    "</div>" +
    "</p>" +
    "<hr/>" +
    "</div>";
});

document.getElementById("list").innerHTML = html;

function copyList() {
  let finalList = "";
  let bottomHTML = "<p class='alert'>Texto copiado:</p>";
  for (var i = 0; i < products.length; i++) {
    let elm = "p" + i;
    let nelm = "n" + i;
    let val = document.getElementById(elm).value;
    let nval = document.getElementById(nelm).value;
    if (val > 1) {
      finalList +=
        products[i][0] +
        "      " +
        val +
        " " +
        products[i][1] +
        "s      " +
        nval +
        "\n";
      bottomHTML +=
        products[i][0] +
        "&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;" +
        val +
        " " +
        products[i][1] +
        "s";
      if (nval !== "") {
        bottomHTML +=
          "<br/>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;" + nval + "<br/>";
      } else {
        bottomHTML += "<br/>";
      }
    } else if (val > 0) {
      finalList +=
        products[i][0] +
        "      " +
        val +
        " " +
        products[i][1] +
        "      " +
        nval +
        "\n";
      bottomHTML +=
        products[i][0] +
        "&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;" +
        val +
        " " +
        products[i][1];
      if (nval !== "") {
        bottomHTML +=
          "<br/>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;" + nval + "<br/>";
      } else {
        bottomHTML += "<br/>";
      }
    }
  }
  document.getElementById("bottom").innerHTML = bottomHTML;

  copyFinalList(finalList);
}
function copyFinalList(finalList) {
  const textArea = document.createElement("textarea");

  textArea.value = finalList;
  document.body.appendChild(textArea);
  textArea.select();
  document.execCommand("copy");
  document.body.removeChild(textArea);
}
window.onbeforeunload = function (event) {
  return this.confirm();
};
