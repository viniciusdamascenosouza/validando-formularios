import eUmCpf from "./valida-cpf.js";
import eMaiorDeIdade from "./valida-idade.js";

const camposDoFormulario = document.querySelectorAll("[required]");

camposDoFormulario.forEach((campo) => {
  campo.addEventListener("blur", () => verificaCampo(campo));
  campo.addEventListener("invalid", evento => evento.preventDefault());
});

function verificaCampo(campo) {
  if (campo.name == "cpf" && campo.value.length >= 11) {
    eUmCpf(campo);
  }
  if (campo.name == "aniversario" && campo.value != "") {
    eMaiorDeIdade(campo);
  }
  console.log(campo.validity);
}
