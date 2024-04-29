import { Route } from 'react-router-dom';
import {
  IonApp,
  IonIcon,
  IonLabel,
  IonRouterOutlet,
  IonTabBar,
  IonTabButton,
  IonTabs,
  setupIonicReact
} from '@ionic/react';
import { IonReactRouter } from '@ionic/react-router';

/* Core CSS required for Ionic components to work properly */
import '@ionic/react/css/core.css';

/* Basic CSS for apps built with Ionic */
import '@ionic/react/css/normalize.css';
import '@ionic/react/css/structure.css';
import '@ionic/react/css/typography.css';

/* Optional CSS utils that can be commented out */
import '@ionic/react/css/padding.css';
import '@ionic/react/css/float-elements.css';
import '@ionic/react/css/text-alignment.css';
import '@ionic/react/css/text-transformation.css';
import '@ionic/react/css/flex-utils.css';
import '@ionic/react/css/display.css';

/**
 * Ionic Dark Mode
 * -----------------------------------------------------
 * For more info, please see:
 * https://ionicframework.com/docs/theming/dark-mode
 */

/* import '@ionic/react/css/palettes/dark.always.css'; */
/* import '@ionic/react/css/palettes/dark.class.css'; */
import '@ionic/react/css/palettes/dark.system.css';

/* Theme variables */
import './theme/variables.css';
import Login from './pages/Login';
import RedirectLogin from './components/RedirectLogin';
import { useAppSelector } from './store';
import { homeSharp, analyticsSharp, settingsSharp } from 'ionicons/icons';
import Home from './pages/Home';
import Statistics from './pages/Statistics';
import Settings from './pages/Settings';

setupIonicReact();

const App: React.FC = () => {
  const isLoggedIn = useAppSelector((state) => state.authReducer.isLoggedIn)

  return (
    <IonApp>
      <IonReactRouter>
        <IonTabs>
          <IonRouterOutlet>
            <Route exact path="/home">
              <Home></Home>
              {/* {isLoggedIn ? <Home /> : <RedirectLogin />} */}
            </Route>
            <Route exact path="/statistics">
              <Statistics></Statistics>
              {/* {isLoggedIn ? <Statistics /> : <RedirectLogin />} */}
            </Route>
            <Route exact path="/settings">
              <Settings></Settings>
              {/* {isLoggedIn ? <Settings /> : <RedirectLogin />} */}
            </Route>
            <Route exact path="/login">
              <Login />
            </Route>
            <Route exact path="/" >
              <RedirectLogin />
            </Route>
          </IonRouterOutlet>
          <IonTabBar slot={isLoggedIn ? "bottom" : undefined}>
            <IonTabButton tab="home" href="/home">
              <IonIcon aria-hidden="true" icon={homeSharp} />
              <IonLabel>Home</IonLabel>
            </IonTabButton>
            <IonTabButton tab="statistics" href="/statistics">
              <IonIcon aria-hidden="true" icon={analyticsSharp} />
              <IonLabel>Statistics</IonLabel>
            </IonTabButton>
            <IonTabButton tab="settings" href="/settings">
              <IonIcon aria-hidden="true" icon={settingsSharp} />
              <IonLabel>Settings</IonLabel>
            </IonTabButton>
          </IonTabBar>
        </IonTabs>
      </IonReactRouter>
    </IonApp>
  );
}

export default App;
