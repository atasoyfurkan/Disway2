import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { Icon, ListItem, Body, Title } from "native-base";

class RouteListItemWithIcon extends React.Component {
  render() {
    const { title, text, texts, icon, buttonEvent } = this.props;
    return (
      <ListItem button={buttonEvent ? true : false} onPress={buttonEvent}>
        <View style={styles.iconContainer}>
          <Icon
            style={icon.style ? [styles.icon, icon.style] : styles.icon}
            name={icon.name}
            type={icon.type ? icon.type : "Ionicons"}
          />
        </View>
        <Body style={styles.itemBody}>
          {title && <Title style={styles.title}>{title}</Title>}
          {text && <Text style={styles.text}>{text}</Text>}
          {texts &&
            texts.map((text, i) => (
              <Text key={i} style={styles.text}>
                {text}
              </Text>
            ))}
        </Body>
      </ListItem>
    );
  }
}

const styles = StyleSheet.create({
  iconContainer: {
    flex: 1
  },
  icon: {
    color: "gray"
  },
  itemBody: {
    flex: 8,
    flexDirection: "column",
    alignItems: "flex-start"
  },
  text: {
    paddingLeft: 6
  },
  title: {
    color: "black"
  }
});

export default RouteListItemWithIcon;
