import React from 'react';

import { View, Text } from 'react-native';

import {
  VictoryPie }
from "victory-native";







export default class PieChart extends React.Component {
  render() {
    return (
      <View>
      <VictoryPie
        data={[
          { x: "Sugar", y: 10 },
          { x: "Carbs", y: 10 },
          { x: "Fat", y: 10 },
          { x: "Calories", y: 50 },
          { x: "Protein", y: 20 }
        ]}
        categories={{ x: ["Sugar", "Carbs", "Fat", "Calories", "Protein"] }}
        colorScale={["crimson", "cadetblue", "darkgreen", "darkmagenta", "goldenrod" ]}
        innerRadius={100}
        animate={{ duration: 2000 }}
        animate={{
    onExit: {
      duration: 500,
      before: () => ({ opacity: 0.3, _y: 0 })
    },
    onEnter: {
      duration: 500,
      before: () => ({ opacity: 0.3, _y: 0 }),
      after: (datum) => ({ opacity: 1, _y: datum._y })
    }
  }}
      />
      </View>
    );
  }
}
