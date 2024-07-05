const url = "https://lojafalsaapi.com/produtos?ordenar=dec&limite=20";

fetch(url)
  .then(response => response.json())
  .then(data => {
    console.log("Lista de produtos:", data);
  })
  .catch(error => {
    console.error("Erro ao buscar produtos:", error);
  });
