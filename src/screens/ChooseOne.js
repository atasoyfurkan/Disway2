import React from "react";
import { View } from "react-native";
import { connect } from "react-redux";
import {
  Container,
  Content,
  Card,
  CardItem,
  Text,
  Header,
  Item,
  Icon,
  Input,
  Button
} from "native-base";
import { addNode, popNode, removeNode, resetNodes } from "../redux/actions";
import SearchBar from "../components/SearchBar";
class ChoosePlaceScreen extends React.Component {
  static navigationOptions = ({ navigation }) => ({
    headerTitle: <SearchBar />
  });

  constructor(props) {
    super(props);
  }
  getPressHandler = id => () => {
    this.props.addNode(this.props.places[id]);
    this.props.navigation.navigate("ChoosenOneScreen");
  };
  componentDidMount() {
    const { navigation, resetNodes } = this.props;
    this.focusListener = navigation.addListener("didFocus", () => {
      resetNodes();
    });
  }

  assignPriority = item => {
    let color = "black";
    if (item.priority === 1) color = "red";
    if (item.priority === 2) color = "blue";
    if (item.priority === 3) color = "green";
    if (item.priority === 4) color = "orange";

    return { color };
  };

  render() {
    return (
      <Container>
        <Content>
          <View style={{ flexDirection: "row", marginLeft: 15 }}>
            <Text>Recommendation order: </Text>
            <Text style={{ color: "red" }}>**** </Text>
            <Text style={{ color: "blue" }}>*** </Text>
            <Text style={{ color: "green" }}>** </Text>
            <Text style={{ color: "orange" }}>* </Text>
          </View>
          <Card
            dataArray={this.props.places.filter(
              p =>
                -1 === this.props.nodes.findIndex(i => p.name == i.name) &&
                p.name !== "AirbnbEv" &&
                p.renderName
                  .toLowerCase()
                  .indexOf(this.props.search.toLowerCase()) !== -1
            )}
            renderRow={data => (
              <CardItem
                button
                bordered
                onPress={this.getPressHandler(data.item.index)}
              >
                <Text style={this.assignPriority(data.item)}>
                  {data.item.renderName}
                </Text>
              </CardItem>
            )}
          />
        </Content>
      </Container>
    );
  }
}
const mapStateToProps = state => ({
  nodes: state.nodes,
  places: state.places,
  search: state.search
});
const mapDispatch = {
  addNode,
  popNode,
  removeNode,
  resetNodes
};
export default connect(
  mapStateToProps,
  mapDispatch
)(ChoosePlaceScreen);
