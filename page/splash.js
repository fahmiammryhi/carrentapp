import React, { Component } from "react";
import Constants from "expo-constants";
import { Image, VStack, Center, NativeBaseProvider } from "native-base";

export default class Front extends Component {
  componentDidMount() {
    setTimeout(() => {
      this.props.navigation.navigate("Stack");
    }, 5000);
  }
  
  render() {
    return (
      <NativeBaseProvider bg="#00000">
        <VStack
          bg="#FFFFFF"
          flex="1"
          justifyContent={"center"}
          alignItems={"center"}
          style={{
            marginTop: Constants.statusBarHeight,
          }}
        >
          <Center>
            <Image source={require("../assets/logoppb.png")}  styles = {{
              width: 110,
              height: 110,
              }}/>
            
          </Center>
          <Image />
        </VStack>
      </NativeBaseProvider>
    );
  }
} 