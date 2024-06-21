async function pegarJson() {
    const response = await fetch('./produtos.json');

    const data = await response.json();

    console.log(data);
}

pegarJson();



