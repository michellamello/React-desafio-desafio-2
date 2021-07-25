import React, { useState } from 'react';
import * as S from './style';
import { useHistory } from 'react-router-dom';

export default function App() {
    const history = useHistory();
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [phone, setPhone] = useState('');
    const [CEP, setCEP] = useState('');
    const [number, setNumber] = useState('');
    const [complement, setComplement] = useState('');
    
    var cepData = '';

    const onChangeName = event => {
        localStorage.setItem('name', event.target.value);
        setName(event.target.value);
    }
    
    const onChangeEmail = event => {
        localStorage.setItem('email', event.target.value);
        setEmail(event.target.value);
    }

    const onChangePhone = event => {
        localStorage.setItem('phone', event.target.value);
        setPhone(event.target.value);
    }

    const onChangeCEP = event => {
        localStorage.removeItem('cepData')
        localStorage.setItem('CEP', event.target.value);
        setCEP(event.target.value);
    }

    const onChangeNumber = event => {
        localStorage.setItem('number', event.target.value);
        setNumber(event.target.value);
    }

    const onChangeComplement = event => {
        localStorage.setItem('complement', event.target.value);
        setComplement(event.target.value);
    }

    async function handleCEPSearch() {
        localStorage.removeItem('cepData')
        if (CEP !== '') {
            const validaCep = /^[0-9]{8}$/;

            if (validaCep.test(CEP)) {
                try {
                    await fetch('https://viacep.com.br/ws/' + CEP + '/json/', {
                        method: 'GET',
                        credentials: 'same-origin',
                        headers: {Accept: 'application/json', 'Content-type': 'application/json'}
                    })
                    .then(res => res.json())
                    .then(json => localStorage.setItem('cepData', JSON.stringify(json)));
                
                    cepData = JSON.parse(localStorage.getItem('cepData'));

                    if (!(cepData === null || 'erro' in cepData || cepData.logradouro === undefined)) {
                        document.getElementById('endereco').value = (cepData.logradouro);
                        document.getElementById('bairro').value = (cepData.bairro);
                        document.getElementById('cidade').value = (cepData.localidade);
                        document.getElementById('uf').value = (cepData.uf);
                    }
                    else {
                        alert('CEP não encontrado.')
                    }

                } catch(e) {
                    alert(`Erro na pesquisa, por favor tente novamente. Erro: ${e}`);
                }
            }
            else {
                alert('Formato de CEP inválido.');
            }
        }
    }

    function handleSavePerson() {
        if (checkInput() === true){
            history.push('/list')        
        }
    }

    function checkInput() {
        if (name === '' || email === '' || phone === '' || CEP === '' || number === '') {
            alert('Todos os campos são obrigatórios.');
        } else {
            const jsonData = {}

            jsonData['name'] = name;
            jsonData['email'] = email;
            jsonData['phone'] = phone;
            jsonData['cepData'] = JSON.stringify(cepData);
            jsonData['number'] = number;
            jsonData['complement'] = complement;

            var a = []
            a = JSON.parse(localStorage.getItem('viewData')) || [];
            a.push(jsonData);
            localStorage.setItem('viewData', JSON.stringify(a));

            return true;
        }
    }
    
    return (
        <S.Container>
                <S.Paragrafo1>Novo cliente</S.Paragrafo1>
                <form>
                    <S.Field>
                        <S.Legend>Informações pessoais</S.Legend>
                            <S.Input placeholder='Nome completo' value={name} onChange={onChangeName}></S.Input>
                    </S.Field>
                    <S.Field>
                        <S.Legend>Contato</S.Legend>
                            <S.Input placeholder='Email' inputMode='email' autoComplete='email' value={email} onChange={onChangeEmail}></S.Input>
                            <S.Input placeholder='Telefone' inputMode='tel' autoComplete='tel' value={phone} onChange={onChangePhone}></S.Input>
                    </S.Field>
                        <S.Field>
                            <S.Legend>Entrega</S.Legend>
                                <S.Input placeholder='CEP' value={CEP} onChange={onChangeCEP}></S.Input>
                                <S.Button type='button' onClick={handleCEPSearch}>Buscar CEP</S.Button>
                        </S.Field>
                        <S.Field>
                            <S.Input id='endereco' placeholder='Endereço' disabled></S.Input>
                            <S.Input id='n-endereco' placeholder='Nº' value={number} onChange={onChangeNumber}></S.Input>
                            <S.Input id='complemento' placeholder='Complemento' value={complement} onChange={onChangeComplement}></S.Input>
                        </S.Field>
                        <S.Field>
                            <S.Input id='bairro' placeholder='Bairro' disabled></S.Input>
                            <S.Input id='cidade' placeholder='Cidade' disabled></S.Input>
                            <S.Input id='uf' placeholder='UF' disabled></S.Input>
                        </S.Field>
                        <S.Field>
                        <S.Button type='button' onClick={() => history.goBack()}>Voltar</S.Button>
                            <S.Button type='button' onClick={handleSavePerson}>Salvar</S.Button>
                        </S.Field>
                </form>
        </S.Container>
    )
}

