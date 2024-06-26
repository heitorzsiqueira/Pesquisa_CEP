function consultarCEP() {
    const cep = document.getElementById('cepInput').value;
    const resultDiv = document.getElementById('result');

    if (!cep) {
        resultDiv.innerHTML = '<p style="color: red;">Por favor, insira um CEP.</p>';
        return;
    }

    const url = `https://viacep.com.br/ws/${cep}/json/`;

    fetch(url)
        .then(response => response.json())
        .then(data => {
            if (data.erro) {
                resultDiv.innerHTML = '<p style="color: red;">CEP não encontrado.</p>';
                return;
            }

            resultDiv.innerHTML = `
                <p><strong>CEP:</strong> ${data.cep}</p>
                <p><strong>Logradouro:</strong> ${data.logradouro}</p>
                <p><strong>Bairro:</strong> ${data.bairro}</p>
                <p><strong>Cidade:</strong> ${data.localidade}</p>
                <p><strong>Estado:</strong> ${data.uf}</p>
            `;
        })
        .catch(error => {
            resultDiv.innerHTML = '<p style="color: red;">Ocorreu um erro ao consultar o CEP.</p>';
            console.error('Erro:', error);
        });
}
