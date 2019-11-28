import React from "react";
import { Provider } from "react-redux";
import { createAppContainer } from "react-navigation";
import { Root } from "native-base";
import { createStackNavigator } from "react-navigation-stack";
import MainPage from "./src/screens/MainPage";
import ChoosePlaceScreen from "./src/screens/ChoosePlaceScreen";
import InfoScreen from "./src/screens/InfoScreen";
import ChoosenScreen from "./src/screens/ChoosenScreen";
import Map from "./src/screens/Map";
import store from "./src/redux/store";
import * as Font from "expo-font";
import ChooseOne from "./src/screens/ChooseOne";
import ChoosenOneScreen from "./src/screens/ChoosenOneScreen";
import * as FileSystem from "expo-file-system";
import LoadingScreen from "./src/screens/LoadingScreen";
import * as SecureStore from "expo-secure-store";
import JSZip from "jszip";
import { decode as atob, encode as btoa } from "base-64";
import { createDownloadResumable } from "expo-file-system";

const navigator = createStackNavigator({
  MainPage,
  ChoosePlaceScreen,
  ChooseOne,
  ChoosenScreen,
  Map,
  ChoosenOneScreen,
  InfoScreen
});
const Container = createAppContainer(navigator);
export default class App extends React.Component {
  state = {
    loading: true,
    ready: false,
    inProcess: 19 + 96 * 2,
    completed: 0
  };
  constructor(props) {
    super(props);
    this.writeData();
  }

  writeData = async () => {
    const uris = [
      "https://raw.githubusercontent.com/atasoyfurkan/Disway/master/src/data/routesDataFinder.js",
      "https://raw.githubusercontent.com/atasoyfurkan/Disway/master/src/data/allTransportLines.json",
      "https://raw.githubusercontent.com/atasoyfurkan/Disway/master/src/data/locationData.js",
      "https://raw.githubusercontent.com/atasoyfurkan/Disway/master/src/data/routesData_03.json",
      "https://raw.githubusercontent.com/atasoyfurkan/Disway/master/src/data/routesData_06.json",
      "https://raw.githubusercontent.com/atasoyfurkan/Disway/master/src/data/routesData_08.json",
      "https://raw.githubusercontent.com/atasoyfurkan/Disway/master/src/data/routesData_10.json",
      "https://raw.githubusercontent.com/atasoyfurkan/Disway/master/src/data/routesData_12.json",
      "https://raw.githubusercontent.com/atasoyfurkan/Disway/master/src/data/routesData_14.json",
      "https://raw.githubusercontent.com/atasoyfurkan/Disway/master/src/data/routesData_16.json",
      "https://raw.githubusercontent.com/atasoyfurkan/Disway/master/src/data/routesData_17.json",
      "https://raw.githubusercontent.com/atasoyfurkan/Disway/master/src/data/routesData_18.json",
      "https://raw.githubusercontent.com/atasoyfurkan/Disway/master/src/data/routesData_19.json",
      "https://raw.githubusercontent.com/atasoyfurkan/Disway/master/src/data/routesData_20.json",
      "https://raw.githubusercontent.com/atasoyfurkan/Disway/master/src/data/routesData_22.json",
      "https://raw.githubusercontent.com/atasoyfurkan/Disway/master/src/data/routesData_23.json",
      "https://raw.githubusercontent.com/atasoyfurkan/Disway/master/src/data/routesData_24.json",
      "https://raw.githubusercontent.com/atasoyfurkan/Disway/master/src/data/transportTypes.js",
      "https://raw.githubusercontent.com/atasoyfurkan/Disway/master/src/data/transportsData.json"
    ];
    const mapData = uris.map(uri => {
      const uriParsed = uri.split("/");
      const name = uriParsed[uriParsed.length - 1];
      let that = this;
      return FileSystem.getInfoAsync(FileSystem.documentDirectory + name).then(
        function(result) {
          if (!result.exists)
            return FileSystem.downloadAsync(
              uri,
              FileSystem.documentDirectory + name
            ).then(function() {
              that.setState(prevState => ({
                completed: prevState.completed + 1
              }));
            });
          else {
            that.setState(prevState => ({
              completed: prevState.completed + 1
            }));
            return;
          }
        }
      );
    });
    //https://github.com/atasoyfurkan/tilesZip/raw/master/tiles/12/2376.zip
    zipUrls = await require("./src/data/zipUrls.json");
    await FileSystem.makeDirectoryAsync(FileSystem.documentDirectory + "12", {
      intermediates: true
    });
    await FileSystem.makeDirectoryAsync(FileSystem.documentDirectory + "13", {
      intermediates: true
    });
    await FileSystem.makeDirectoryAsync(FileSystem.documentDirectory + "14", {
      intermediates: true
    });
    await FileSystem.makeDirectoryAsync(FileSystem.documentDirectory + "15", {
      intermediates: true
    });
    await FileSystem.makeDirectoryAsync(FileSystem.documentDirectory + "16", {
      intermediates: true
    });
    map2 = zipUrls.map(url => {
      const name = url + ".zip";
      let that = this;
      return FileSystem.getInfoAsync(FileSystem.documentDirectory + name).then(
        function(result) {
          if (!result.exists)
            return FileSystem.downloadAsync(
              "https://github.com/atasoyfurkan/tiles/raw/master/tiles/tiles/" +
                name,
              FileSystem.documentDirectory + name
            ).then(function() {
              that.setState(prevState => ({
                completed: prevState.completed + 1
              }));
            });
          else {
            that.setState(prevState => ({
              completed: prevState.completed + 1
            }));
            return;
          }
        }
      );
    });

    await Promise.all([...mapData, ...map2]);
    await this.fetchTiles(
      require("./src/data/tilesUrls.json"),
      require("./src/data/zipUrls.json"),
      `${FileSystem.documentDirectory}tiles/`
    );
    this.setState({ ready: true });
  };

  fetchTiles = async (tileUrls, zipUrls, rootFolder) => {
    let counter = 0;
    for (let url of zipUrls) {
      if ((await SecureStore.getItemAsync(url.replace("/", "-"))) !== null) {
        this.setState(prevState => ({
          completed: prevState.completed + 1
        }));
        continue;
      }
      const data = await FileSystem.readAsStringAsync(
        FileSystem.documentDirectory + url + ".zip",
        {
          encoding: FileSystem.EncodingType.Base64
        }
      );
      let zip = await JSZip.loadAsync(data, { base64: true });

      for (let url2 of tileUrls.filter(u => u.indexOf(url) !== -1)) {
        let splited = url2.split("/");
        let filename =
          splited[splited.length - 2] + "/" + splited[splited.length - 1];
        try {
          await FileSystem.makeDirectoryAsync(rootFolder + url, {
            intermediates: true
          });
          let tile = await zip.file(filename).async("base64");
          path = rootFolder + url2;
          await FileSystem.writeAsStringAsync(path, tile, {
            encoding: FileSystem.EncodingType.Base64
          });
        } catch (e) {
          console.log(e);
        }
      }
      this.setState(prevState => ({
        completed: prevState.completed + 1
      }));
      SecureStore.setItemAsync(url.replace("/", "-"), "true");
    }
  };

  async componentDidMount() {
    await Font.loadAsync({
      Roboto: require("native-base/Fonts/Roboto.ttf"),
      Roboto_medium: require("native-base/Fonts/Roboto_medium.ttf")
    });
    this.setState({ loading: false });
  }
  render() {
    if (this.state.loading || !this.state.ready)
      return (
        <LoadingScreen
          style={{ flex: 1 }}
          inProcess={this.state.inProcess}
          completed={this.state.completed}
        />
      );
    return (
      <Root>
        <Provider store={store}>
          <Container />
        </Provider>
      </Root>
    );
  }
}
