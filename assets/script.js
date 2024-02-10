(function () {
  document.addEventListener("DOMContentLoaded", () => {
    const form = document.querySelector("form");
    //pega os inputs do form
    const inputsForm = form.querySelectorAll("input");
    inputsForm.forEach((inputForm) => {
      //quando o input atualizar
      inputForm.oninput = () => {
        //veja se são validos
        const inputsFormValidation = Array.from(inputsForm).map((input) => ({
          name: input.name,
          isValid: input.checkValidity(),
        }));
        if (
          inputsFormValidation.filter(
            (formValidation) => formValidation.isValid
          ).length === inputsForm.length
          //   inputsFormValidation.some(
          //     (formValidation) => !formValidation.isValid
          //   ) === false
        ) {
          //se forem todos validos ativa o submit
          form.querySelector("button").disabled = false;
        } else {
          //senão desativa o submit
          form.querySelector("button").disabled = true;
        }
      };
    });

    form.onsubmit = () => {
      const formData = new FormData(form);
      const userName = formData.get("username");
      const password = formData.get("password");
      alert(`${userName}: ${password}`);
    };
  });
})();
