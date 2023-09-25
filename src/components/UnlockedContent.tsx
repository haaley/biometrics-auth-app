import React from "react";
import {
  IonAvatar,
  IonButton,
  IonCard,
  IonCardContent,
  IonCardHeader,
  IonContent,
  IonHeader,
  IonPage,
  IonTitle,
  IonToolbar,
} from "@ionic/react";
import { User } from "@capacitor-firebase/authentication";

interface UnlockedContentProps {
  user: User;
  handleSignOut: () => void;
}
export const UnlockedContent = ({
  user,
  handleSignOut,
}: UnlockedContentProps) => {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Perfil</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent className="ion-padding">
        <IonCard>
          <IonCardHeader>
            <IonAvatar>
              <img
                alt="Silhouette of a person's head"
                src={user?.photoUrl || ""}
              />
            </IonAvatar>
          </IonCardHeader>
          <IonCardContent>
            <h2>{user?.displayName}</h2>
            <p>{user?.email}</p>
          </IonCardContent>
        </IonCard>
        <IonButton expand="full" onClick={handleSignOut}>
          Logout
        </IonButton>
      </IonContent>
    </IonPage>
  );
};
