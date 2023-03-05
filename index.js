import * as React from 'react'
import { Navigation } from 'react-native-navigation'

Navigation.registerComponent('Home', () =>
  React.lazy(() => import('./routes/App').then(x => x.default)),
)
Navigation.registerComponent('Second', () =>
  React.lazy(() => import('./routes/Second').then(x => x.default)),
)

Navigation.events().registerAppLaunchedListener(() => {
  Navigation.setRoot({
    root: {
      stack: {
        children: [{ component: { name: 'Home' } }],
      },
    },
  })
})
