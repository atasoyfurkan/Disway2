import React from "react";
import { Image } from "react-native";
import {
  Container,
  Content,
  Card,
  CardItem,
  Text,
  Button,
  Title
} from "native-base";
import { connect } from "react-redux";

class InfoScreen extends React.Component {
  static navigationOptions = ({ navigation }) => ({
    title: ""
  });

  constructor(props) {
    super(props);
  }
  render() {
    let data;
    if (
      this.props.places[this.props.navigation.getParam("id")].name ===
      "TopkapıSarayı"
    )
      data = require("../assets/TopkapıSarayı.jpg");
    else if (
      this.props.places[this.props.navigation.getParam("id")].name ===
      "SultanahmetCamii"
    )
      data = require("../assets/SultanahmetCamii.jpg");
    else if (
      this.props.places[this.props.navigation.getParam("id")].name ===
      "AyaSofya"
    )
      data = require("../assets/AyaSofya.jpg");
    else if (
      this.props.places[this.props.navigation.getParam("id")].name ===
      "YerebatanSarnıcı"
    )
      data = require("../assets/YerebatanSarnıcı.jpg");
    else if (
      this.props.places[this.props.navigation.getParam("id")].name ===
      "KapalıÇarşı"
    )
      data = require("../assets/KapalıÇarşı.jpg");
    else if (
      this.props.places[this.props.navigation.getParam("id")].name ===
      "MısırÇarşısı"
    )
      data = require("../assets/MısırÇarşısı.jpg");
    else if (
      this.props.places[this.props.navigation.getParam("id")].name ===
      "GalataKulesi"
    )
      data = require("../assets/GalataKulesi.jpg");
    else if (
      this.props.places[this.props.navigation.getParam("id")].name ===
      "İstiklalCaddesi"
    )
      data = require("../assets/İstiklalCaddesi.jpg");
    else if (
      this.props.places[this.props.navigation.getParam("id")].name ===
      "TaksimMeydanı"
    )
      data = require("../assets/TaksimMeydanı.jpg");
    else if (
      this.props.places[this.props.navigation.getParam("id")].name ===
      "DolmabahçeSarayı"
    )
      data = require("../assets/DolmabahçeSarayı.jpg");
    else if (
      this.props.places[this.props.navigation.getParam("id")].name ===
      "ArkeolojiMüzesi"
    )
      data = require("../assets/ArkeolojiMüzesi.jpg");
    else if (
      this.props.places[this.props.navigation.getParam("id")].name ===
      "GülhaneParkı"
    )
      data = require("../assets/GülhaneParkı.jpg");
    else if (
      this.props.places[this.props.navigation.getParam("id")].name ===
      "SirkeciTrenGarı"
    )
      data = require("../assets/SirkeciTrenGarı.jpg");
    else if (
      this.props.places[this.props.navigation.getParam("id")].name ===
      "HaydarpaşaTrenGarı"
    )
      data = require("../assets/HaydarpaşaTrenGarı.jpg");
    else if (
      this.props.places[this.props.navigation.getParam("id")].name ===
      "KızKulesi"
    )
      data = require("../assets/KızKulesi.jpg");
    else if (
      this.props.places[this.props.navigation.getParam("id")].name ===
      "SüleymaniyeCamii"
    )
      data = require("../assets/SüleymaniyeCamii.jpg");
    else if (
      this.props.places[this.props.navigation.getParam("id")].name ===
      "SaltGalata"
    )
      data = require("../assets/SaltGalata.jpg");
    else if (
      this.props.places[this.props.navigation.getParam("id")].name ===
      "PeraMüzesi"
    )
      data = require("../assets/PeraMüzesi.jpg");
    else if (
      this.props.places[this.props.navigation.getParam("id")].name ===
      "İstanbulModern"
    )
      data = require("../assets/İstanbulModern.jpg");
    else if (
      this.props.places[this.props.navigation.getParam("id")].name ===
      "NuruosmaniyeCamii"
    )
      data = require("../assets/NuruosmaniyeCamii.jpg");
    else if (
      this.props.places[this.props.navigation.getParam("id")].name ===
      "Çemberlitaş"
    )
      data = require("../assets/Çemberlitaş.jpg");
    else if (
      this.props.places[this.props.navigation.getParam("id")].name ===
      "YıldızSarayı"
    )
      data = require("../assets/YıldızSarayı.jpg");
    else if (
      this.props.places[this.props.navigation.getParam("id")].name ===
      "ÇırağanSarayı"
    )
      data = require("../assets/ÇırağanSarayı.jpg");
    else if (
      this.props.places[this.props.navigation.getParam("id")].name ===
      "RumeliHisarı"
    )
      data = require("../assets/RumeliHisarı.jpg");
    else if (
      this.props.places[this.props.navigation.getParam("id")].name ===
      "DenizMüzesi"
    )
      data = require("../assets/DenizMüzesi.jpg");
    else if (
      this.props.places[this.props.navigation.getParam("id")].name ===
      "FenerRumOrtodoksPatrikhanesi"
    )
      data = require("../assets/FenerRumOrtodoksPatrikhanesi.jpg");
    else if (
      this.props.places[this.props.navigation.getParam("id")].name ===
      "İstanbulAdaları"
    )
      data = require("../assets/İstanbulAdaları.jpg");
    else if (
      this.props.places[this.props.navigation.getParam("id")].name ===
      "GalataMevleviHanesi"
    )
      data = require("../assets/GalataMevleviHanesi.jpg");
    else if (
      this.props.places[this.props.navigation.getParam("id")].name ===
      "EyüpSultanCamii"
    )
      data = require("../assets/EyüpSultanCamii.jpg");
    else if (
      this.props.places[this.props.navigation.getParam("id")].name ===
      "SarayKoleksiyonlarıMüzesi"
    )
      data = require("../assets/SarayKoleksiyonlarıMüzesi.jpg");
    else if (
      this.props.places[this.props.navigation.getParam("id")].name ===
      "VefaKiliseCamii"
    )
      data = require("../assets/VefaKiliseCamii.jpg");
    else if (
      this.props.places[this.props.navigation.getParam("id")].name ===
      "StAntoineKilisesi"
    )
      data = require("../assets/StAntoineKilisesi.jpg");
    else if (
      this.props.places[this.props.navigation.getParam("id")].name ===
      "BüyükMecidiyeCamii"
    )
      data = require("../assets/BüyükMecidiyeCamii.jpg");
    else if (
      this.props.places[this.props.navigation.getParam("id")].name ===
      "KariyeMüzesi"
    )
      data = require("../assets/KariyeMüzesi.jpg");
    else if (
      this.props.places[this.props.navigation.getParam("id")].name ===
      "FethiyeMüzesi"
    )
      data = require("../assets/FethiyeMüzesi.jpg");
    else if (
      this.props.places[this.props.navigation.getParam("id")].name ===
      "SadberkHanımMüzesi"
    )
      data = require("../assets/SadberkHanımMüzesi.jpg");
    else if (
      this.props.places[this.props.navigation.getParam("id")].name ===
      "SabancıMüzesi"
    )
      data = require("../assets/SabancıMüzesi.jpg");
    else if (
      this.props.places[this.props.navigation.getParam("id")].name ===
      "RahmiKoçMüzesi"
    )
      data = require("../assets/RahmiKoçMüzesi.jpg");
    else if (
      this.props.places[this.props.navigation.getParam("id")].name ===
      "RezanHasMüzesi"
    )
      data = require("../assets/RezanHasMüzesi.jpg");
    else if (
      this.props.places[this.props.navigation.getParam("id")].name ===
      "KadiköyBoğaHeykeli"
    )
      data = require("../assets/KadiköyBoğaHeykeli.jpg");
    else if (
      this.props.places[this.props.navigation.getParam("id")].name ===
      "FatihCamii"
    )
      data = require("../assets/FatihCamii.jpg");
    else if (
      this.props.places[this.props.navigation.getParam("id")].name ===
      "BeylerbeyiSarayı"
    )
      data = require("../assets/BeylerbeyiSarayı.jpg");
    else if (
      this.props.places[this.props.navigation.getParam("id")].name ===
      "Miniatürk"
    )
      data = require("../assets/Miniatürk.jpg");
    else if (
      this.props.places[this.props.navigation.getParam("id")].name ===
      "BesYuzYılVakfıTürkMusevileriMüzesi"
    )
      data = require("../assets/BesYuzYılVakfıTürkMusevileriMüzesi.jpg");
    else data = require("../assets/KırımKilisesi.jpg");
    return (
      <Container>
        <Content>
          <Card>
            <CardItem style={{ justifyContent: "center" }}>
              <Title style={{ color: "black" }}>
                {
                  this.props.places[this.props.navigation.getParam("id")]
                    .renderName
                }
              </Title>
            </CardItem>
            <CardItem>
              <Image
                source={data}
                style={{ height: 200, width: null, flex: 1, borderRadius: 7 }}
              />
            </CardItem>
            <CardItem>
              <Text>
                {this.props.places[this.props.navigation.getParam("id")].desc}
              </Text>
            </CardItem>
          </Card>
        </Content>
      </Container>
    );
  }
}
const mapStateToProps = state => ({
  places: state.places
});
export default connect(mapStateToProps)(InfoScreen);
