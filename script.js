// teste para verificar se a seleção de botões e o evento de click estão funcionando corretamente
const buttons = document.querySelectorAll('.banner-buttons a');
buttons.forEach(button => {
    button.addEventListener('click', () => {
        console.log('Botão clicado!');
    });
});