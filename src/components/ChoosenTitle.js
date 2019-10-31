import React from "react";
import { Card, CardItem, Text, View, Button, Icon } from "native-base";
import { FlatList } from "react-native";

export default class ChoosenTitle extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    if (this.props.nodes)
      return (
        <FlatList
          style={{
            margin: 5
          }}
          horizontal
          inverted
          showsHorizontalScrollIndicator={false}
          bounces={false}
          keyExtractor={(item, index) => "" + index}
          data={this.props.nodes.slice().reverse()}
          renderItem={({ item }) => (
            <Button
              iconRight
              transparent
              bordered
              small
              style={{
                marginRight: 10
              }}
              onPress={() => {
                this.props.removeNode(item.index);
              }}
            >
              <Text
                style={{
                  color: "blue"
                }}
              >
                {item.renderName}
              </Text>
              <Icon
                style={{ fontSize: 20 }}
                type="MaterialIcons"
                name="delete"
              />
            </Button>
          )}
        />
      );
    else {
      return <View />;
    }
  }
}
