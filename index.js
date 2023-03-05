import { Navigation } from 'react-native-navigation'
import App from './routes/App'
import Second from './routes/Second'

Navigation.registerComponent('Home', () => App)
Navigation.registerComponent('Second', () => Second)

Navigation.events().registerAppLaunchedListener(() => {
  Navigation.setRoot({
    root: {
      stack: {
        children: [{ component: { name: 'Home' } }],
      },
    },
  })
})
