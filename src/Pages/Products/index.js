import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import * as S from './style';

export default function Products() {
    const history = useHistory();

    const [unitPrice, setUnitPrice] = useState('');
    const [unitPrice2, setUnitPrice2] = useState('');
    const [unitPrice3, setUnitPrice3] = useState('');
    const [unitPrice4, setUnitPrice4] = useState('');
    const [stock, setStock] = useState('');
    const [stock2, setStock2] = useState('');
    const [stock3, setStock3] = useState('');
    const [stock4, setStock4] = useState('');

    function updateProduct() {
        const jsonData = {}

        jsonData['unitPrice'] = unitPrice;
        jsonData['stock'] = stock;

        var a = [];

        a = JSON.parse(localStorage.getItem('viewProducts')) || [];
        a.push(jsonData);
        localStorage.setItem('viewProducts', JSON.stringify(a));
    }

    function updateProduct2() {
        const jsonData = {}

        jsonData['unitPrice2'] = unitPrice2;
        jsonData['stock2'] = stock2;

        var a = [];

        a = JSON.parse(localStorage.getItem('viewProducts2')) || [];
        a.push(jsonData);
        localStorage.setItem('viewProducts2', JSON.stringify(a));
    }

    function updateProduct3() {
        const jsonData = {}

        jsonData['unitPrice3'] = unitPrice3;
        jsonData['stock3'] = stock3;

        var a = [];

        a = JSON.parse(localStorage.getItem('viewProducts3')) || [];
        a.push(jsonData);
        localStorage.setItem('viewProducts3', JSON.stringify(a));
    }

    function updateProduct4() {
        const jsonData = {}

        jsonData['unitPrice4'] = unitPrice4;
        jsonData['stock4'] = stock4;

        var a = [];

        a = JSON.parse(localStorage.getItem('viewProducts4')) || [];
        a.push(jsonData);
        localStorage.setItem('viewProducts4', JSON.stringify(a));
    }

    const onChangeUnitPrice = event => {
        localStorage.setItem('unitPrice', event.target.value);
        setUnitPrice(event.target.value);
        
    }

    const onChangeStock = event => {
        localStorage.setItem('stock', event.target.value);
        setStock(event.target.value);
        
    }

    const onChangeUnitPrice2 = event => {
        localStorage.setItem('unitPrice2', event.target.value);
        setUnitPrice2(event.target.value);
        
    }

    const onChangeStock2 = event => {
        localStorage.setItem('stock2', event.target.value);
        setStock2(event.target.value);
        
    }

    const onChangeUnitPrice3 = event => {
        localStorage.setItem('unitPrice3', event.target.value);
        setUnitPrice3(event.target.value);
        
    }

    const onChangeStock3 = event => {
        localStorage.setItem('stock3', event.target.value);
        setStock3(event.target.value);
        
    }

    const onChangeUnitPrice4 = event => {
        localStorage.setItem('unitPrice4', event.target.value);
        setUnitPrice4(event.target.value);
        
    }

    const onChangeStock4 = event => {
        localStorage.setItem('stock4', event.target.value);
        setStock4(event.target.value);
        
    }

    return (
        <S.Container>
            <div>
                <S.Paragrafo1>
                    Produtos
                </S.Paragrafo1>
            </div>
            <div>
                <S.Button onClick={() => history.goBack()}>Voltar</S.Button>
            </div>
            <S.ContainerContent>
            <S.ProductDiv>
            <h2>Produto 1</h2>
                <p>Descrição: Lorem Ipsum Dolor</p>
                <p>Valor unitário: R$ {unitPrice}</p>
                <p>Estoque: {stock} unidades</p>
                <p>Valor estoque: R$ {unitPrice * stock}</p>
                <S.Input onChange={onChangeStock} type='number' min='0' placeholder='Quantidade'></S.Input>
                <S.Input onChange={onChangeUnitPrice} placeholder='Valor (R$)'></S.Input>
                <S.Button onClick={updateProduct}>Salvar</S.Button>
            </S.ProductDiv>
            <S.ProductDiv>
                <h2>Produto 2</h2>
                <p>Descrição: Lorem Ipsum Dolor</p>
                <p>Valor unitário: R$ {unitPrice2}</p>
                <p>Estoque: {stock2} unidades</p>
                <p>Valor estoque: R$ {unitPrice2 * stock2}</p>
                <S.Input onChange={onChangeStock2} type='number' min='0' placeholder='Quantidade'></S.Input>
                <S.Input onChange={onChangeUnitPrice2} placeholder='Valor (R$)'></S.Input>
                <S.Button onClick={updateProduct2}>Salvar</S.Button>
            </S.ProductDiv>
            <S.ProductDiv>
            <h2>Produto 3</h2>
                <p>Descrição: Lorem Ipsum Dolor</p>
                <p>Valor unitário: R$ {unitPrice3}</p>
                <p>Estoque: {stock3} unidades</p>
                <p>Valor estoque: R$ {unitPrice3 * stock3}</p>
                <S.Input onChange={onChangeStock3} type='number' min='0' placeholder='Quantidade'></S.Input>
                <S.Input onChange={onChangeUnitPrice3} placeholder='Valor (R$)'></S.Input>
                <S.Button onClick={updateProduct3}>Salvar</S.Button>
            </S.ProductDiv>
            <S.ProductDiv>
                <h2>Produto 4</h2>
                <p>Descrição: Lorem Ipsum Dolor</p>
                <p>Valor unitário: R$ {unitPrice4}</p>
                <p>Estoque: {stock4} unidades</p>
                <p>Valor estoque: R$ {unitPrice4 * stock4}</p>
                <S.Input onChange={onChangeStock4} type='number' min='0' placeholder='Quantidade'></S.Input>
                <S.Input onChange={onChangeUnitPrice4} placeholder='Valor (R$)'></S.Input>
                <S.Button onClick={updateProduct4}>Salvar</S.Button>
            </S.ProductDiv>
            </S.ContainerContent>
        </S.Container>
    )
}