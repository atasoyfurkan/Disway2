import React from "react";
import {
  TouchableOpacity,
  Image,
  Dimensions,
  Platform,
  View,
  StyleSheet
} from "react-native";
import {
  Container,
  Content,
  Text,
  Button,
  Toast,
  Icon,
  Header,
  Title
} from "native-base";
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
  handleInform = () => {
    Toast.show({
      text:
        "The aim of this application is to make your stay in Istanbul as comfortable as possible by providing public transport information from a local point of view.",
      buttonText: "Next",
      duration: 15000,
      position: "top",
      style: {
        marginTop: 10
      },
      onClose: () =>
        Toast.show({
          text:
            "Firstly, by clicking first picture you can pick several destinations that you want to go within the same day. After that you will get the fastest path of the chosen places by public transport.",
          buttonText: "Next",
          duration: 15000,
          position: "top",
          style: {
            marginTop: 10
          },
          onClose: () =>
            Toast.show({
              style: {
                marginBottom: 10
              },
              text:
                "Secondly, by clicking second picture you can find the way back home. All you need to do is pick a place from the list then way will appear on your the screen.",
              buttonText: "Okay",
              duration: 15000
            })
        })
    });
  };
  render() {
    return (
      <Container>
        <Header style={styles.header}>
          <Text style={styles.brand}>myRouTTe</Text>
        </Header>

        <Content padder bounces={false} contentContainerStyle={styles.content}>
          <TouchableOpacity onPress={this.planDay} style={styles.mainButton}>
            <Image
              style={styles.buttonImage}
              source={require("../assets/plan.png")}
            />
            <View>
              <Title style={styles.buttonText}>PLAN YOUR DAY</Title>
            </View>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={this.choosePlace}
            style={styles.mainButton}
          >
            <Image
              style={styles.buttonImage}
              source={require("../assets/home.png")}
            />
            <View>
              <Title style={styles.buttonText}>RETURN HOME</Title>
            </View>
          </TouchableOpacity>
          <View style={{ flexDirection: "row" }}>
            <Button
              onPress={this.handleInform}
              iconLeft
              bordered
              style={styles.informButton}
            >
              <Icon
                style={styles.informButton}
                name="md-information-circle-outline"
              />
              <Text style={styles.informButton}>Inform me!</Text>
            </Button>
          </View>
        </Content>
      </Container>
    );
  }
}

const styles = StyleSheet.create({
  header: {
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 50,
    backgroundColor: "#42a5f5"
  },
  brand: {
    color: "#f2f4f5",
    fontFamily: Platform.OS === "ios" ? "Optima" : "notoserif",
    fontWeight: "500",
    fontSize: Platform.OS === "ios" ? 30 : 28,
    textAlign: "center",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 1
    },
    shadowOpacity: 0.22,
    shadowRadius: 2.22,
    elevation: 3
  },
  content: {
    alignContent: "center",
    justifyContent: "space-around",
    flex: 1
  },
  mainButton: {
    justifyContent: "center",
    alignContent: "center",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 1
    },
    shadowOpacity: 0.22,
    shadowRadius: 2.22,
    elevation: 3,
    padding: 7,
    marginLeft: 12,
    marginRight: 12,
    borderRadius: 15,
    backgroundColor: "#f2f4f5"
  },
  buttonImage: {
    marginLeft: "auto",
    marginRight: "auto",
    width: (130 / 360) * Dimensions.get("window").width,
    height: (130 / 360) * Dimensions.get("window").width,
    borderRadius: 10
  },
  buttonText: { fontSize: 25, color: "black" },
  informButton: { color: "#42a5f5" }
});

const mapStateToProps = state => ({});
const mapDispatchToProps = {
  resetNodes
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(MainPage);
