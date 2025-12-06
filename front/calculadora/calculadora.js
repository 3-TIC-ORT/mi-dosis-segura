connect2Server();


const botonCalcular = document.querySelector("#botoncalcular");
const resultado = document.querySelector("#resultado");
const comidaelegida = document.getElementById("inputcomida");
const grupocomidaelegida = document.getElementById("grupocomidas");
const unidades = document.getElementById("unidad");
const cantidades = document.getElementById ("inputcantidad");
localStorage.getItem("nombreniño");
localStorage.getItem("apellidoniño"); 


const comidasydata = [
  {
    "Alimento": "Papa",
    "Tipo": "Vegetal",
    "Unidad": "Unidad"
  },
  {
    "Alimento": "Choclo en grano",
    "Tipo": "Vegetal",
    "Unidad": "Taza"
  },
  {
    "Alimento": "Choclo entero",
    "Tipo": "Vegetal",
    "Unidad": "Unidad"
  },
  {
    "Alimento": "Mandioca",
    "Tipo": "Vegetal",
    "Unidad": "Unidad"
  },
  {
    "Alimento": "Batata",
    "Tipo": "Vegetal",
    "Unidad": "Unidad"
  },
  {
    "Alimento": "Puré de batata",
    "Tipo": "Vegetal",
    "Unidad": "Taza"
  },
  {
    "Alimento": "Puré de papa",
    "Tipo": "Vegetal",
    "Unidad": "Taza"
  },
  {
    "Alimento": "Puré instantáneo",
    "Tipo": "Vegetal",
    "Unidad": "Cucharada"
  },
  {
    "Alimento": "Calabaza",
    "Tipo": "Vegetal",
    "Unidad": "Taza"
  },
  {
    "Alimento": "Zapallo",
    "Tipo": "Vegetal",
    "Unidad": "Taza"
  },
  {
    "Alimento": "Palta",
    "Tipo": "Vegetal",
    "Unidad": "Unidad"
  },
  {
    "Alimento": "Remolacha",
    "Tipo": "Vegetal",
    "Unidad": "Taza"
  },
  {
    "Alimento": "Zanahoria",
    "Tipo": "Vegetal",
    "Unidad": "Unidad"
  },
  {
    "Alimento": "Ananá",
    "Tipo": "Fruta Fresca",
    "Unidad": "Compotera"
  },
  {
    "Alimento": "Banana",
    "Tipo": "Fruta Fresca",
    "Unidad": "Unidad"
  },
  {
    "Alimento": "Cerezas",
    "Tipo": "Fruta Fresca",
    "Unidad": "Compotera"
  },
  {
    "Alimento": "Ciruelas",
    "Tipo": "Fruta Fresca",
    "Unidad": "Unidad"
  },
  {
    "Alimento": "Damascos",
    "Tipo": "Fruta Fresca",
    "Unidad": "Unidad"  },
  {
    "Alimento": "Duraznos",
    "Tipo": "Fruta Fresca",
    "Unidad": "Unidad"
  },
  {
    "Alimento": "Frutillas",
    "Tipo": "Fruta Fresca",
    "Unidad": "Taza"
  },
  {
    "Alimento": "Granada",
    "Tipo": "Fruta Fresca",
    "Unidad": "Taza"
  },
  {
    "Alimento": "Melón",
    "Tipo": "Fruta Fresca",
    "Unidad": "Rodaja"
  },
  {
    "Alimento": "Mandarina",
    "Tipo": "Fruta Fresca",
    "Unidad": "Unidad"
  },
  {
    "Alimento": "Mango",
    "Tipo": "Fruta Fresca",
    "Unidad": "Unidad"
  },
  {
    "Alimento": "Manzana",
    "Tipo": "Fruta Fresca",
    "Unidad": "Unidad"
  },
  {
    "Alimento": "Moras",
    "Tipo": "Fruta Fresca",
    "Unidad": "Compotera"
  },
  {
    "Alimento": "Naranja",
    "Tipo": "Fruta Fresca",
    "Unidad": "Unidad"
  },
  {
    "Alimento": "Peras",
    "Tipo": "Fruta Fresca",
    "Unidad": "Unidad"
  },
  {
    "Alimento": "Pomelo",
    "Tipo": "Fruta Fresca",
    "Unidad": "Unidad"
  },
  {
    "Alimento": "Sandía",
    "Tipo": "Fruta Fresca",
    "Unidad": "Compotera"
  },
  {
    "Alimento": "Uvas",
    "Tipo": "Fruta Fresca",
    "Unidad": "Unidad"
  },
  {
    "Alimento": "Kiwi",
    "Tipo": "Fruta Fresca",
    "Unidad": "Unidad"
  },
  {
    "Alimento": "Higos",
    "Tipo": "Fruta Fresca",
    "Unidad": "Unidad"
  },
  {
    "Alimento": "Kinotos",
    "Tipo": "Fruta Fresca",
    "Unidad": "Unidad"
  },
  {
    "Alimento": "Frambuesas",
    "Tipo": "Fruta Fresca",
    "Unidad": "Compotera"
  },
  {
    "Alimento": "Manzanas",
    "Tipo": "Fruta desecada",
    "Unidad": "Unidad"
  },
  {
    "Alimento": "Pasas de uva",
    "Tipo": "Fruta desecada",
    "Unidad": "Pocillo"
  },
  {
    "Alimento": "Frutas secas",
    "Tipo": "Fruta desecada",
    "Unidad": "Taza"
  },
  {
    "Alimento": "Puré de manzana",
    "Tipo": "Fruta en conserva",
    "Unidad": "Taza"
  },
  {
    "Alimento": "Ananá en lata dietético",
    "Tipo": "Fruta en conserva",
    "Unidad": "Rodaja"
  },
  {
    "Alimento": "Cóctel de frutas dietético",
    "Tipo": "Fruta en conserva",
    "Unidad": "Compotera"
  },
  {
    "Alimento": "Duraznos en lata dietéticos",
    "Tipo": "Fruta en conserva",
    "Unidad": "Unidad"
  },
  {
    "Alimento": "Avena cocida",
    "Tipo": "Cereal/Pasta",
    "Unidad": "Cucharada"
  },
  {
    "Alimento": "Almidón de maíz",
    "Tipo": "Cereal/Pasta",
    "Unidad": "Cucharada"
  },
  {
    "Alimento": "Harina de mandioca",
    "Tipo": "Cereal/Pasta",
    "Unidad": "Taza"
  },
  {
    "Alimento": "Arroz blanco",
    "Tipo": "Cereal/Pasta",
    "Unidad": "Cucharada"
  },
  {
    "Alimento": "Arroz integral",
    "Tipo": "Cereal/Pasta",
    "Unidad": "Cucharada"
  },
  {
    "Alimento": "Canelones",
    "Tipo": "Cereal/Pasta",
    "Unidad": "Unidad"
  },
  {
    "Alimento": "Panqueque",
    "Tipo": "Cereal/Pasta",
    "Unidad": "Unidad"
  },
  {
    "Alimento": "Ñoquis",
    "Tipo": "Cereal/Pasta",
    "Unidad": "Taza"
  },
  {
    "Alimento": "Ñoquis de sémola",
    "Tipo": "Cereal/Pasta",
    "Unidad": "Unidad"
  },
  {
    "Alimento": "Pastas cocidas",
    "Tipo": "Cereal/Pasta",
    "Unidad": "Taza"
  },
  {
    "Alimento": "Ravioles",
    "Tipo": "Cereal/Pasta",
    "Unidad": "Plato"
  },
  {
    "Alimento": "Capelettini",
    "Tipo": "Cereal/Pasta",
    "Unidad": "Taza"
  },
  {
    "Alimento": "Lámina de Lasagna",
    "Tipo": "Cereal/Pasta",
    "Unidad": "Lamina"
  },
  {
    "Alimento": "Lentejas ",
    "Tipo": "Legumbre",
    "Unidad": "Taza"
  },
  {
    "Alimento": "Porotos",
    "Tipo": "Legumbre",
    "Unidad": "Taza"
  },
  {
    "Alimento": "Garbanzos",
    "Tipo": "Legumbre",
    "Unidad": "Taza"
  },
  {
    "Alimento": "Milanesa de soja",
    "Tipo": "Legumbre",
    "Unidad": "Unidad"
  },
  {
    "Alimento": "Habas cocidas",
    "Tipo": "Legumbre",
    "Unidad": "Taza"
  },
  {
    "Alimento": "Pan blanco",
    "Tipo": "Pan",
    "Unidad": "Rodaja"
  },
  {
    "Alimento": "Pan integral",
    "Tipo": "Pan",
    "Unidad": "Unidad"
  },
  {
    "Alimento": "Pan de hamburguesa",
    "Tipo": "Pan",
    "Unidad": "Unidad"
  },
  {
    "Alimento": "Pan árabe",
    "Tipo": "Pan",
    "Unidad": "Unidad"
  },
  {
    "Alimento": "Sandwich de miga",
    "Tipo": "Pan",
    "Unidad": "Unidad"
  },
  {
    "Alimento": "Tortilla de maíz",
    "Tipo": "Pan",
    "Unidad": "Unidad"
  },
  {
    "Alimento": "Pan de salvado",
    "Tipo": "Pan",
    "Unidad": "Unidad"
  },
  {
    "Alimento": "Pan de pancho",
    "Tipo": "Pan",
    "Unidad": "Unidad"
  },
  {
    "Alimento": "Pan de fajitas",
    "Tipo": "Pan",
    "Unidad": "Unidad"
  },
  {
    "Alimento": "Pan francés en rodajas",
    "Tipo": "Pan",
    "Unidad": "Rodaja"
  },
  {
    "Alimento": "Pan pebete",
    "Tipo": "Pan",
    "Unidad": "Unidad"
  },
  {
    "Alimento": "Barra de cereal",
    "Tipo": "Cereal/Pasta",
    "Unidad": "Unidad"
  },
  {
    "Alimento": "Copitos azucarados",
    "Tipo": "Cereal/Pasta",
    "Unidad": "Taza"
  },
  {
    "Alimento": "Copos de maíz",
    "Tipo": "Cereal/Pasta",
    "Unidad": "Taza"
  },
  {
    "Alimento": "Granola",
    "Tipo": "Cereal/Pasta",
    "Unidad": "Taza"
  },
  {
    "Alimento": "Pochoclo dulce",
    "Tipo": "Cereal/Pasta",
    "Unidad": "Taza"
  },
  {
    "Alimento": "Pochoclo salado",
    "Tipo": "Cereal/Pasta",
    "Unidad": "Taza"  },
  {
    "Alimento": "Cuadradiitos de avena",
    "Tipo": "Cereal/Pasta",
    "Unidad": "Taza"
  },
  {
    "Alimento": "Galletas de agua",
    "Tipo": "Galletitas",
    "Unidad": "Unidad"  },
  {
    "Alimento": "Bizcochitos de grasa",
    "Tipo": "Galletitas",
    "Unidad": "Unidad"  },
  {
    "Alimento": "Galletas de arroz",
    "Tipo": "Galletitas",
    "Unidad": "Unidad"
  },
  {
    "Alimento": "Grisines",
    "Tipo": "Galletitas",
    "Unidad": "Unidad"  },
  {
    "Alimento": "Mini tostadas",
    "Tipo": "Galletitas",
    "Unidad": "Taza"
  },
  {
    "Alimento": "Galletas tipo bizcochitos",
    "Tipo": "Galletitas",
    "Unidad": "Taza"
  },
  {
    "Alimento": "Empanaditas de copetin",
    "Tipo": "Copetín/Salados varios",
    "Unidad": "Unidad"
  },
  {
    "Alimento": "Snacks",
    "Tipo": "Copetín/Salados varios",
    "Unidad": "Unidad"  },
  {
    "Alimento": "Papas fritas",
    "Tipo": "Copetín/Salados varios",
    "Unidad": "Paquete"
  },
  {
    "Alimento": "Maní",
    "Tipo": "Copetín/Salados varios",
    "Unidad": "Taza"
  },
  {
    "Alimento": "Papas fritas chicas",
    "Tipo": "Copetín/Salados varios",
    "Unidad": "Paquete"
  },
  {
    "Alimento": "Papas fritas grandes",
    "Tipo": "Copetín/Salados varios",
    "Unidad": "Paquete"
  },
  {
    "Alimento": "Pizza a la piedra",
    "Tipo": "Copetín/Salados varios",
    "Unidad": "Unidad"
  },
  {
    "Alimento": "Masa de tarta",
    "Tipo": "Copetín/Salados varios",
    "Unidad": "Unidad"
  },
  {
    "Alimento": "Tapa de empanada",
    "Tipo": "Copetín/Salados varios",
    "Unidad": "Unidad"
  },
  {
    "Alimento": "Galleta cuadrada dulce",
    "Tipo": "Galletitas dulces/Postres",
    "Unidad": "Unidad"  },
  {
    "Alimento": "Magdalena",
    "Tipo": "Galletitas dulces/Postres",
    "Unidad": "Unidad"
  },
  {
    "Alimento": "Budín de chocolate",
    "Tipo": "Galletitas dulces/Postres",
    "Unidad": "Rodaja"
  },
  {
    "Alimento": "Budín de vainilla",
    "Tipo": "Galletitas dulces/Postres",
    "Unidad": "Rodaja"
  },
  {
    "Alimento": "Medialuna",
    "Tipo": "Galletitas dulces/Postres",
    "Unidad": "Unidad"
  },
  {
    "Alimento": "Pan dulce",
    "Tipo": "Galletitas dulces/Postres",
    "Unidad": "Rodaja"
  },
  {
    "Alimento": "Scones grandes",
    "Tipo": "Galletitas dulces/Postres",
    "Unidad": "Unidad"
  },
  {
    "Alimento": "Palmerita",
    "Tipo": "Galletitas dulces/Postres",
    "Unidad": "Unidad"
  },
  {
    "Alimento": "Bizcohuelo",
    "Tipo": "Galletitas dulces/Postres",
    "Unidad": "Rodaja"
  },
  {
    "Alimento": "Galletas de arroz dulces",
    "Tipo": "Galletitas dulces/Postres",
    "Unidad": "Unidad"
  },
  {
    "Alimento": "Churros",
    "Tipo": "Galletitas dulces/Postres",
    "Unidad": "Unidad"
  },
  {
    "Alimento": "Leche descremada",
    "Tipo": "Lácteos",
    "Unidad": "Taza"
  },
  {
    "Alimento": "Leche en polvo",
    "Tipo": "Lácteos",
    "Unidad": "Cucharada"  },
  {
    "Alimento": "Yogurt bebible dietético",
    "Tipo": "Lácteos",
    "Unidad": "Vaso"
  },
  {
    "Alimento": "Yogurt bebible entero",
    "Tipo": "Lácteos",
    "Unidad": "Vaso"
  },
  {
    "Alimento": "Flan",
    "Tipo": "Lácteos",
    "Unidad": "Compotera"
  },
  {
    "Alimento": "Postre simple",
    "Tipo": "Lácteos",
    "Unidad": "Unidad"
  },
  {
    "Alimento": "Yogur dietético con granola",
    "Tipo": "Lácteos",
    "Unidad": "Unidad"
  },
  {
    "Alimento": "Yogur ditético con cereales",
    "Tipo": "Lácteos",
    "Unidad": "Unidad"
  },
  {
    "Alimento": "Yogur entero con cereales azucarados",
    "Tipo": "Lácteos",
    "Unidad": "Unidad"
  },
  {
    "Alimento": "Flan de vainilla",
    "Tipo": "Lácteos",
    "Unidad": "Unidad"
  },
  {
    "Alimento": "Flan de dulce de leche",
    "Tipo": "Lácteos",
    "Unidad": "Unidad"
  },
  {
    "Alimento": "Flan con caramelo",
    "Tipo": "Lácteos",
    "Unidad": "Compotera"
  },
  {
    "Alimento": "Postre dietético de chocolate",
    "Tipo": "Lácteos",
    "Unidad": "Unidad"
  },
  {
    "Alimento": "Chocolatada envasada",
    "Tipo": "Lácteos",
    "Unidad": "Vaso"
  },
  {
    "Alimento": "Chocolatada preparada",
    "Tipo": "Lácteos",
    "Unidad": "Vaso"
  },
  {
    "Alimento": "Yogur dietético con frutas",
    "Tipo": "Lácteos",
    "Unidad": "Unidad"
  },
  {
    "Alimento": "Yogur griego",
    "Tipo": "Lácteos",
    "Unidad": "Unidad"
  },
  {
    "Alimento": "Yogur con frutas y cereales",
    "Tipo": "Lácteos",
    "Unidad": "Vaso"
  },
  {
    "Alimento": "Azúcar",
    "Tipo": "Golosinas",
    "Unidad": "Cucharada"
  },
  {
    "Alimento": "Dulce compacto común",
    "Tipo": "Golosinas",
    "Unidad": "Unidad"
  },
  {
    "Alimento": "Dulce de leche común y dietético",
    "Tipo": "Golosinas",
    "Unidad": "Cucharada"
  },
  {
    "Alimento": "Gelatina común",
    "Tipo": "Golosinas",
    "Unidad": "Taza"
  },
  {
    "Alimento": "Miel",
    "Tipo": "Golosinas",
    "Unidad": "Cucharada"
  },
  {
    "Alimento": "Mermelada de fruta",
    "Tipo": "Golosinas",
    "Unidad": "Cucharada"  },
  {
    "Alimento": "Alfajor de chocolate con dulce de leche",
    "Tipo": "Golosinas",
    "Unidad": "Unidad"
  },
  {
    "Alimento": "Bananita cubierta de chocolate",
    "Tipo": "Golosinas",
    "Unidad": "Unidad"
  },
  {
    "Alimento": "Caramelos",
    "Tipo": "Golosinas",
    "Unidad": "Unidad"  },
  {
    "Alimento": "Barrita de chocolate y cereal dietética",
    "Tipo": "Golosinas",
    "Unidad": "Unidad"
  },
  {
    "Alimento": "Chocolate de taza",
    "Tipo": "Golosinas",
    "Unidad": "Unidad"
  },
  {
    "Alimento": "Chocolate en polvo",
    "Tipo": "Golosinas",
    "Unidad": "Cucharada"  },
  {
    "Alimento": "Merengue",
    "Tipo": "Golosinas",
    "Unidad": "Unidad"
  },
  {
    "Alimento": "Turrón de maní",
    "Tipo": "Golosinas",
    "Unidad": "Unidad"
  },
  {
    "Alimento": "Turrón de maní dulce",
    "Tipo": "Golosinas",
    "Unidad": "Unidad"
  },
  {
    "Alimento": "Huevo de pascua",
    "Tipo": "Golosinas",
    "Unidad": "Unidad"
  },
  {
    "Alimento": "Alfajor de galleta de arroz",
    "Tipo": "Golosinas",
    "Unidad": "Unidad"
  },
  {
    "Alimento": "Cucurucho tipo barquillo",
    "Tipo": "Golosinas",
    "Unidad": "Unidad"
  },
  {
    "Alimento": "Casata de tres gustos",
    "Tipo": "Helados",
    "Unidad": "Unidad"
  },
  {
    "Alimento": "Helado bombón",
    "Tipo": "Helados",
    "Unidad": "Unidad"
  },
  {
    "Alimento": "Helado",
    "Tipo": "Helados",
    "Unidad": "Unidad"
  },
  {
    "Alimento": "Cono de vainilla",
    "Tipo": "Helados",
    "Unidad": "Unidad"
  },
  {
    "Alimento": "Helado de agua en palito",
    "Tipo": "Helados",
    "Unidad": "Unidad"
  },
  {
    "Alimento": "Helado de crema en palito",
    "Tipo": "Helados",
    "Unidad": "Unidad"
  },
  {
    "Alimento": "Helado dietético",
    "Tipo": "Helados",
    "Unidad": "Taza"
  },
  {
    "Alimento": "Chipá",
    "Tipo": "Comidas típicas",
    "Unidad": "Unidad"
  },
  {
    "Alimento": "Empanada de humita",
    "Tipo": "Comidas típicas",
    "Unidad": "Unidad"
  },
  {
    "Alimento": "Empanadas",
    "Tipo": "Comidas típicas",
    "Unidad": "Unidad"
  },
  {
    "Alimento": "Humita en chala",
    "Tipo": "Comidas típicas",
    "Unidad": "Unidad"
  },
  {
    "Alimento": "Locro",
    "Tipo": "Comidas típicas",
    "Unidad": "Plato"
  },
  {
    "Alimento": "Tamales",
    "Tipo": "Comidas típicas",
    "Unidad": "Unidad"
  },
  {
    "Alimento": "Tortas fritas",
    "Tipo": "Comidas típicas",
    "Unidad": "Unidad"
  },
  {
    "Alimento": "Criollo o tortilla",
    "Tipo": "Comidas típicas",
    "Unidad": "Unidad"
  },
  {
    "Alimento": "Tortitas",
    "Tipo": "Comidas típicas",
    "Unidad": "Unidad"
  },
  {
    "Alimento": "Sushi tipo roll",
    "Tipo": "Comidas típicas",
    "Unidad": "Unidad"  },
  {
    "Alimento": "Sushi tipo nighiri",
    "Tipo": "Comidas típicas",
    "Unidad": "Unidad"
  },
  {
    "Alimento": "Ensalada rusa",
    "Tipo": "Comidas típicas",
    "Unidad": "Plato"
  },
  {
    "Alimento": "Milanesas",
    "Tipo": "Comidas típicas",
    "Unidad": "Unidad"
  },
  {
    "Alimento": "Gaseosa común",
    "Tipo": " Bebidas",
    "Unidad": "Vaso"
  },
  {
    "Alimento": "Jugo de naranja o pomelo",
    "Tipo": " Bebidas",
    "Unidad": "Vaso"
  },
  {
    "Alimento": "Jugo comercial",
    "Tipo": " Bebidas",
    "Unidad": "Vaso"
  },
  {
    "Alimento": "Jugo comercial dietético",
    "Tipo": " Bebidas",
    "Unidad": "Vaso"  }
];


comidaelegida.addEventListener ("input", () => {
  const nombrecomida = comidaelegida.value.trim().toLowerCase();
  const comida = comidasydata.find(c => c.Alimento.toLowerCase() === nombrecomida);

  if (comida) {
    grupocomidaelegida.value = comida.Tipo;
    unidades.value = comida.Unidad;
  }
})


function calculardatos() {
  // Preferir el usuario adulto guardado; si no existe, usar datos del niño
  const nombreAdulto = localStorage.getItem("nombreusuario") || localStorage.getItem("nombreniño");
  const apellidoAdulto = localStorage.getItem("apellidousuario") || localStorage.getItem("apellidoniño");
  const cantidadNum = parseInt(cantidades.value, 10) || 0;

  postEvent("Calculadora", {
    NOMBRE: nombreAdulto,
    APELLIDO: apellidoAdulto,
    comida: comidaelegida.value,
    CANTIDAD: cantidadNum,
  }, function (data) {
    const respuesta = data;
    resultado.innerText = `Dosis: ${respuesta}`;
  });
}




botonCalcular.addEventListener("click", calculardatos);
