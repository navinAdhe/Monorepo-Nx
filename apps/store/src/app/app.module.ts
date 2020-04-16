import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { MatCardModule } from '@angular/material/card';
import { RouterModule } from '@angular/router';
import { StoreUiSharedModule } from '@bg-hoard/store/ui-shared';

@NgModule({
  declarations: [AppComponent],
  imports: [
    MatCardModule,
    StoreUiSharedModule,
    BrowserModule,
    RouterModule.forRoot(
      [
        {
          path: 'game/:id',
          loadChildren: () =>
            import('@bg-hoard/store/feature-game-detail').then(
              module => module.StoreFeatureGameDetailModule
            )
        },
        // {
        //   path: 'game/:id', // <---- HERE
        //   loadChildren: () =>
        //       import('@bg-hoard/store/feature-game-detail').then(/* ... */)
        //   }
      ],
      { initialNavigation: 'enabled' }
    )
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
