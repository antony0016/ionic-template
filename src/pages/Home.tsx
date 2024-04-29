import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar } from '@ionic/react';
import TestComp from '../components/TestComp';

const Home: React.FC = () => {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Home page</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
        <TestComp title='公告' body='測試公告'></TestComp>
      </IonContent>
    </IonPage>
  );
};

export default Home;
