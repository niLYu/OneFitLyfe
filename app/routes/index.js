import HomeScreen from './Home/containers/Home';
import CalCalcScreen from './CalCalc/containers/CalCalc';
import DataScreen from './Data/containers/Data';
import DailyScreen from './Data/containers/Daily';

const Routes = {
  Home: { screen: HomeScreen },
  Calculator: { screen: CalCalcScreen },
  Data: {screen: DataScreen},
  Daily: {screen: DailyScreen}
}

export default Routes;
