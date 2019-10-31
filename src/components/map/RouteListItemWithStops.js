import React from "react";
import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import { Icon, ListItem, Body, Title } from "native-base";
import transportsData from "../../data/transportsData.json";

class RouteListItemWithStops extends React.Component {
  state = {
    isShow: false,
    stops: []
  };

  handleShow = () => {
    let stops = this.props.findStops(this.props.item);
    stops = stops.slice(1, stops.length - 1);
    this.setState({ stops, isShow: !this.state.isShow });
  };

  render() {
    const { item } = this.props;
    const { isShow, stops } = this.state;

    return (
      <ListItem style={styles.listItem}>
        <View style={styles.container}>
          <Text style={{ flex: 3 }}>
            Ride {item.StopsCount} stop(s) for {item.DurationMinutes} min
          </Text>
          <TouchableOpacity
            style={[styles.button, { flex: 1 }]}
            onPress={this.handleShow}
          >
            <Text style={styles.buttonText}>{isShow ? "HIDE" : "SHOW"}</Text>
            <Icon
              style={styles.buttonIcon}
              name={`arrow-${isShow ? "up" : "down"}`}
            />
          </TouchableOpacity>
        </View>
        {isShow &&
          stops.map((stop, i) => (
            <View key={i} style={styles.container}>
              <Icon
                style={{
                  color: `#${item.Transport.Color}`,
                  fontSize: 11,
                  marginRight: 3
                }}
                type="Octicons"
                name="primitive-dot"
              />
              <Text style={{ color: "black" }}>{stop.name}</Text>
            </View>
          ))}
      </ListItem>
    );
  }
}

const styles = StyleSheet.create({
  listItem: {
    flexDirection: "column",
    alignItems: "flex-start"
  },
  container: {
    flexDirection: "row",
    alignItems: "center",
    marginLeft: 5
  },
  button: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center"
  },
  buttonText: {
    fontSize: 15,
    color: "red",
    fontWeight: "700",
    marginRight: 5
  },
  buttonIcon: {
    color: "red",
    fontSize: 15
  }
});

export default RouteListItemWithStops;
