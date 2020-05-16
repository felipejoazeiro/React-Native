import React, {Fragment} from 'react';
import { StyleSheet,Dimensions ,ScrollView,Text, Image, FlatList, View, StatusBar, SafeAreaView } from 'react-native';

const largura = Dimensions.get("screen").width;
const informacoes = [
  {usuario:"Ricardo"},
  {usuario:"Marina"},
  {usuario:"Ricardo"}
]
export default function App() {
  return (
    <ScrollView>
      <FlatList 
        data={informacoes}
        renderItem = {({item})=>
          <Fragment> 
          <Text>{item.usuario}</Text>
          <Image 
            source={require("./res/images/alura.jpg")}
            style={estilo.image}
          />  
        </Fragment>
        }
      />
    </ScrollView>
  );
}

const estilo = StyleSheet.create({
  image: {
    width: largura,
    height: largura
  },
});
