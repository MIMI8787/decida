const caixaPrincipal = document.querySelector('.caixa-principal');
const caixaPerguntas = document.querySelector('.caixa-perguntas');
const caixaAlternativas = document.querySelector('.caixa-alternativas');
const caixaResultado = document.querySelector('.caixa-resultado');
const textoResultado = document.querySelector('.texto-resultado');

const perguntas = [
    {
        enunciado: "No âmbito social, você prefere:",
        alternativas: [
            {
                texto: "Que todas as pessoas no mundo teriam suas necessidades básicas atendidas (alimentação, saúde, educação), mas, em troca, você perderia a capacidade de fazer novas amizades ",
                afirmacao: "Você continua sem amigos e com desigualdade social erradicada :D",
            },
            {
                texto: "Que a corrupção fosse erradicada em todos os níveis governamentais e empresariais,mas, em troca, todas as redes sociais e plataformas de comunicação digital fossem fechadas?",
                afirmacao: " Agora a corrupção acabou e os governos e empresas estão mais juntos, e você está com a saúde mental ótima!  ",
            },
        ]
    },
    {
        enunciado: "No âmbito ambiental, você prefere:",
        alternativas: [
            {
                texto: "Garantir a eliminação total da poluição do ar e da água em todo o mundo,mas, em troca, você teria que reduzir drasticamente seu consumo pessoal de eletricidade e transporte?",
                afirmacao: "Agora você consome muito menos a internet e redes de tv e fazer coisas básicas está mais difícil, porém você nunca respirou tão bem na sua vida.  ",
            },
            {
                texto: "Garantir a restauração completa dos ecossistemas marinhos e a proteção das espécies ameaçadas?,mas, em troca, você precisaria viver em uma sociedade com restrições severas à produção de alimentos de origem animal? ",
                afirmacao: "Agora você consegue respirar melhor além de conseguir ver espécies de animais vivendo livres, e sua alimentação é saudável e equilibrada, mas talvez você sinta falta de produtos animais. ",
            },
        ]
    },
    {
        enunciado: "No âmbito tecnológico, você prefere:",
        alternativas: [
            {
                texto: "Garantir a eliminação de todas as falhas de segurança cibernética e ataques hackers em todo o mundo,mas, em troca, você teria que aceitar a implementação de uma vigilância constante em todos os dispositivos conectados à internet?",
                afirmacao: "Os sites estão mais seguros porém, você está desconfortável com uma pessoa vendo suas atividades íntimas ",
            },
            {
                texto: "Garantir que todas as inovações tecnológicas futuras fossem voltadas exclusivamente para o bem-estar e a sustentabilidade global,mas, em troca, você teria que abrir mão da possibilidade de desenvolvimento tecnológico individual ou personalização de dispositivos?",
                afirmacao: "o mundo está um lugar melhor, porém agora você só utiliza interfaces básicas e padrões dos aplicativos ",
            },
        ]
    },
]

let atual = 0;
let perguntaAtual;
let historiaFinal = "";

function mostraPergunta (){
    if(atual >= perguntas.length){
        mostraResultado();
        return;
    }
    perguntaAtual = perguntas[atual];
    caixaPerguntas.textContent = perguntaAtual.enunciado;
    caixaAlternativas.textContent ="";
    mostraAlternativa();
}

function mostraAlternativa (){
    for (const pergunta of perguntaAtual.alternativas) {
       const botaoAlternativa = document.createElement('button');
       botaoAlternativa.textContent = pergunta.texto;
       botaoAlternativa.addEventListener("click", ()=> respotaSelecionada(pergunta));
       caixaAlternativas.appendChild(botaoAlternativa);
    }
}

function respotaSelecionada(pergunta){
    const afirmacao = pergunta.afirmacao;
    historiaFinal += afirmacao + " ";
    atual++;
    mostraPergunta();
}

function mostraResultado(){
    caixaPerguntas.textContent = "Em resumo, você escolheu "
    caixaResultado.textContent = historiaFinal;
    caixaAlternativas.textContent = "";
}

mostraPergunta();
