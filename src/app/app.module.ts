import { APP_BASE_HREF } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { MatSnackBarModule } from '@angular/material';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { AngularFireModule } from 'angularfire2';
import { AngularFireAuth } from 'angularfire2/auth';
import { AngularFirestore, AngularFirestoreModule } from 'angularfire2/firestore';
import { AngularFireStorageModule } from 'angularfire2/storage';
import { ToastrModule } from 'ngx-toastr';

import { config } from '../app/config/config';
import { CoreModule } from './@core/core.module';
import { ThemeModule } from './@theme/theme.module';
import { TableModule } from './admin/table/table.module';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CanDeactivateGuard } from './guards/can-deactivate-guard.service';
import { AuthService } from './services/auth.service';
import { CategoriaService } from './services/categoria.service';
import { CompraService } from './services/compra.service';
import { DepositoService } from './services/deposito.service';
import { EventoService } from './services/evento.service';
import { IngressosService } from './services/ingressos.service';
import { NotificacaoService } from './services/notificacao.service';
import { QueryService } from './services/query.service';
import { ThemeService } from './services/theme.service';
import { UsuarioService } from './services/usuario.service';

/**
 * @license
 * Copyright Akveo. All Rights Reserved.
 * Licensed under the MIT License. See License.txt in the project root for license information.
 */
@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatSnackBarModule,
    HttpClientModule,
    AppRoutingModule,
    TableModule,
    AngularFireModule.initializeApp(config.fire),
    AngularFirestoreModule,
    AngularFireStorageModule,
    ToastrModule.forRoot({
      timeOut: 5000,
      positionClass: 'toast-bottom-right',
      preventDuplicates: true,
      progressBar: true,
    }),
    NgbModule.forRoot(),
    ThemeModule.forRoot(),
    CoreModule.forRoot(),
  ],
  bootstrap: [AppComponent],
  providers: [
    { provide: APP_BASE_HREF, useValue: '/' },
    QueryService,
    EventoService,
    AngularFirestore,
    AngularFireAuth,
    CategoriaService,
    NotificacaoService,
    ThemeService,
    AuthService,
    IngressosService,
    CanDeactivateGuard,
    DepositoService,
    UsuarioService,
    CompraService,
  ],
})
export class AppModule { }
