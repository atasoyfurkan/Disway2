import React from "react";
import { connect } from "react-redux";
import { View, TouchableOpacity } from "react-native";
import {
  Container,
  Content,
  Card,
  CardItem,
  Text,
  Button,
  Icon
} from "native-base";
import ChoosenTitle from "../components/ChoosenTitle";
import { addNode, popNode, removeNode, resetNodes } from "../redux/actions";
import SearchBar from "../components/SearchBar";

class ChoosePlaceScreen extends React.Component {
  static navigationOptions = ({ navigation }) => ({
    headerTitle: <SearchBar />,
    headerRight: (
      <Button
        success
        onPress={() => {
          navigation.navigate("ChoosenScreen");
        }}
        style={{
          marginRight: 5,
          marginLeft: 5
        }}
      >
        <Text>OK</Text>
      </Button>
    ),
    headerStyle: {
      elevation: 0,
      shadowOpacity: 0
    }
  });

  constructor(props) {
    super(props);
  }
  getPressHandler = id => () => {
    this.props.addNode(this.props.places[id]);
  };
  componentWillMount() {
    this.props.navigation.setParams({
      nodes: this.props.nodes,
      popNode: this.props.popNode,
      removeNode: this.props.removeNode
    });
  }
  componentDidUpdate() {
    if (this.props.navigation.getParam("nodes") != this.props.nodes) {
      this.props.navigation.setParams({
        nodes: this.props.nodes
      });
    }
  }

  getOnPressHandlerInfo = (id, name) => _ => {
    this.props.navigation.navigate("InfoScreen", { id, name });
  };
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
          <ChoosenTitle
            nodes={this.props.nodes}
            removeNode={this.props.removeNode}
          />
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
                style={{ justifyContent: "space-between" }}
              >
                <Text style={this.assignPriority(data.item)}>
                  {data.item.renderName}
                </Text>
                <TouchableOpacity
                  onPress={this.getOnPressHandlerInfo(
                    data.item.index,
                    data.item.name
                  )}
                >
                  <Icon
                    style={{ color: "gray" }}
                    type="MaterialIcons"
                    name="info"
                  />
                </TouchableOpacity>
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
