import {
  IonButton,
  IonContent,
  IonGrid,
  IonHeader,
  IonIcon,
  IonPage,
  IonTitle,
  IonToolbar
} from "@ionic/react";
import { logoGoogle } from "ionicons/icons";
import React, { useContext } from "react";
import { Redirect } from "react-router";
import AuthContext from "../context/auth.context";

const LoginPage: React.FC = () => {
  const { loggedIn, signInWithGoogle } = useContext(AuthContext);

  return !loggedIn ? (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>BiometricsApp</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent className="ion-padding ion-center">
        <IonGrid>
          <IonTitle>
            <IonButton expand="full" onClick={signInWithGoogle}>
              <IonIcon icon={logoGoogle} style={{ marginRight: 8 }} /> Login com
              o Google
            </IonButton>
          </IonTitle>
        </IonGrid>
      </IonContent>
    </IonPage>
  ) : (
    <Redirect to={"/home"} />
  );
};

export default LoginPage;
