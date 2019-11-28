import React from "react";
import { TouchableOpacity, Image, Dimensions, Platform } from "react-native";
import { Container, Content, Text, Button, Toast, Icon } from "native-base";
import { connect } from "react-redux";
import { resetNodes } from "../redux/actions";

class MainPage extends React.Component {
  static navigationOptions = {
    header: null
  };
  constructor(props) {
    super(props);
  }
  choosePlace = () => {
    this.props.navigation.navigate("ChooseOne", {});
  };
  planDay = () => {
    this.props.navigation.navigate("ChoosePlaceScreen", {});
  };
  componentDidMount() {
    const { navigation, resetNodes } = this.props;
    this.focusListener = navigation.addListener("didFocus", () => {
      resetNodes();
    });
  }
  render() {
    console.log(Dimensions.get("window").width);
    return (
      <Container>
        <Content
          padder
          bounces={false}
          contentContainerStyle={{
            alignContent: "center",
            justifyContent: "space-around",
            flex: 1
          }}
        >
          <Text
            style={{
              fontFamily: Platform.OS === "ios" ? "Optima" : "notoserif",
              fontWeight: "500",
              fontSize: 40,
              textAlign: "center"
            }}
          >
            myRouTTe
          </Text>
          <TouchableOpacity
            onPress={this.planDay}
            style={{
              justifyContent: "center",
              alignContent: "center"
            }}
          >
            <Image
              style={{
                marginLeft: "auto",
                marginRight: "auto",
                width: (325 / 360) * Dimensions.get("window").width,
                height:
                  (325 / 360) * Dimensions.get("window").width * (375 / 695),
                borderRadius: 10
              }}
              source={require("../assets/plan.jpg")}
            />
          </TouchableOpacity>
          <TouchableOpacity
            onPress={this.choosePlace}
            style={{
              justifyContent: "center",
              alignContent: "center"
            }}
          >
            <Image
              style={{
                marginLeft: "auto",
                marginRight: "auto",
                width: (325 / 360) * Dimensions.get("window").width,
                height:
                  (325 / 360) * Dimensions.get("window").width * (375 / 695),
                borderRadius: 10
              }}
              source={require("../assets/back-home.png")}
            />
          </TouchableOpacity>
          <Button
            onPress={() => {
              Toast.show({
                text:
                  "The aim of this application is to make your stay in Istanbul as comfortable as possible by providing public transport information from a local point of view.",
                buttonText: "Next",
                duration: 15000,
                position: "top",
                onClose: () =>
                  Toast.show({
                    text:
                      "Firstly, by clicking first picture you can pick several destinations that you want to go within the same day. After that you will get the fastest path of the chosen places by public transport.",
                    buttonText: "Next",
                    duration: 15000,
                    position: "top",
                    onClose: () =>
                      Toast.show({
                        text:
                          "Secondly, by clicking second picture you can find the way back home. All you need to do is pick a place from the list then way will appear on your the screen.",
                        buttonText: "Okay",
                        duration: 15000
                      })
                  })
              });
            }}
            bordered
            style={{ justifyContent: "flex-start", width: "50%" }}
          >
            <Icon name="md-information-circle-outline" />
            <Text>Inform me!</Text>
          </Button>
        </Content>
      </Container>
    );
  }
}
const mapStateToProps = state => ({});
const mapDispatchToProps = {
  resetNodes
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(MainPage);
