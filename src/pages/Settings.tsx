import { IonContent, IonHeader, IonItem, IonLabel, IonList, IonPage, IonTitle, IonToolbar } from '@ionic/react';
import { nanoid } from '@reduxjs/toolkit';
import { useAppDispatch } from '../store';
import { logout } from '../features/auth/authSlice';
import { useHistory } from 'react-router';

const Settings: React.FC = () => {

  const dispatch = useAppDispatch()
  const history = useHistory()

  const settings = [1, 2, 3, 4, 5].map(s => {
    return (
      <IonItem key={nanoid()} button>
        <IonLabel>
          Setting {s}
        </IonLabel>
      </IonItem>
    )
  })
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Settings page</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
        <IonList>
          {settings}
          <IonItem onClick={() => {
            dispatch(logout())
            history.replace("/login")
          }} button>
            Logout
          </IonItem>
        </IonList>
      </IonContent>
    </IonPage>
  );
};

export default Settings;
