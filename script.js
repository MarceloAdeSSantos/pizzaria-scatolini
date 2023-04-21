// teste para verificar se a seleção de botões e o evento de click estão funcionando corretamente
const buttons = document.querySelectorAll('.banner-buttons a');
buttons.forEach(button => {
    button.addEventListener('click', () => {
        console.log('Botão clicado!');
    });
});

/* script para manter a classe "active" ativada quando você clicar no botão, ou seja, agora o(a) usuário(a)
irá saber em que página ele(a) está, se baseando na cor em que os botões estão */
document.addEventListener('DOMContentLoaded', function () {
    const navLinks = document.querySelectorAll('.banner-buttons a');

    navLinks.forEach(function (link) {
        link.addEventListener('click', function (event) {
            event.preventDefault();
            navLinks.forEach(function (link) {
                link.classList.remove('active');
            });
            this.classList.add('active');
        });
    });
});

// seleciona todos os elementos com a classe "link-ajax"
var links = document.querySelectorAll(".link-ajax");

// adiciona o evento de clique em cada um dos elementos selecionados
links.forEach(function (link) {
    link.addEventListener("click", function (event) {
        event.preventDefault(); // previne o comportamento padrão do link
        var xhr = new XMLHttpRequest(); // cria um novo objeto XMLHttpRequest
        xhr.open("GET", link.getAttribute("href")); // define o método HTTP e o URL da página a ser carregada (pegando o valor do atributo "href" do link clicado)
        xhr.onload = function () { // define a função a ser chamada quando a resposta do servidor é recebida
            if (xhr.status === 200) { // verifica se a resposta é bem-sucedida
                document.querySelector("main").innerHTML = xhr.responseText; // atualiza o conteúdo do elemento "main" com o conteúdo da página carregada
            }
        };
        xhr.send(); // envia a requisição para o servidor
    });

});

// AEMCOSF