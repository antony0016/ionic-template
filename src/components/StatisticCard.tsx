import { IonCard, IonCardContent, IonCardHeader, IonCardTitle, IonText } from "@ionic/react";

interface CardProps {
    title: string;
    value: string;
}

const StatisticCard: React.FC<CardProps> = ({ title, value }) => {
    return (
        <IonCard>
            <IonCardHeader>
                <IonCardTitle>
                    {title}
                </IonCardTitle>
            </IonCardHeader>
            <IonCardContent>
                <IonText>
                    <h1>{value}</h1>
                </IonText>
            </IonCardContent>
        </IonCard>
    );
};

export default StatisticCard;