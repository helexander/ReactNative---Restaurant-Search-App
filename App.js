import { createAppContainer } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";
import SearchScreen from "./src/screens/SearchScreen";

const navigator = createStackNavigator({
  Search: SearchScreen,
}, {
  //Default route to show when application starts
  initialRouteName: 'Search',
  defaultNavigationOptions: {
    title: 'Business Search'
  }
});

export default createAppContainer(navigator);