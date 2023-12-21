import {
  StyleSheet,
  Text,
  View,
  FlatList,
  TouchableOpacity,
  Image,
} from "react-native";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { addProductToCart } from "../../NewRedux/CartSlice";
import { useNavigation } from "@react-navigation/native";

const Products = () => {
  const items = [
    {
      id: 1,
      name: "Jordon",
      qty: 0,
      price: 2000,
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS4G8UawdHQEqDnU0uF9uFIbaXGyuW5t-zIGKDxcPY23A_ePb8ukkpadfWtz9B6TswJBx4&usqp=CAU",
    },
    {
      id: 2,
      name: "Nike",
      qty: 0,
      price: 2500,
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS4G8UawdHQEqDnU0uF9uFIbaXGyuW5t-zIGKDxcPY23A_ePb8ukkpadfWtz9B6TswJBx4&usqp=CAU",
    },
    {
      id: 3,
      name: "Sneaker",
      qty: 0,
      price: 3500,
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS4G8UawdHQEqDnU0uF9uFIbaXGyuW5t-zIGKDxcPY23A_ePb8ukkpadfWtz9B6TswJBx4&usqp=CAU",
    },
  ];

  const cartItems = useSelector((state) => state.cart);
  console.log("added", cartItems);
  const dispatch = useDispatch();
  const navigation = useNavigation();



  const Total = () => {
    let total = 0;
    cartItems.map((item) => {
     total = total + item.price * item.qty
    });
    return total
  };
  
  return (
    <View>
      <FlatList
        data={items}
        
        renderItem={({ item }) => (
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
                {item.qty == 0 ? (
                  <TouchableOpacity
                    style={{
                      borderRadius: 10,
                      backgroundColor: "orange",
                      height: 35,
                      width: 80,
                      alignItems: "center",
                    }}
                    onPress={() => {
                      dispatch(addProductToCart(item));
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
                      Add to cart
                    </Text>
                  </TouchableOpacity>
                ) : null}

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
                    {"0"}
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
      <View
        style={{
          height: 80,
          width: "100%",
          backgroundColor: "white",
          top: "36%",
          flexDirection: "row",
          alignItems: "center",
        }}
      >
        <View
          style={{
            justifyContent: "center",
            alignItems: "center",
            width: "50%",
          }}
        >
          <Text style={{ fontWeight: "600" }}>
            {"added items" + "(" + cartItems.length + ")"}
          </Text>
          <Text>{"Total:" +Total()}</Text>
        </View>
        <View
          style={{
            justifyContent: "center",
            alignItems: "center",
            width: "50%",
          }}
        >
          <TouchableOpacity
            style={{
              alignItems: "center",
              justifyContent: "center",
              backgroundColor: "green",
              borderRadius: 20,
              width: "55%",
              height: 40,
            }}
            onPress={()=>{
                navigation.navigate('Cart')
            }}
          >
            <Text
              style={{
                color: "#ffff",
              }}
            >
              View Cart
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

export default Products;

const styles = StyleSheet.create({});
