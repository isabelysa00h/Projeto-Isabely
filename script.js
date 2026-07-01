const astros = [
  "Nebulosa de Órion - Um berçário de novas estrelas.",
  "Saturno - O planeta dos anéis.",
  "Júpiter - O maior planeta do Sistema Solar.",
  "Marte - Conhecido como o planeta vermelho."
];

const curiosidades = [
  "O Sol representa 99,86% da massa do Sistema Solar.",
  "A luz do Sol demora cerca de 8 minutos para chegar à Terra.",
  "Um dia em Vênus dura mais que um ano em Vênus.",
  "Júpiter possui dezenas de luas conhecidas."
];

let astro = Math.floor(Math.random() * astros.length);
let curiosidade = Math.floor(Math.random() * curiosidades.length);

document.getElementById("astro-dia").innerHTML =
`<strong>✶⋆.˚Astro do Dia</strong><p>${astros[astro]}</p>`;

document.getElementById("curiosidade").innerHTML =
`<strong>Curiosidade do Dia</strong><p>${curiosidades[curiosidade]}</p>`;