import type { NextPage } from 'next';
import Head from 'next/head';
import React from 'react';
import Canvas from '../components/Canvas';

const Home: NextPage = () => {
    return (
        <div className='max-h-full'>
            <Head>
                <title>Editor</title>
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <div className="absolute bottom-0 w-full h-[30%] md:top-0 md:right-0 md:min-h-full md:max-h-full md:w-[25%] bg-blue-500 overflow-auto">
                <div className="p-4">
                    <h3>Projeto</h3>
                    <p>
            Este projeto consiste na implementação de um canvas que permite a criação de grafos não dirigidos, com a possibilidade de execução de buscas não informadas como: busca em largura e busca em profundidade.
                    </p>
                </div>
                <div className="p-4">
                    <h3>Notas:</h3>
                    <ul className='list-disc p-4'>
                        <li>testado no edge, firefox e chrome</li>
                        <li>não tem suporte a touch screen</li>
                    </ul>
                </div>
                <div className='p-4'>
                    <h3>TODO:</h3>
                    <ul className='list-disc p-4'>
                        <li><s>Adicionar canvas a tela inteira;</s></li>
                        <li><s>Adicionar um novo nodo ao canvas;</s></li>
                        <li><s>Mover o nodo pelo canvas;</s></li>
                        <li><s>Apagar o nodo;</s></li>
                        <li><s>Conectar nodos;</s></li>
                        <li><s>Deslocar conteúdo do canvas;</s></li>
                        <li><s>Adicionar zoom ao canvas;</s></li>
                        <li><s>Permitir acesso acesso as funcionalidades por meio de botões;</s></li>
                        <li><s>Mudar o ponteiro do mouse conforme o tipo de funcionalidade;</s></li>
                        <li><s>Implementar buscas;</s></li>
                        <li><s>Implementar menu que permita controlar as seguintes opções da busca: tipo da busca, nodo inicial, nodo final, profundidade e velocidade;</s></li>
                        <li>Melhorar sinalização de uma busca bem sucedida;</li>
                        <li>Melhorar sinalização de uma busca mal sucedida;</li>
                        <li>Melhorar id dos nodos;</li>
                    </ul>
                </div>
            </div>
            <Canvas/>
        </div>
    );
    // return (
    //   <div className='max-h-full'>
    //     <Head>
    //       <title>Editor</title>
    //       <link rel="icon" href="/favicon.ico" />
    //     </Head>
    //     <div className="absolute bottom-0 w-full h-[30%] md:top-0 md:right-0 md:min-h-full md:max-h-full md:w-[25%] bg-blue-500 overflow-auto">
    //       <div className="p-4">
    //         <h3>Projeto</h3>
    //         <p>
    //           Este projeto consiste na implementação de um canvas que permite a criação de grafos não dirigidos, com a possibilidade de execução de buscas não informadas como: busca em largura e busca em profundidade.
    //         </p>
    //       </div>
    //       <div className="p-4">
    //         <h3>Notas:</h3>
    //         <ul className='list-disc p-4'>
    //           <li>testado no edge, firefox e chrome</li>
    //           <li>não tem suporte a touch screen</li>
    //         </ul>
    //       </div>
    //       <div className='p-4'>
    //         <h3>TODO:</h3>
    //         <ul className='list-disc p-4'>
    //           <li><s>Adicionar canvas a tela inteira;</s></li>
    //           <li><s>Adicionar um novo nodo ao canvas;</s></li>
    //           <li><s>Mover o nodo pelo canvas;</s></li>
    //           <li><s>Apagar o nodo;</s></li>
    //           <li><s>Conectar nodos;</s></li>
    //           <li><s>Deslocar conteúdo do canvas;</s></li>
    //           <li><s>Adicionar zoom ao canvas;</s></li>
    //           <li><s>Permitir acesso acesso as funcionalidades por meio de botões;</s></li>
    //           <li><s>Mudar o ponteiro do mouse conforme o tipo de funcionalidade;</s></li>
    //           <li><s>Implementar buscas;</s></li>
    //           <li><s>Implementar menu que permita controlar as seguintes opções da busca: tipo da busca, nodo inicial, nodo final, profundidade e velocidade;</s></li>
    //           <li>Melhorar sinalização de uma busca bem sucedida;</li>
    //           <li>Melhorar sinalização de uma busca mal sucedida;</li>
    //           <li>Melhorar id dos nodos;</li>
    //         </ul>
    //       </div>
    //     </div>
    //     <Canvas controller={controller}/>
    //   </div>
    // )
};

export default Home;
