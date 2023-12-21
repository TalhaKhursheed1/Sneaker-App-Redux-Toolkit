// import { StyleSheet, Text, View } from "react-native";
// import { NavigationContainer } from "@react-navigation/native";
// import { createStackNavigator } from "@react-navigation/stack";

// import Practice from "./src/screen/Practice";
// import Edit from "./src/screen/Edit";
// import Home from "./src/screen/Home";
// import Get from "./src/screen/Get";
// import GetId from "./src/screen/GetId";
// import Products from "./src/screen/Products";

// import { Provider, useSelector } from "react-redux";
// import { myStore } from "./NewRedux/Store";
// import Cart from "./src/screen/Cart";
// import Users from "./src/screen/Users";
// import AddUsers from "./src/screen/AddUsers";
// import LoginScreen from "./src/screen/LoginScreen";
// import { selectIsAuthenticated } from "./NewRedux/AuthSlice";

// const Stack = createStackNavigator();
// // const AuthStack = () => {
// //   const isAuthenticated = useSelector(selectIsAuthenticated);

// //   return (
// //     <Stack.Navigator>
// //       {isAuthenticated ? (
// //         <Stack.Screen name="Home" component={Home} />
// //       ) : (
// //         <Stack.Screen name="Login" component={LoginScreen} />
// //       )}
// //     </Stack.Navigator>
// //   );
// // };

// const AuthStack = ()=>{
//   const isAuthenticated = useSelector(selectIsAuthenticated);

//   return(

//     <Stack.Navigator screenOptions={{ headerShown: false }}>
//           <Stack.Screen name="Users" component={Users} />
//           <Stack.Screen name="AddUsers" component={AddUsers} />
//           <Stack.Screen name="Products" component={Products} />
//           <Stack.Screen name="Cart" component={Cart} />
//           <Stack.Screen name="GetID" component={GetId} />
//           <Stack.Screen name="Home" component={Home} />
//           <Stack.Screen name="Get" component={Get} />
//           <Stack.Screen name="Practice" component={Practice} />
//           <Stack.Screen name="Edit" component={Edit} />
//         </Stack.Navigator>
//   )
// }

// export default function App() {
//   return (
//     // <Provider store={myStore}>
//     //   <NavigationContainer>
//     //     <AuthStack/>
//     //   </NavigationContainer>
//     // </Provider>
//     // //
//     <NavigationContainer>
//     {isAuthenticated ? <LoginScreen/> : <AuthStack />}
//   </NavigationContainer>

//   );
// }
// export default function app(){
//   return(
//     <Provider  store={myStore}>
//      <App/>
//      </Provider>
//   )
// }

// // function AppWrap() {
// //   return (
// //     <Provider store={myStore}>
// //      <App/>
// //     </Provider>
// //   );
// // }

//   // <Stack.Navigator screenOptions={{ headerShown: false }}>
//   //         <Stack.Screen name="Users" component={Users} />
//   //         <Stack.Screen name="AddUsers" component={AddUsers} />
//   //         <Stack.Screen name="Products" component={Products} />
//   //         <Stack.Screen name="Cart" component={Cart} />
//   //         <Stack.Screen name="GetID" component={GetId} />
//   //         <Stack.Screen name="Home" component={Home} />
//   //         <Stack.Screen name="Get" component={Get} />
//   //         <Stack.Screen name="Practice" component={Practice} />
//   //         <Stack.Screen name="Edit" component={Edit} />
//   //       </Stack.Navigator>

import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import Practice from "./src/screen/Practice";
import Edit from "./src/screen/Edit";
import Home from "./src/screen/Home";
import Get from "./src/screen/Get";
import GetId from "./src/screen/GetId";
import Products from "./src/screen/Products";
import { Provider, useSelector } from "react-redux";
import { myStore } from "./NewRedux/Store";
import Cart from "./src/screen/Cart";
import Users from "./src/screen/Users";
import AddUsers from "./src/screen/AddUsers";
import LoginScreen from "./src/screen/LoginScreen";
import { selectIsAuthenticated } from "./NewRedux/AuthSlice";
import HomePage from "./src/screen/HomePage";
import Register from "./src/screen/Register";

const Stack = createStackNavigator();

const HomeStack = () => {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="HomePage" component={HomePage} />     
      <Stack.Screen name="Users" component={Users} />
      <Stack.Screen name="AddUsers" component={AddUsers} />
      <Stack.Screen name="Products" component={Products} />
      <Stack.Screen name="Cart" component={Cart} />
      <Stack.Screen name="GetID" component={GetId} />
      <Stack.Screen name="Home" component={Home} />
      <Stack.Screen name="Get" component={Get} />
      <Stack.Screen name="Practice" component={Practice} />
      <Stack.Screen name="Edit" component={Edit} />
    </Stack.Navigator>
  );
};

const AuthStack = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Login" component={LoginScreen} />
      <Stack.Screen name="Register" component={Register} />
    </Stack.Navigator>
  );
};

const App = () => {
  const isAuthenticated = useSelector(selectIsAuthenticated);

  return (
    <NavigationContainer>
    
      {isAuthenticated ? <HomeStack/> : <AuthStack />}

    </NavigationContainer>
  );
};

const AppWrap = () => {
  return (
    <Provider store={myStore}>
      <App />
    </Provider>
  );
};

export default AppWrap;
