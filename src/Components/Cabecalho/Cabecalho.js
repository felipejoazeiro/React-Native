import React, {Fragment} from 'react';
import { Text, Image, View } from 'react-native';

import estilo from './estilos'

const Cabecalho = ({nomeUsuario}) =>{
    return(
        <View style={estilo.cabecalho}>
            <Image 
                source={require("../../../res/images/alura.jpg")} 
                style = {estilo.fotoUsuario}
            />
            <Text>{nomeUsuario}</Text>
        </View>
    );
}

export default Cabecalho
