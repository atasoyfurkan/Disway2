import React from "react";
import { Container, Content, Card, CardItem, Text, Button } from "native-base";
import { connect } from "react-redux";

class ChoosenScreen extends React.Component {
  static navigationOptions = ({ navigation }) => ({
    title: "Choosen Places",
    headerRight: (
      <Button
        success
        onPress={() => {
          navigation.navigate("Map");
        }}
        style={{
          marginRight: 5,
          marginLeft: 5
        }}
      >
        <Text>OK</Text>
      </Button>
    )
  });

  constructor(props) {
    super(props);
  }
  render() {
    return (
      <Container>
        <Content>
          <Card>
            {this.props.nodes.map((index, i) => (
              <CardItem key={i}>
                <Text>{index.renderName}</Text>
              </CardItem>
            ))}
          </Card>
        </Content>
      </Container>
    );
  }
}
const mapStateToProps = state => ({
  nodes: state.nodes
});
export default connect(mapStateToProps)(ChoosenScreen);
