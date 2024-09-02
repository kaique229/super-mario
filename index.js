const emailInput = document.getElementById('email');
const passwordInput = document.getElementById('senha');
const btnSend = document.getElementById('btnsend');

btnSend.addEventListener('click', function(event) {
    event.preventDefault();// Impede o comportamento padrão de envio de formulário

    const email = emailInput.value.trim();
    const password = passwordInput.value.trim();

   // Espaço reservado para validação do lado do servidor (AJAX ou envio de formulário)
    // Substitua isso pela sua lógica de validação real
    validador(email, password)
        .then(isValid => {
            if (isValid) {
           
        //Abre uma nova aba com a URL desejad
                window.open('jogo.html', '_self');
            } else {
                alert('Credenciais de login inválidas!');
            }
        })
        .catch(error => {
            console.error('Erro durante a validação:', error);
            alert('Ocorreu um erro. Por favor, tente novamente mais tarde');
        });
});

// Função de espaço reservado para validação do lado do servidor (substitua pela sua implementação)
function validador(email, password) {
    // Simula uma solicitação assíncrona (por exemplo, usando AJAX ou fetch)
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (email === 'adm' && password === '123') {
                resolve(true); //As credenciais são válidas
            } else {
                resolve(false); //As credenciais são inválidas
            }
        }, 500); //Simula o tempo de processamento do servidor
    });
}

