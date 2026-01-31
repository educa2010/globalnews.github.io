const menuBtn = document.getElementById("menuBtn");
const sidebar = document.getElementById("sidebar");
const materia = document.getElementById("materia");
const cadastro = document.getElementById("cadastro");

/* MENU ABRE NO HOVER */
menuBtn.addEventListener("mouseenter", () => sidebar.classList.add("active"));
sidebar.addEventListener("mouseleave", () => sidebar.classList.remove("active"));

/* NOTÍCIAS */
const noticias = {
  1: { t: "Cenário político gera debates internacionais", c: "Reuniões entre líderes discutem acordos globais, economia e segurança." },
  2: { t: "IA acelera mudanças no mercado", c: "Inteligência artificial redefine profissões e produtividade." },
  3: { t: "Mercados reagem a indicadores", c: "Dados recentes influenciaram positivamente bolsas internacionais." },
  4: { t: "Evento esportivo internacional", c: "Torneio reúne atletas e audiência global." }
};

function abrirNoticia(id) {
  document.getElementById("titulo").innerText = noticias[id].t;
  document.getElementById("texto").innerText = noticias[id].c;
  materia.style.display = "block";
  cadastro.style.display = "none";
  window.scrollTo(0, document.body.scrollHeight);
}

function fecharMateria() {
  materia.style.display = "none";
}

function mostrarNoticias(cat) {
  cadastro.style.display = "none";
  document.querySelectorAll(".card").forEach(card => {
    card.style.display =
      cat === "todas" || card.classList.contains(cat) ? "block" : "none";
  });
  sidebar.classList.remove("active");
}

/* CADASTRO WHATSAPP */
function abrirCadastro() {
  materia.style.display = "none";
  cadastro.style.display = "block";
  window.scrollTo(0, document.body.scrollHeight);
  sidebar.classList.remove("active");
}

function enviar() {
  const nome = document.getElementById("nome").value;
  const tel = document.getElementById("tel").value;
  const msg = `Cadastro Global News:%0ANome: ${nome}%0AWhatsApp: ${tel}`;
  window.open(`https://wa.me/5516993699410?text=${msg}`);
}
