import { ApplicationConfig, provideZoneChangeDetection } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { initializeApp, provideFirebaseApp } from '@angular/fire/app';
import { getAuth, provideAuth } from '@angular/fire/auth';
import { getFirestore, provideFirestore } from '@angular/fire/firestore';
import { getDatabase, provideDatabase } from '@angular/fire/database';
import { getMessaging, provideMessaging } from '@angular/fire/messaging';
import { getStorage, provideStorage } from '@angular/fire/storage';

export const appConfig: ApplicationConfig = {
  providers: [provideZoneChangeDetection({ eventCoalescing: true }), provideRouter(routes), provideFirebaseApp(() => initializeApp({"projectId":"miscstocks","appId":"1:180417451805:web:a81f6599429e7f6c46f3f4","databaseURL":"https://miscstocks-default-rtdb.firebaseio.com","storageBucket":"miscstocks.appspot.com","apiKey":"AIzaSyAYxN8SdHAYeTGNcUWTQHewEk0JZ1_B0r0","authDomain":"miscstocks.firebaseapp.com","messagingSenderId":"180417451805","measurementId":"G-V3XPX97SZE"})), provideAuth(() => getAuth()), provideFirestore(() => getFirestore()), provideDatabase(() => getDatabase()), provideMessaging(() => getMessaging()), provideStorage(() => getStorage())]
};
