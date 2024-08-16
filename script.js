const caixaPrincipal = document.querySelector('.caixa-principal');
const caixaPerguntas = document.querySelector('.caixa-perguntas');
const caixaAlternativas = document.querySelector('.caixa-alternativas');
const caixaResultado = document.querySelector('.caixa-resultado');
const textoResultado = document.querySelector('.texto-resultado');

const perguntas = [
    {
        enunciado: "No Âmbito social, voce prefere:",
        alternativas: [
            {
              texto: "Você apertaria o botão se ele garantisse que todas as pessoas no mundo teriam suas necessidades básicas atendidas (alimentação, saúde, educação)",
              afirmação:"mas, em troca, você perderia a capacidade de fazer novas amizades?  ",
            },
            {
                texto:"Você apertaria o botão se ele garantisse que a corrupção fosse erradicada em todos os níveis governamentais e empresariais",
                afirmação:"mas, em troca, todas as redes sociais e plataformas de comunicação digital fossem fechadas?  ",
            },
        ]
    },

    {
        enunciado: "No Âmbito tecnologico, voce prefere:",
        alternativas: [
            {
              texto: "Você apertaria o botão se ele garantisse a eliminação de todas as falhas de segurança cibernética e ataques hackers em todo o mundo",
              afirmação:"mas, em troca, você teria que aceitar a implementação de uma vigilância constante em todos os dispositivos conectados à internet?",
            },
            {
                texto:"Você apertaria o botão se ele garantisse que todas as inovações tecnológicas futuras fossem voltadas exclusivamente para o bem-estar e a sustentabilidade global",
                afirmação:"mas, em troca, você teria que abrir mão da possibilidade de desenvolvimento tecnológico individual ou personalização de dispositivos?",
            },
        ]
    },

{
        enunciado: "No Âmbito ambiental, voce prefere:",
        alternativas: [
            {
              texto: "Você apertaria o botão se ele garantisse a eliminação total da poluição do ar e da água em todo o mundo",
              afirmação:"mas, em troca, você teria que reduzir drasticamente seu consumo pessoal de eletricidade e transporte?  ",
            },
            {
                texto:"Você apertaria o botão se ele garantisse a restauração completa dos ecossistemas marinhos e a proteção das espécies ameaçadas",
                afirmação:" mas, em troca, você precisaria viver em uma sociedade com restrições severas à produção de alimentos de origem animal?  ",
            },
        ]
    },

]

let atual = 0;
let perguntaAtual;



