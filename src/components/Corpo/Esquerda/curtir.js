import React from 'react';

export default function Curtir(){
  let [valor, setValor] = React.useState("heart-outline");
  function contar () {
    setValor(valor = "heart");
  }
  return (
    <ion-icon name={valor} onClick={contar}></ion-icon>
  );
}