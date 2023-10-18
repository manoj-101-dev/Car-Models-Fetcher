const apiUrl = "https://parallelum.com.br/fipe/api/v1/carros/marcas/59/modelos";

const fetchModelsBtn = document.getElementById("fetch-models-btn");
const modelsContainer = document.getElementById("models-container");

fetchModelsBtn.addEventListener("click", () => {
  fetch(apiUrl)
    .then((response) => response.json())
    .then((modelsData) => {
      const carModels = modelsData.modelos;

      if (carModels.length === 0) {
        modelsContainer.innerHTML =
          "<p>No car models found for this brand.</p>";
      } else {
        const modelsList = carModels
          .map(
            (model) => `
                    <p>${model.nome}</p>
                    <hr>
                `
          )
          .join("");

        modelsContainer.innerHTML = modelsList;
      }
    })
    .catch((error) => {
      console.error("Error fetching data:", error);
    });
});
