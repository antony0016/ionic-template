import { IonCard, IonContent, IonCardHeader, IonPage, IonCardTitle, IonCardContent, IonButton, IonGrid, IonRow, IonCol, IonIcon, IonInput } from '@ionic/react';
import { useAppDispatch, useAppSelector } from '../store';
import { login } from '../features/auth/authSlice';
import { useHistory } from 'react-router';
import { airplane } from 'ionicons/icons';

import "./Login.css"

const Login: React.FC = () => {

    const isLoggedIn = useAppSelector(state => state.authReducer.isLoggedIn)
    const dispatch = useAppDispatch()
    const history = useHistory()
    // setInterval(() => {
    //     console.log(isLoggedIn)
    // }, 1000)

    return (
        <IonPage>
            <IonContent fullscreen>
                <IonCard className='mt-200'>
                    <IonCardContent>
                        <IonGrid>
                            <IonRow class='ion-justify-content-center'>
                                <IonCol size='auto'>
                                    <IonIcon icon={airplane} size='large'>
                                    </IonIcon>
                                </IonCol>
                            </IonRow>
                            <IonRow>
                                <IonCol size='12'>
                                    <IonInput label='username' labelPlacement="floating" />
                                </IonCol>
                                <IonCol size='12'>
                                    <IonInput label='password' labelPlacement="floating" />
                                </IonCol>
                                <IonCol size='12'>
                                    <IonButton onClick={() => {
                                        dispatch(login())
                                        history.replace("/home")
                                    }} expand='block'>
                                        Login
                                    </IonButton>
                                </IonCol>
                            </IonRow>
                        </IonGrid>
                    </IonCardContent>
                </IonCard>
            </IonContent>
        </IonPage>
    );
};

export default Login;
