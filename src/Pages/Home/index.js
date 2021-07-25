import React, { useState } from 'react';
import * as S from './style';
import { useHistory } from 'react-router-dom';

export default function App() {
    const history = useHistory();

    function redirectClient() {
        history.push('/customers');
    }

    function redirectProduct() {
        history.push('/products');
    }

    return (
        <S.Container>
            <S.Paragrafo1>Desafio 2 - Gama Academy</S.Paragrafo1>
            <S.Button onClick={redirectClient}>Novo cliente</S.Button>  
            <S.Button onClick={redirectProduct}>Gestão de estoque</S.Button>  
        </S.Container>
    )
}

