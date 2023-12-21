import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  FlatList,
  Image,
} from "react-native";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  addProductToCart,
  deleteCartItem,
  removeItems,
} from "../../NewRedux/CartSlice";

const Cart = () => {
  const cartItems = useSelector((state) => state.cart);
  const dispatch = useDispatch();

  return (
    <View>
      <FlatList
        data={cartItems}
        renderItem={({ item, index }) => (
          <View
            style={{
              flexDirection: "row",
              backgroundColor: "#fff",
              borderRadius: 20,
              width: 350,
              marginTop: 30,
              height: 120,
            }}
          >
            <Image
              style={{
                height: 100,
                width: 100,
                margin: 10,
                borderRadius: 20,
              }}
              source={{ uri: item.image }}
            />
            <View
              style={{
                flex: 1,
              }}
            >
              <Text
                style={{
                  fontSize: 18,
                  fontStyle: "italic",
                  fontWeight: "600",
                }}
              >
                Name:{item.name.substring(0, 20)}
              </Text>

              <Text
                style={{
                  fontSize: 20,
                  color: "green",
                }}
              >
                Price: {item.price}RS
              </Text>
              <View
                style={{
                  flexDirection: "row",
                  alignItems: "center",
                  margin: 5,
                }}
              >
                {item.qty == 0 ? null : (
                  <TouchableOpacity
                    style={{
                      borderRadius: 10,
                      backgroundColor: "orange",
                      height: 30,
                      width: 30,
                      alignItems: "center",
                      marginLeft: 10,
                    }}
                  >
                    <Text
                      style={{
                        fontSize: 15,
                        padding: 5,
                        textAlign: "center",
                        color: "white",
                      }}
                      onPress={() => {
                        dispatch(addProductToCart(item));
                      }} 
                    >
                      +
                    </Text>
                  </TouchableOpacity>
                )}
                {item.qty == 0 ? null : (
                  <Text
                    style={{
                      marginLeft: 10,
                    }}
                  >
                    {item.qty}
                  </Text>
                )}

                {item.qty == 0 ? null : (
                  <TouchableOpacity
                    style={{
                      borderRadius: 10,
                      backgroundColor: "orange",
                      height: 30,
                      width: 30,
                      alignItems: "center",
                      marginLeft: 10,
                    }}
                    onPress={() => {
                      if(item.qty >1){
                        dispatch(removeItems(item));
                      }else{
                        dispatch(deleteCartItem(item))
                      }
                      
                    }}
                  >
                    <Text
                      style={{
                        fontSize: 15,
                        padding: 5,
                        textAlign: "center",
                        color: "white",
                      }}
                    >
                      -
                    </Text>
                  </TouchableOpacity>
                )}
              </View>
            </View>
            <View></View>
          </View>
        )}
      />
    </View>
  );
};

export default Cart;

const styles = StyleSheet.create({});
