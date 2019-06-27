//TitleSite
const titleSite = {nomeSite: 'DNA-JS-Brasil'};
//Menu Lateral
const itens = [
    {link: 'Início', endereco: '#inicio'},
    {link: 'Sobre o DNA-JS', endereco: '#sobre'},
    {link: 'Instalação', endereco: '#instalacao'},
    {link: 'Hello World', endereco: '#helloWorld'},
    {link: 'Criando Listas', endereco: '#listas'},
    {link: 'Exibindo imagens', endereco: ''},
]; 
//Menu Topo
const topolinks = [
    {linkTopo: 'O projeto no Brasil', urlTopo: '#topo'},
    {linkTopo: 'Documentação oficial', urlTopo: 'https://dnajs.org/'},
    {linkTopo: 'Baixar UIKit-DNA', urlTopo: ''},
    {linkTopo: 'Quer contribuir ?', urlTopo: '#contribuicao'}
];
//Texts templates
const textArticles = [
    {title: 'Introdução ao DNA-JS', texto: 'O DNA-JS é uma biblioteca JavaScript que tem como função desenvolver interfaces semânticas e ajudar no desempenho do DOM.'},
];
//Return objetos
dna.clone('itens', itens);
dna.clone('titleSite', titleSite);
dna.clone('topolinks', topolinks);
dna.clone('textArticles', textArticles);
