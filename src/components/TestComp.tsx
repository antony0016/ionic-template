import { IonButton, IonCard, IonCardContent, IonCardHeader, IonCardTitle, IonText } from "@ionic/react";

interface CardProps {
    title: string;
    body: string;
    onClick?: () => void
}

const TestComp: React.FC<CardProps> = ({ title, body, onClick }) => {
    return (
        <IonCard>
            <IonCardHeader>
                <IonCardTitle>
                    {title}
                </IonCardTitle>
            </IonCardHeader>
            <IonCardContent>
                <IonText>
                    {body}
                </IonText>
            </IonCardContent>
        </IonCard>
    );
};

export default TestComp;