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
                texto: "Que todas as pessoas no mundo teriam suas necessidades básicas atendidas (alimentação, saúde, educação),mas, em troca, você perderia a capacidade de fazer novas amizades?  ",
                afirmacao: "mas, em troca, você perderia a capacidade de fazer novas amizades?  ",
            },
            {
                texto: "Que a corrupção fosse erradicada em todos os níveis governamentais e empresariais,mas, em troca, todas as redes sociais e plataformas de comunicação digital fossem fechadas?",
                afirmacao: "mas, em troca, todas as redes sociais e plataformas de comunicação digital fossem fechadas?  ",
            },
        ]
    },
    {
        enunciado: "No âmbito ambiental, você prefere:",
        alternativas: [
            {
                texto: "Garantir a eliminação total da poluição do ar e da água em todo o mundo,mas, em troca, você teria que reduzir drasticamente seu consumo pessoal de eletricidade e transporte?",
                afirmacao: "mas, em troca, você teria que reduzir drasticamente seu consumo pessoal de eletricidade e transporte?",
            },
            {
                texto: "Garantir a restauração completa dos ecossistemas marinhos e a proteção das espécies ameaçadas,mas, em troca, você precisaria viver em uma sociedade com restrições severas à produção de alimentos de origem animal? ",
                afirmacao: "mas, em troca, você precisaria viver em uma sociedade com restrições severas à produção de alimentos de origem animal?  ",
            },
        ]
    },
    {
        enunciado: "No âmbito tecnológico, você prefere:",
        alternativas: [
            {
                texto: "Garantir a eliminação de todas as falhas de segurança cibernética e ataques hackers em todo o mundo,mas, em troca, você teria que aceitar a implementação de uma vigilância constante em todos os dispositivos conectados à internet?",
                afirmacao: "mas, em troca, você teria que aceitar a implementação de uma vigilância constante em todos os dispositivos conectados à internet?",
            },
            {
                texto: "Garantir que todas as inovações tecnológicas futuras fossem voltadas exclusivamente para o bem-estar e a sustentabilidade global,mas, em troca, você teria que abrir mão da possibilidade de desenvolvimento tecnológico individual ou personalização de dispositivos?",
                afirmacao: "mas, em troca, você teria que abrir mão da possibilidade de desenvolvimento tecnológico individual ou personalização de dispositivos?",
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

function respotaSelecionada(){
    const afirmacao = perguntas.afirmacao;
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
