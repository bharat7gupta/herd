import { Component, OnInit } from "@angular/core";

import * as firebase from 'nativescript-plugin-firebase';

@Component({
    selector: "ns-app",
    templateUrl: "app.component.html",
})

export class AppComponent implements OnInit{ 

    ngOnInit() {
        firebase.init()
                .then(  (result) => console.log("firebase init success"),
                        (error) => console.log("firebase.init error: " + error));
    }
}
