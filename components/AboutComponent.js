import React, { Component } from "react";
import { View, Text } from "react-native";
import { Card, ListItem } from "react-native-elements";
import { FlatList, ScrollView } from "react-native-gesture-handler";
import { LEADERS } from "../shared/leaders";
import { connect } from "react-redux";
import { baseUrl } from "../shared/baseUrl";

const mapStateToProps = (state) => {
  return {
    leaders: state.leaders,
  };
};

class AboutUs extends Component {
  static navigationOptions = {
    title: "About Us",
  };

  render() {
    const renderLeaderInfo = ({ item }) => {
      return (
        <ListItem
          key={item.id}
          title={item.name}
          subtitle={item.description}
          hideChevron={true}
          leftAvatar={{ source: { uri: baseUrl + item.image } }}
        ></ListItem>
      );
    };
    return (
      <ScrollView style={{ margin: "auto" }}>
        <History />
        <Card title="Corporate Leadership">
          <FlatList
            data={this.props.leaders.leaders}
            renderItem={renderLeaderInfo}
            keyExtractor={(item) => item.id}
          ></FlatList>
        </Card>
      </ScrollView>
    );
  }
}

const History = () => {
  return (
    <Card title="Our History">
      <Text>
        Started in 2010, Ristorante con Fusion quickly established itself as a
        culinary icon par excellence in Hong Kong. With its unique brand of
        world fusion cuisine that can be found nowhere else, it enjoys patronage
        from the A-list clientele in Hong Kong. Featuring four of the best
        three-star Michelin chefs in the world, you never know what will arrive
        on your plate the next time you visit us.
      </Text>
      <Text></Text>
      <Text>
        The restaurant traces its humble beginnings to The Frying Pan, a
        successful chain started by our CEO, Mr. Peter Pan, that featured for
        the first time the world's best cuisines in a pan.
      </Text>
    </Card>
  );
};

export default connect(mapStateToProps)(AboutUs);
