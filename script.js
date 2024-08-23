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
                texto: "Você apertaria o botão se ele garantisse que todas as pessoas no mundo teriam suas necessidades básicas atendidas (alimentação, saúde, educação)",mas, em troca, você perderia a capacidade de fazer novas amizades?  
                afirmacao: "mas, em troca, você perderia a capacidade de fazer novas amizades?  ",
            },
            {
                texto: "Você apertaria o botão se ele garantisse que a corrupção fosse erradicada em todos os níveis governamentais e empresariais",
                afirmacao: "mas, em troca, todas as redes sociais e plataformas de comunicação digital fossem fechadas?  ",
            },
        ]
    },
    {
        enunciado: "No âmbito ambiental, você prefere:",
        alternativas: [
            {
                texto: "Você apertaria o botão se ele garantisse a eliminação total da poluição do ar e da água em todo o mundo",
                afirmacao: "mas, em troca, você teria que reduzir drasticamente seu consumo pessoal de eletricidade e transporte?",
            },
            {
                texto: "Você apertaria o botão se ele garantisse a restauração completa dos ecossistemas marinhos e a proteção das espécies ameaçadas",
                afirmacao: "mas, em troca, você precisaria viver em uma sociedade com restrições severas à produção de alimentos de origem animal?  ",
            },
        ]
    },
    {
        enunciado: "No âmbito tecnológico, você prefere:",
        alternativas: [
            {
                texto: "Você apertaria o botão se ele garantisse a eliminação de todas as falhas de segurança cibernética e ataques hackers em todo o mundo",
                afirmacao: "mas, em troca, você teria que aceitar a implementação de uma vigilância constante em todos os dispositivos conectados à internet?",
            },
            {
                texto: "Você apertaria o botão se ele garantisse que todas as inovações tecnológicas futuras fossem voltadas exclusivamente para o bem-estar e a sustentabilidade global",
                afirmacao: "mas, em troca, você teria que abrir mão da possibilidade de desenvolvimento tecnológico individual ou personalização de dispositivos?",
            },
        ]
    },
]

let atual = 0;
let perguntaAtual;

function mostraPergunta (){
    perguntaAtual = perguntas[atual];
    caixaPerguntas.textContent = perguntaAtual.enunciado;
    caixaAlternativas.textContent ="";
    mostraAlternativa();
}

function mostraAlternativa (){
    for (const pergunta of perguntaAtual.alternativas) {
       const botaoAlternativa = document.createElement('button');
       botaoAlternativa.textContent = pergunta.texto;
       botaoAlternativa.addEventListener("click", function(){
        atual++;
        mostraPergunta();
       })
       caixaAlternativas.appendChild(botaoAlternativa);
    }
}

mostraPergunta();
