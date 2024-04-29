import { IonButton, IonCard, IonCardContent, IonCardHeader, IonCardTitle } from "@ionic/react";
import { useAppDispatch } from "../store";
import { logout } from "../features/auth/authSlice";

const LogoutButton: React.FC = () => {

    const dispatch = useAppDispatch()

    return (
        <IonCard>
            <IonCardContent>
                <IonButton onClick={() => {
                    dispatch(logout())
                }} expand="block" size="large">
                    Logout
                </IonButton>
            </IonCardContent>
        </IonCard>
    )
};

export default LogoutButton;