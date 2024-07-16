import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
    selector: 'app-user-loader',
    standalone: true,
    template: `<div class="loader">`,
    imports: [CommonModule],
})

export class UsersLoaderComponent {
    constructor() {
        
    }
}