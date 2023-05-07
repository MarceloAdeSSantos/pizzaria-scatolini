// Teste para verificar se a seleção de botões e o evento de click estão funcionando corretamente.
const buttons = document.querySelectorAll(".banner-buttons a");
buttons.forEach(button => {
    button.addEventListener("click", () => {
        console.log("Botão clicado!");
    });
});

// Código antigo ------------------------------------------------------------------------------------------

/* Script para manter a classe 'active' ativada quando você clicar no botão, ou seja, agora o(a) usuário(a)
irá saber em que página ele(a) está, se baseando na cor em que o botões estão (aqui no caso é vermelho). */

/*
document.addEventListener("DOMContentLoaded", () => {
    const navLinks = document.querySelectorAll(".banner-buttons a");

    navLinks.forEach(function (link) {
        link.addEventListener("click", function (event) {
            event.preventDefault();
            navLinks.forEach(function (link) {
                link.classList.remove("active");
            });
            this.classList.add("active");
        });
    });
});
*/


// Código antigo ------------------------------------------------------------------------------------------

/*
// Implementação do AJAX no projeto.
var links = document.querySelectorAll(".link-ajax");

// Adiciona o evento de clique em cada um dos elementos selecionados.
links.forEach(function (link) {
    link.addEventListener("click", function (event) {
        event.preventDefault(); // Previne o comportamento padrão do link.
        var xhr = new XMLHttpRequest(); // Cria um novo objeto XMLHttpRequest.
        xhr.open("GET", link.getAttribute("href")); // Define o método HTTP e o URL da página a ser carregada (pegando o valor do atributo 'href' do link clicado).
        xhr.onload = function () { // Define a função a ser chamada quando a resposta do servidor é recebida.
            if (xhr.status === 200) { // Verifica se a resposta é bem-sucedida.
                document.querySelector("main").innerHTML = xhr.responseText; // Atualiza o conteúdo do elemento 'main' com o conteúdo da página carregada.
            }
        };
        xhr.send(); // Envia a requisição para o servidor.
    });
});
*/

// Aguarda o documento HTML ser carregado antes de executar o código.
document.addEventListener("DOMContentLoaded", () => {

    // Seleciona todos os links dos botões do banner.
    const navLinks = document.querySelectorAll(".banner-buttons a");

    // Para cada botão do banner, adiciona um evento de clique.
    navLinks.forEach(function (link) {

        // Adiciona a classe "init" ao botão "Sobre Nós" se a página atual for a página inicial.
        if (link.getAttribute("href") === "./paginas/home.html") {
            link.classList.add("init");
        }

        // Adiciona um evento de clique para cada botão do banner.
        link.addEventListener("click", function (event) {
            event.preventDefault(); // Previne o comportamento padrão do link.

            // Remove a classe "init" e/ou "active" de todos os botões do banner.
            navLinks.forEach(function (link) {
                link.classList.remove("init");
                link.classList.remove("active");
            });

            // Adiciona a classe "active" ao botão clicado.
            this.classList.add("active");

            // Cria um objeto XMLHttpRequest para fazer uma requisição HTTP assíncrona.
            var xhr = new XMLHttpRequest();

            // Define o método HTTP e o URL da página a ser carregada (pegando o valor do atributo 'href' do link clicado).
            xhr.open("GET", link.getAttribute("href"));

            // Define a função a ser chamada quando a resposta do servidor é recebida.
            xhr.onload = function () {
                if (xhr.status === 200) { // Verifica se a resposta é bem-sucedida.
                    // Atualiza o conteúdo do elemento 'main' com o conteúdo da página carregada.
                    document.querySelector("main").innerHTML = xhr.responseText;
                }
            };

            // Envia a requisição para o servidor.
            xhr.send();
        });
    });
});