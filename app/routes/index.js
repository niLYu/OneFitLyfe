import HomeScreen from './Home/containers/Home';
import CalCalcScreen from './CalCalc/containers/CalCalc';
import DataScreen from './Data/containers/Data';

const Routes = {
  Home: { screen: HomeScreen },
  Calculator: { screen: CalCalcScreen },
  Data: {screen: DataScreen},
}

export default Routes;
