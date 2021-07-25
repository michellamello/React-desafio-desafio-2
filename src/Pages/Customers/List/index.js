import React from 'react';
import * as S from '../style';
import { useHistory } from 'react-router-dom';

export default function ListCustomers() {
    let customers = localStorage.getItem('viewData');
    let items = JSON.parse(customers);
    const history = useHistory();

    function redirectProduct() {
        history.push('/products')
    }

    return (
        <S.Container>
            <S.Paragrafo1>Clientes</S.Paragrafo1>
            <div>
                <S.Button onClick={() => history.goBack()}>Voltar</S.Button>
                <S.Button onClick={redirectProduct}>Estoque</S.Button>
            </div>
        {items.map(item => {
            let addressData = JSON.parse(item.cepData);

            return (
                <S.CustomerDiv>
                    <S.CustomerName>{item.name}</S.CustomerName>
                    <S.CustomerData>E-mail: {item.email}</S.CustomerData>
                    <S.CustomerData>Telefone: {item.phone}</S.CustomerData>
                    <S.CustomerData>CEP: {addressData.cep}</S.CustomerData>
                    <S.CustomerData>Endereço: {addressData.logradouro}</S.CustomerData>
                    <S.CustomerData>Número: {item.number}</S.CustomerData>
                    <S.CustomerData>Complemento: {item.complement}</S.CustomerData>
                    <S.CustomerData>Bairro: {addressData.bairro}</S.CustomerData>
                    <S.CustomerData>Cidade: {addressData.localidade}</S.CustomerData>
                    <S.CustomerData>UF: {addressData.uf}</S.CustomerData>
                </S.CustomerDiv>
            )
        })}
        </S.Container>
    )
}