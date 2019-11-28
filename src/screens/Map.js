import React from "react";
import { connect } from "react-redux";
import {
  StyleSheet,
  Text,
  View,
  Animated,
  Dimensions,
  Image,
  TouchableOpacity,
  NetInfo
} from "react-native";
import { Container, Spinner, Icon } from "native-base";
import MapView, {
  Marker,
  Callout,
  LocalTile,
  UrlTile
} from "react-native-maps";
import MapViewDirections from "react-native-maps-directions";
import GestureRecognizer from "react-native-swipe-gestures";
import * as Location from "expo-location";
import * as Permissions from "expo-permissions";
import * as FileSystem from "expo-file-system";
import RouteInfo from "../components/map/RouteInfo";
import transportsData from "../data/transportsData.json";
import routesDataFinder from "../data/routesDataFinder";
let routesData;

const LANDSCAPE =
  Dimensions.get("window").width / Dimensions.get("window").height;

class Map extends React.Component {
  state = {
    Region: {
      latitude: this.props.places[45].latitude, // airbnb
      longitude: this.props.places[45].longitude,
      latitudeDelta: 0.0922,
      longitudeDelta: LANDSCAPE * 0.0922
    },
    dataArray: [],
    markers: [],
    directions: [],
    animation: {
      remove: new Animated.Value(1),
      position: "center"
    },
    ready: false,
    multipleRoute: this.props.nodes.length !== 1,
    colors: [
      "#344feb",
      "#eb3434",
      "#eb9634",
      "#56eb34",
      "purple",
      "brown",
      "#d634eb",
      "#42f5d1",

      "black"
    ],
    offlineUrlTemplate: `${FileSystem.documentDirectory}tiles/{z}/{x}/{y}.png`,
    connectionStatus: false
  };

  async componentDidMount() {
    routesData = await routesDataFinder(new Date().getHours());

    NetInfo.isConnected.addEventListener(
      "connectionChange",
      this.handleConnectivityChange
    );

    NetInfo.isConnected.fetch().done(isConnected => {
      if (isConnected == true) {
        this.setState({ connectionStatus: true });
      } else {
        this.setState({ connectionStatus: false });
      }
    });

    let places = [...this.props.nodes];
    let currentPlace = this.props.places[45];
    let correctRoute = [];
    if (this.props.navigation.getParam("backHome")) {
      correctRoute.push(this.props.nodes[0]);
      correctRoute.push(currentPlace);
    } else {
      correctRoute.push(currentPlace);
      while (places.length !== 0) {
        let min = Number.MAX_VALUE;
        let index = 0;
        places.forEach((item, i) => {
          const distance =
            Math.pow(currentPlace.latitude - item.latitude, 2) +
            Math.pow(currentPlace.longitude - item.longitude, 2);
          if (distance < min) {
            min = distance;
            index = i;
          }
        });
        correctRoute.push(places[index]);
        currentPlace = places[index];
        places.splice(index, 1);
      }
    }

    let dataArray = [];
    let colorIndex = 0;
    for (let i = 1; i < correctRoute.length; i++) {
      const data = this.findData(correctRoute[i - 1], correctRoute[i]);
      dataArray.push({ ...data, index: colorIndex });
      this.handleDirectionsAndMarkers(data, colorIndex++);
    }
    this.setState({ dataArray });
    this.setState({ ready: true });
  }

  componentWillUnmount() {
    NetInfo.isConnected.removeEventListener(
      "connectionChange",
      this.handleConnectivityChange
    );
  }

  handleConnectivityChange = isConnected => {
    if (isConnected == true) {
      this.setState({ connectionStatus: true });
    } else {
      this.setState({ connectionStatus: false });
    }
  };

  handleLocationBugs = (item, type) => {
    const data = this.props.places.find(place => place.name === item[type]);
    return { ...data, name: data.renderName };
  };

  handleDirectionsAndMarkers = (data, colorIndex) => {
    data.routes.RouteSegments.forEach((item, j) => {
      if (item.Transport) {
        const stops = this.findStops(item);
        if (!stops) return;
        const color = `#${item.Transport.Color}`;
        for (let i = 0; i < stops.length; i++) {
          if (i != 0) {
            this.setState(prev => ({
              directions: [
                ...prev.directions,
                {
                  mode: "TRANSIT",
                  color: color,
                  index: colorIndex,
                  routeColor: this.state.colors[
                    colorIndex % this.state.colors.length
                  ],
                  start: {
                    latitude: stops[i - 1].lat,
                    longitude: stops[i - 1].lng,
                    name: stops[i - 1].name
                  },
                  end: {
                    latitude: stops[i].lat,
                    longitude: stops[i].lng,
                    name: stops[i].name
                  }
                }
              ]
            }));
          }
          this.setState(prev => ({
            markers: [
              ...prev.markers,
              {
                latitude: stops[i].lat,
                longitude: stops[i].lng,
                name: stops[i].name,
                color: color,
                index: colorIndex
              }
            ]
          }));
        }
      } else {
        this.setState(prev => ({
          directions: [
            ...prev.directions,
            {
              mode: "WALKING",
              color: "gray",
              index: colorIndex,
              routeColor: "gray",
              start:
                j === 0
                  ? this.handleLocationBugs(data, "from")
                  : {
                      latitude: item.StartPoint.Coordinate.Lat,
                      longitude: item.StartPoint.Coordinate.Lng,
                      name: item.StartPoint.Name
                    },
              end:
                j === data.routes.RouteSegments.length - 1
                  ? this.handleLocationBugs(data, "to")
                  : {
                      latitude: item.EndPoint.Coordinate.Lat,
                      longitude: item.EndPoint.Coordinate.Lng,
                      name: item.EndPoint.Name
                    }
            }
          ]
        }));
      }
    });
  };
  findData = (placeFrom, placeTo) => {
    const allData = routesData.find(
      element => element.name === placeFrom.name // airbnb
    );
    const data = allData.data.find(element => element.to === placeTo.name);
    return data;
  };
  findStops = item => {
    const transportLine = transportsData.find(
      element => element.id === item.Transport.ScheduleId
    );
    if (!transportLine) return;

    let startIndex = transportLine.stops.findIndex(
      stop => stop.id === item.StartPoint.Id
    );
    if (startIndex === -1) {
      startIndex = startIndex = transportLine.stops.findIndex(
        stop => stop.name === item.StartPoint.Name
      );
    }

    let endIndex = transportLine.stops.findIndex(
      stop => stop.id === item.EndPoint.Id
    );
    if (endIndex === -1) {
      endIndex = transportLine.stops.findIndex(
        stop => stop.name === item.EndPoint.Name
      );
    }

    let stops;
    if (endIndex >= startIndex)
      stops = transportLine.stops.slice(startIndex, endIndex + 1);
    else {
      stops = transportLine.stops.slice(endIndex, startIndex + 1).reverse();
    }
    return stops;
  };

  handleSelectRoute = (data, clicked) => {
    if (data) {
      this.setState({
        tempMarkers: [...this.state.markers],
        tempDirections: [...this.state.directions]
      });
      const markers = this.state.markers.filter(
        item => item.index === data.index
      );
      const directions = this.state.directions.filter(
        item => item.index === data.index
      );
      this.setState({ multipleRoute: !clicked, markers, directions });
    } else {
      this.setState({
        multipleRoute: !clicked,
        markers: [...this.state.tempMarkers],
        directions: [...this.state.tempDirections]
      });
    }
  };

  getRegionAsync = async () => {
    try {
      let { status } = await Permissions.askAsync(Permissions.LOCATION);
      if (status !== "granted") {
        this.setState({
          errorMessage: "Permission to access Region was denied"
        });
        console.log(status);
      }

      let r = await Location.getCurrentPositionAsync({});

      this.setState({
        Region: {
          latitude: r.coords.latitude,
          longitude: r.coords.longitude,
          latitudeDelta: 0.0922,
          longitudeDelta: LANDSCAPE * 0.0922
        },
        locationMarker: {
          latitude: r.coords.latitude,
          longitude: r.coords.longitude
        }
      });
    } catch (e) {
      console.log(e);
    }
  };

  handleAnimation = mode => {
    let animation;
    if (mode === "up") {
      if (this.state.animation.position === "center") {
        animation = { ...this.state.animation, position: "up" };
        this.startAnimation(0);
        this.setState({ animation });
      }
      if (this.state.animation.position === "down") {
        animation = { ...this.state.animation, position: "center" };
        this.startAnimation(1);
        this.setState({ animation });
      }
    }
    if (mode === "down") {
      if (this.state.animation.position === "center") {
        animation = { ...this.state.animation, position: "down" };
        this.startAnimation(10);
        this.setState({ animation });
      }
      if (this.state.animation.position === "up") {
        animation = { ...this.state.animation, position: "center" };
        this.startAnimation(1);
        this.setState({ animation });
      }
    }
  };
  startAnimation = value => {
    Animated.timing(this.state.animation.remove, {
      toValue: value,
      duration: 500
    }).start();
  };

  render() {
    if (!this.state.ready) return <Spinner />;
    return (
      <Container>
        <Animated.View
          style={{
            flex: this.state.animation.remove
          }}
        >
          <MapView
            style={styles.mapView}
            region={this.state.Region}
            onRegionChangeComplete={Region => {
              this.state.Region = Region;
            }}
            showsUserLocation
            showsMyLocationButton
          >
            {!this.state.connectionStatus && (
              <UrlTile urlTemplate={this.state.offlineUrlTemplate} zIndex={1} />
            )}

            {[this.props.places[45], ...this.props.nodes].map((r, i) => (
              <Marker key={i} coordinate={r}>
                <Icon
                  name="map-marker-circle"
                  type="MaterialCommunityIcons"
                  style={{
                    fontSize: 30,
                    color: "gray"
                  }}
                />
                <Callout
                  style={{
                    width: 125,
                    justifyContent: "center",
                    alignItems: "center"
                  }}
                >
                  <Text>{r.renderName}</Text>
                </Callout>
              </Marker>
            ))}
            {!this.state.multipleRoute &&
              this.state.markers.map((r, i) => (
                <Marker key={i} coordinate={r} pinColor={r.color}>
                  <Callout>
                    <Text>{r.name}</Text>
                  </Callout>
                </Marker>
              ))}
            {this.state.directions.map((item, i) => (
              <MapViewDirections
                key={i}
                origin={item.start}
                destination={item.end}
                apikey="AIzaSyBIFRaQz4GPPcjrqDwKA8BeuMIdxtlJOS0"
                strokeWidth={3}
                strokeColor={
                  this.state.multipleRoute ? item.routeColor : item.color
                }
                mode={item.mode}
              />
            ))}
          </MapView>
          <View style={styles.locationButtonContainer}>
            <TouchableOpacity onPress={this.getRegionAsync}>
              <Icon name="my-location" type="MaterialIcons" />
            </TouchableOpacity>
          </View>
        </Animated.View>
        <View style={{ flex: 1 }}>
          <RouteInfo
            handleAnimation={this.handleAnimation}
            handleSelectRoute={this.handleSelectRoute}
            dataArray={this.state.dataArray}
            findStops={this.findStops}
            colors={this.state.colors}
            places={this.props.places}
          />
        </View>
      </Container>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center"
  },
  mapView: {
    flex: 1,
    position: "absolute",
    top: 0,
    left: 0,
    right: 0,
    bottom: 0
  },
  locationButtonContainer: {
    position: "absolute",
    bottom: 12,
    right: 12,
    alignItems: "flex-end",
    alignSelf: "flex-end",
    justifyContent: "flex-end",
    backgroundColor: "transparent"
  }
});

const mapStateToProps = state => ({
  nodes: state.nodes,
  places: state.places
});

export default connect(mapStateToProps)(Map);
