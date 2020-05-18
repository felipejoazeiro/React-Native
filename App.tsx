import React, {Fragment} from 'react';
import {
  StyleSheet,
  Dimensions,
  ScrollView,
  FlatList, 
  StatusBar
}from 'react-native';

import {Cabecalho} from './src/Components/Cabecalho'
import {Foto} from './src/Components/Foto';

const largura = Dimensions.get("screen").width;
const informacoes = [
  {id:1, usuario:"Ricardo"},
  {id:2, usuario:"Marina"},
  {id:3, usuario:"Ricardo"}
]
export default function App() {
  return (  
    
    <ScrollView>
      <StatusBar backgroundColor="transparent" barStyle="dark-content" />
      <FlatList
        data={informacoes}
        keyExtractor={(item, index)=>index.toString()}
        renderItem = {({item})=>
          <Fragment> 
          <Cabecalho nomeUsuario={item.usuario}/>
          <Foto />
        </Fragment>
        }
      />
    </ScrollView>
  );
}

const estilo = StyleSheet.create({
  image: {
    marginTop: 1,
    width: largura,
    height: largura
  },
});
