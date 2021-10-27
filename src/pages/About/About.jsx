import React from 'react';
import './About.scss';

const About = () => {
    return (
        <div className="page">
            <img src="../../assets/images/sb-profile.jpeg" />
            <div className="title">
                <span className="highlight">SUSANA BASTOS</span>
                <span className="subtitle">É REFERÊNCIA EM HIPNOTERAPIA EM PORTUGAL E LUXEMBURGO</span>
            </div>
            <div className="content">
                <div className="main">
                    <span className="paragraph">Nascida em Benavente, Portugal, é uma mãe guerreira. Criou sozinha seus 2 filhos, com muito amor, espírito de sacrifício e total dedicação perante uma história de vida complicada, onde perdeu  tudo o que construiu por três vezes, levantado-se e seguindo sempre em frente, com a força e coragem que a caracteriza, ressurgindo das cinzas sempre sozinha, como uma autêntica Fénix!</span>
                    <span className="paragraph">Ao longo de 21 anos de aprendizagem, entre os seus estudos como autodidata, cursos, formações, workshops, atendimentos em consultório, Susana Bastos conseguiu reunir métodos, técnicas, e ferramentas cruciais e adequadas, que atuam de forma rápida e eficaz na resolução de problemas do foro mental, emocional, numa abordagem clínica e terapêutica que integra as mais variadas ferramentas de Hipnose, Programação Neurolinguistica e Inteligência Emocional.</span>
                    <span className="paragraph">É uma profissional altamente qualificada e possui uma dedicação extraordinária. Em sua jornada profissional, conta com milhares de casos de sucesso, tanto nas suas consultas presenciais, como on-line, cursos, workshops e palestras motivacionais.</span>
                    <span className="paragraph">Actualmente a residir no Luxemburgo, divide o seu trabalho entre Portugal e o Luxemburgo, país onde acabou  por se afirmar como uma das mais conceituadas Hipnoterapeutas e a Trainer número 1.</span>
                </div>
                <div className="extra">
                    <div className="subtitle">MISSÃO</div>
                    <span className="paragraph">Ajudar o próximo a ressignificar o passado, atingir o seu estado desejado no futuro e a ser FELIZ.</span>
                    <div className="subtitle">VISÃO</div>
                    <span className="paragraph">Ser feliz e realizada ao ajudar outras pessoas.</span>
                    <div className="subtitle">VALORES</div>
                    <span className="paragraph">Preza pela flexibilidade no atendimento, respeitando sempre o mapa mental do cliente. A realização ao motivar pessoas a viver com mais qualidade de pensamentos, emoções e sentimentos é o fator mais importante.</span>
                </div>
            </div>
        </div>
    )
}

export default About