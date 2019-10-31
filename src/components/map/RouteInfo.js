import React, { Component } from "react";
import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import {
  Body,
  Title,
  Content,
  Container,
  Header,
  Left,
  Right,
  Button,
  Icon,
  List,
  ListItem,
  Separator
} from "native-base";
import GestureRecognizer from "react-native-swipe-gestures";
import RouteListItemWithStops from "./RouteListItemWithStops";
import RouteListItemWithIcon from "./RouteListItemWithIcon";

class RouteInfo extends Component {
  state = {
    data: null,
    clicked: false
  };

  findTransportIcon = transport => {
    let name, type;
    if (transport.ScheduleId.includes("istm_M")) {
      name = "subway";
      type = "Ionicons";
    } else if (transport.ScheduleId.includes("istm_T")) {
      name = "tram";
      type = "MaterialIcons";
    } else if (transport.ScheduleId.includes("istf_")) {
      name = "ferry";
      type = "MaterialCommunityIcons";
    } else if (transport.ScheduleId.includes("ist_34")) {
      name = "metro";
      type = "Fontisto";
    } else if (transport.ScheduleId.includes("ist_")) {
      name = "bus";
      type = "Ionicons";
    }
    return { name: name, type: type, style: { color: `#${transport.Color}` } };
  };

  findDiff = (startTime, endTime) => {
    const startDate = new Date("January 1, 1970 " + startTime);
    const endDate = new Date("January 1, 1970 " + endTime);
    const diff = new Date(endDate.getTime() - startDate.getTime());
    return Math.floor(diff / 1000 / 60);
  };

  renderHeader = (mode, info) => {
    return (
      <GestureRecognizer
        onSwipeUp={() => this.props.handleAnimation("up")}
        onSwipeDown={() => this.props.handleAnimation("down")}
      >
        <Header>
          <Left>
            {this.props.dataArray.length !== 1 && this.state.clicked && (
              <TouchableOpacity
                style={{ marginLeft: 10 }}
                onPress={() => {
                  this.props.handleSelectRoute(null, false);
                  this.setState({ clicked: false });
                }}
              >
                <Icon name="arrow-back" />
              </TouchableOpacity>
            )}
          </Left>
          <Body
            style={{
              alignItems: "center",
              justifyContent: "center",
              marginBottom: 5
            }}
          >
            {mode === "content" && (
              <Text style={{ fontSize: 17, fontWeight: "600" }}>
                {"Arrive in "}
                {this.findDiff(info.DepartureTime, info.ArrivalTime)}
                {" min"}
              </Text>
            )}
            {mode === "buttons" && (
              <React.Fragment>
                <Title>Route</Title>
                <Text>Finish in {info.totalMin} min</Text>
              </React.Fragment>
            )}
          </Body>
          <Right />
        </Header>
      </GestureRecognizer>
    );
  };

  renderButtons = () => {
    let totalMin = 0;
    this.props.dataArray.forEach(data => {
      totalMin += this.findDiff(
        data.routes.DepartureTime,
        data.routes.ArrivalTime
      );
    });

    return (
      <React.Fragment>
        {this.renderHeader("buttons", { totalMin })}
        <Content>
          <List>
            {this.props.dataArray.map((data, i) => (
              <RouteListItemWithIcon
                key={i}
                buttonEvent={() => {
                  this.props.handleSelectRoute(data, true);
                  this.setState({ data, clicked: true });
                }}
                icon={{
                  name: "route",
                  type: "FontAwesome5",
                  style: { color: this.props.colors[i] }
                }}
                title={`${
                  this.props.places.find(item => item.name === data.from)
                    .renderName
                } - ${
                  this.props.places.find(item => item.name === data.to)
                    .renderName
                }`}
              />
            ))}
          </List>
        </Content>
      </React.Fragment>
    );
  };

  renderContent = data => {
    const { ArrivalTime, DepartureTime, RouteSegments } = data.routes;
    return (
      <React.Fragment>
        {this.renderHeader("content", { ArrivalTime, DepartureTime })}
        <Content>
          <List>
            <RouteListItemWithIcon
              key={"start"}
              icon={{ name: "pin" }}
              title={
                this.props.places.find(item => item.name === data.from)
                  .renderName
              }
            />
            {RouteSegments.map((item, i) => {
              return (
                <React.Fragment key={i + "fragment"}>
                  {i != 0 && item.RouteSegmentType === 2 && (
                    <Separator key={i + "separator"} />
                  )}
                  {item.RouteSegmentType === 1 && (
                    <RouteListItemWithIcon
                      key={i + "walk"}
                      icon={{ name: "walk" }}
                      text={`Walk for ${item.DurationMinutes} min`}
                    />
                  )}
                  {item.RouteSegmentType === 2 && (
                    <React.Fragment key={i + "fragment2"}>
                      <RouteListItemWithIcon
                        key={i + "dotStart"}
                        icon={{
                          name: "primitive-dot",
                          type: "Octicons",
                          style: {
                            color: `#${item.Transport.Color}`,
                            fontSize: 20
                          }
                        }}
                        title={item.StartPoint.Name}
                      />
                      <RouteListItemWithIcon
                        key={i + "transport"}
                        icon={this.findTransportIcon(item.Transport)}
                        title={item.Transport.Name}
                        text={item.Transport.Direction}
                      />
                      <RouteListItemWithStops
                        key={i + "stops"}
                        item={item}
                        findStops={this.props.findStops}
                      />
                    </React.Fragment>
                  )}
                  {i !== RouteSegments.length - 1 && (
                    <RouteListItemWithIcon
                      key={i + "dotEnd"}
                      icon={{
                        name: "primitive-dot",
                        type: "Octicons",
                        style: {
                          color: `${
                            item.Transport ? `#${item.Transport.Color}` : "gray"
                          }`,
                          fontSize: 20
                        }
                      }}
                      title={item.EndPoint.Name}
                    />
                  )}
                </React.Fragment>
              );
            })}
            <Separator key={"seperator2"} />
            <RouteListItemWithIcon
              key={"end"}
              icon={{ name: "pin" }}
              title={
                this.props.places.find(item => item.name === data.to).renderName
              }
            />
          </List>
        </Content>
      </React.Fragment>
    );
  };

  render() {
    const { dataArray } = this.props;
    return (
      <Container>
        {this.state.clicked && this.renderContent(this.state.data)}

        {dataArray.length === 1
          ? this.renderContent(dataArray[0])
          : !this.state.clicked && this.renderButtons()}
      </Container>
    );
  }
}

const styles = StyleSheet.create({});

export default RouteInfo;
