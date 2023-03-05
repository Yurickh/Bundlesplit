import { Navigation } from 'react-native-navigation'
import App from './routes/App'

Navigation.registerComponent('Home', () => App)

Navigation.events().registerAppLaunchedListener(() => {
  Navigation.setRoot({
    root: {
      stack: {
        children: [{ component: { name: 'Home' } }],
      },
    },
  })
})
