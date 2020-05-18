import React, {Fragment} from 'react';
import {Image, Text} from 'react-native';
import estilo from './estilos';

const Foto = () => {
    return (
        <Fragment>  
            <Image 
                source={require("../../../res/images/alura.jpg")}
                style={estilo.image}
            />
            <Text>Descrição da Foto</Text>
        </Fragment>
    );
}

export default Foto;
