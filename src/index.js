import React from 'react';
import { createRoot } from 'react-dom/client';
import {IonApp} from '@ionic/react';

const root_dom_element = document.getElementById('root');
const root = createRoot(root_dom_element);
root.render(
    <React.StrictMode>
        <IonApp>
            <div style={{ width: "100%", height: "100%", textAlign: "center" }}><h1>Hello world!</h1></div>
        </IonApp>
    </React.StrictMode>
);