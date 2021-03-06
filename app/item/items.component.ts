import { Component, OnInit } from "@angular/core";
import { Observable } from 'rxjs/Observable';
import { Store } from '@ngrx/store';
import { INCREMENT, DECREMENT, RESET } from './counter.reducer';

interface AppState {
  counter: number;
}

@Component({
    selector: 'ns-items',
    moduleId: module.id,
	templateUrl: './items.component.html'
})
export class ItemsComponent {
	counter: Observable<number>;

	constructor(private store: Store<AppState>){
		this.counter = store.select('counter');
	}

	increment(){
		this.store.dispatch({ type: INCREMENT });
	}

	decrement(){
		this.store.dispatch({ type: DECREMENT });
	}

	reset(){
		this.store.dispatch({ type: RESET });
	}
}


// import { Component, OnInit } from "@angular/core";

// import { Item } from "./item";
// import { ItemService } from "./item.service";
// import * as firebase from "nativescript-plugin-firebase";

// @Component({
//     selector: "ns-items",
//     moduleId: module.id,
//     templateUrl: "./items.component.html",
// })
// export class ItemsComponent implements OnInit {
//     items: Item[];

//     // This pattern makes use of Angular’s dependency injection implementation to inject an instance of the ItemService service into this class. 
//     // Angular knows about this service because it is included in your app’s main NgModule, defined in app.module.ts.
//     constructor(private itemService: ItemService) { }

//     ngOnInit(): void {
//         this.items = this.itemService.getItems();

//         firebase.init()
//             .then(
//                 () => {
//                     firebase.update(
//                         '/companies',
//                         {
//                             foo: 'Accion Labs',
//                             updateTs: firebase.ServerValue.TIMESTAMP
//                         }
//                     );
//                 },
//                 (error) => console.log("firebase.init error: " + error)
//             );
//     }
// }