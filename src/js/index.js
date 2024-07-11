const personagens = document.querySelectorAll('.personagem');
let isSpacePressed = false;

document.addEventListener('keydown', (event) => {
    if (event.code === 'Space') {
        isSpacePressed = true;
        updateCharacter(document.querySelector('.selecionado'));
    }
});

document.addEventListener('keyup', (event) => {
    if (event.code === 'Space') {
        isSpacePressed = false;
        updateCharacter(document.querySelector('.selecionado'));
    }
});

personagens.forEach((personagem) => {
    personagem.addEventListener('mouseenter', () => {

        if (window.innerWidth < 450) {
            window.scrollTo({ top: 0, behavior: "smooth" });
        }

        const personagemSelecionado = document.querySelector('.selecionado');
        personagemSelecionado.classList.remove('selecionado');
        
        personagem.classList.add('selecionado');
        updateCharacter(personagem);
    });
});

function updateCharacter(personagem) {
    const imagemPersonagemGrande = document.querySelector(".personagem-grande");
    const idPersonagem = personagem.attributes.id.value;
    const nomePersonagem = document.getElementById('nome-personagem');
    const descricaoPersonagem = document.getElementById('descricao-personagem');

    if (idPersonagem === 'iori' && isSpacePressed) {
        imagemPersonagemGrande.src = `./src/images/png-iori-alt.png`;
        nomePersonagem.innerText = "Iori Possuído";
        descricaoPersonagem.innerText = "A transformação de Iori em Orochi ocorre quando ele é dominado pela maldição de Orochi, uma força ancestral e maligna. Seus poderes são amplificados.";
    } else {
        imagemPersonagemGrande.src = `./src/images/png-${idPersonagem}.png`;
        nomePersonagem.innerText = personagem.getAttribute('data-name');
        descricaoPersonagem.innerText = personagem.getAttribute('data-description');
    }
}
