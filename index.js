import * as React from 'react'
import { Navigation } from 'react-native-navigation'
import { Script, ScriptManager } from '@callstack/repack/client'
import AsyncStorage from '@react-native-async-storage/async-storage'

console.log('Starting!')

ScriptManager.shared.setStorage(AsyncStorage)
ScriptManager.shared.addResolver(async (scriptId, caller) => {
  console.log('Resolving ', scriptId, ' from ', caller)
  if (__DEV__) {
    console.log('Resolving from dev server...')
    return {
      url: Script.getDevServerURL(scriptId),
      cache: false,
    }
  }
  console.log('Resolving from remote server...')

  return {
    url: Script.getRemoteURL(`TODO`),
  }
})

const LazyApp = React.lazy(() => import('./routes/App'))
const LazySecond = React.lazy(() => import('./routes/Second'))

Navigation.registerComponent('Home', () => props => (
  <React.Suspense fallback={null}>
    <LazyApp {...props} />
  </React.Suspense>
))
Navigation.registerComponent('Second', () => props => (
  <React.Suspense fallback={null}>
    <LazySecond {...props} />
  </React.Suspense>
))

Navigation.events().registerAppLaunchedListener(() => {
  Navigation.setRoot({
    root: {
      stack: {
        children: [{ component: { name: 'Home' } }],
      },
    },
  })
})
