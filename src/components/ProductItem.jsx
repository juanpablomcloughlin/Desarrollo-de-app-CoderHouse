import { Image, Pressable, StyleSheet, Text, useWindowDimensions } from "react-native";
import Card from "./Card";
import { useEffect, useState } from "react";

const ProductItem = ({product, navigation}) => {
  const [isPortrait, setIsPortrait] = useState(true)
  const [isLandscape,setIsLandscape] = useState(false)

  const {width, height} = useWindowDimensions()

  useEffect(()=> {
    if(height > width) {
      setIsPortrait(true)
      setIsLandscape(false)
    } else {
      setIsPortrait(false)
      setIsLandscape(true)
    }
  }, [height, width])  

  return (
    <>
      <Pressable onPress={() => navigation.navigate("ItemDetail", {id: product.id})}>
        <Card
          style={{
            marginVertical: 20,
            flexDirection: "row",
            justifyContent: "space-between",
          }}
        >
          <Text style={width < 400 ? styles.textMin : styles.text}>{product.title}</Text>
          <Image style={styles.image} source={{uri: product.images}} />
        </Card>
      </Pressable>
    </>
  );
};

export default ProductItem;

const styles = StyleSheet.create({
    text:{
        fontSize: 20,
        textAlign: 'center',
        width: '70%'
    },
    textMin:{
      fontSize: 14,
      width: "70%"
    },
    image:{
        width: 70,
        height: 70
    }
})