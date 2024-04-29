import { IonCol, IonContent, IonGrid, IonHeader, IonPage, IonRow, IonTitle, IonToolbar } from '@ionic/react';
import StatisticCard from '../components/StatisticCard';

const Statistics: React.FC = () => {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Statistics page</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
        <IonGrid>
          <IonRow>
            <IonCol>
              <StatisticCard title='本月工單數' value='49張'></StatisticCard>
            </IonCol>
          </IonRow>
          <IonRow>
            <IonCol>
              <StatisticCard title='本月營收' value='103k'></StatisticCard>
            </IonCol>
            <IonCol>
              <StatisticCard title='本週營收' value='20k'></StatisticCard>
            </IonCol>
          </IonRow>
        </IonGrid>
      </IonContent>
    </IonPage>
  );
};

export default Statistics;
