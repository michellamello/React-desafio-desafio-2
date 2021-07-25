import styled from 'styled-components';


export const Paragrafo1 = styled.h1`
    font-size: 16pt;
    color: white;
    margin: 20px;
`

export const Container = styled.div`
    display: flex;
    align-items: left;
    flex-direction: column;
    background-color: #283747;
    min-height: 10vh;
`

export const ContainerContent = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    flex-direction: row;
    background-color: #283747;
    min-height: 100vh;
`

export const ProductDiv = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 300px;
    height: 450px;
    padding: 10px;
    background-color: #F3F3F3;
    border-radius: 10px;
    margin: 10px;
    box-shadow: 5px 5px 10px black;
`

export const CustomerName = styled.h2`
    font-size: 14pt;
    margin: 10px;
    color: #3C1874;
`

export const CustomerData = styled.p`
    font-size: 12pt;
    margin: 10px;
    color: #3C1874;
`

export const Button = styled.button`
    font-size: 12pt;
    margin: 10px;
    width: 150px;
    border-radius: 10px;
    padding: 10px;
    background-color: #932432;
    color: white;
    border: none;
`

export const Input = styled.input`
    padding: 10px;
    border-radius: 10px;
    margin: 10px;
    border: none;
`