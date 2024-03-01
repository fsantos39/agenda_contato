const form = document.getElementById('form-contatos');

const nome = [];
const telefone = [];

let linhas = ' ';

form.addEventListener( 'submit', function(e) {
    e.preventDefault();

    adicionaLinha();
    atualizaTabela();
    
})

function adicionaLinha() {
    
    const nomeContato = document.getElementById('nome-contato');
    const telContato = document.getElementById('tel-contato');

    if (nome.includes(nomeContato.value)) {
        alert(`O nome: ${nomeContato.value} já foi inserido!`);

        nomeContato.value = '';
        telContato.value = '';

    } else {
        nome.push(nomeContato.value);
        telefone.push (parseInt(telContato.value));
    
        let linha = '<tr>';
        linha += `<td>${nomeContato.value}</td>`;
        linha += `<td>${telContato.value}</td>`;
        linha += `</tr>`;
    
        linhas += linha;
    }

    nomeContato.value = '';
    telContato.value = '';

}

function atualizaTabela () {
    const corpoTabela = document.querySelector('tbody');
    corpoTabela.innerHTML = linhas;
}