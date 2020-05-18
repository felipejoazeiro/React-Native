import { Dimensions, StyleSheet } from "react-native";

const largura = Dimensions.get("screen").width;
const estilo = StyleSheet.create({
    image: {
        marginTop: 1,
        width: largura,
        height: largura
    },
});

export default estilo