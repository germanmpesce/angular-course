import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { AccountantComponent } from './accountant/accountant.component';


@NgModule ({
    declarations: [
        AccountantComponent
    ],
    exports: [
        AccountantComponent
    ],
    imports: [
        CommonModule
    ]
    
})
export class AccountantModule {}