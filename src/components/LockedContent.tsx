import {
  IonPage,
  IonHeader,
  IonToolbar,
  IonTitle,
  IonContent,
  IonButton,
  IonIcon,
  IonFooter,
} from "@ionic/react";
import { lockClosed, lockOpen } from "ionicons/icons";
import React from "react";

interface LockedContentProps {
  validateBiometric: () => void;
}

export default function LockedContent({
  validateBiometric,
}: LockedContentProps) {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>App Bloqueado</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonFooter className="ion-padding" style={{marginBottom: 32}}>
        <IonButton expand="full" onClick={validateBiometric}>
          <IonIcon icon={lockOpen} style={{ marginRight: 16 }}></IonIcon>
          Desbloquear com FaceID
        </IonButton>
      </IonFooter>
    </IonPage>
  );
}
