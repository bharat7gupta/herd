"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var store_1 = require("@ngrx/store");
var counter_reducer_1 = require("./counter.reducer");
var ItemsComponent = (function () {
    function ItemsComponent(store) {
        this.store = store;
        this.counter = store.select('counter');
    }
    ItemsComponent.prototype.increment = function () {
        this.store.dispatch({ type: counter_reducer_1.INCREMENT });
    };
    ItemsComponent.prototype.decrement = function () {
        this.store.dispatch({ type: counter_reducer_1.DECREMENT });
    };
    ItemsComponent.prototype.reset = function () {
        this.store.dispatch({ type: counter_reducer_1.RESET });
    };
    return ItemsComponent;
}());
ItemsComponent = __decorate([
    core_1.Component({
        selector: 'ns-items',
        moduleId: module.id,
        templateUrl: './items.component.html'
    }),
    __metadata("design:paramtypes", [store_1.Store])
], ItemsComponent);
exports.ItemsComponent = ItemsComponent;
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaXRlbXMuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiaXRlbXMuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsc0NBQWtEO0FBRWxELHFDQUFvQztBQUNwQyxxREFBZ0U7QUFXaEUsSUFBYSxjQUFjO0lBRzFCLHdCQUFvQixLQUFzQjtRQUF0QixVQUFLLEdBQUwsS0FBSyxDQUFpQjtRQUN6QyxJQUFJLENBQUMsT0FBTyxHQUFHLEtBQUssQ0FBQyxNQUFNLENBQUMsU0FBUyxDQUFDLENBQUM7SUFDeEMsQ0FBQztJQUVELGtDQUFTLEdBQVQ7UUFDQyxJQUFJLENBQUMsS0FBSyxDQUFDLFFBQVEsQ0FBQyxFQUFFLElBQUksRUFBRSwyQkFBUyxFQUFFLENBQUMsQ0FBQztJQUMxQyxDQUFDO0lBRUQsa0NBQVMsR0FBVDtRQUNDLElBQUksQ0FBQyxLQUFLLENBQUMsUUFBUSxDQUFDLEVBQUUsSUFBSSxFQUFFLDJCQUFTLEVBQUUsQ0FBQyxDQUFDO0lBQzFDLENBQUM7SUFFRCw4QkFBSyxHQUFMO1FBQ0MsSUFBSSxDQUFDLEtBQUssQ0FBQyxRQUFRLENBQUMsRUFBRSxJQUFJLEVBQUUsdUJBQUssRUFBRSxDQUFDLENBQUM7SUFDdEMsQ0FBQztJQUNGLHFCQUFDO0FBQUQsQ0FBQyxBQWxCRCxJQWtCQztBQWxCWSxjQUFjO0lBTDFCLGdCQUFTLENBQUM7UUFDUCxRQUFRLEVBQUUsVUFBVTtRQUNwQixRQUFRLEVBQUUsTUFBTSxDQUFDLEVBQUU7UUFDdEIsV0FBVyxFQUFFLHdCQUF3QjtLQUNyQyxDQUFDO3FDQUkwQixhQUFLO0dBSHBCLGNBQWMsQ0FrQjFCO0FBbEJZLHdDQUFjO0FBcUIzQixxREFBcUQ7QUFFckQsaUNBQWlDO0FBQ2pDLGdEQUFnRDtBQUNoRCw0REFBNEQ7QUFFNUQsZUFBZTtBQUNmLDRCQUE0QjtBQUM1QiwyQkFBMkI7QUFDM0IsNkNBQTZDO0FBQzdDLEtBQUs7QUFDTCxrREFBa0Q7QUFDbEQscUJBQXFCO0FBRXJCLG9KQUFvSjtBQUNwSix3SEFBd0g7QUFDeEgsd0RBQXdEO0FBRXhELHlCQUF5QjtBQUN6QixvREFBb0Q7QUFFcEQsMEJBQTBCO0FBQzFCLHFCQUFxQjtBQUNyQiwwQkFBMEI7QUFDMUIsdUNBQXVDO0FBQ3ZDLHdDQUF3QztBQUN4Qyw0QkFBNEI7QUFDNUIsa0RBQWtEO0FBQ2xELHVFQUF1RTtBQUN2RSw0QkFBNEI7QUFDNUIseUJBQXlCO0FBQ3pCLHFCQUFxQjtBQUNyQiwwRUFBMEU7QUFDMUUsaUJBQWlCO0FBQ2pCLFFBQVE7QUFDUixJQUFJIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBPbkluaXQgfSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xuaW1wb3J0IHsgT2JzZXJ2YWJsZSB9IGZyb20gJ3J4anMvT2JzZXJ2YWJsZSc7XG5pbXBvcnQgeyBTdG9yZSB9IGZyb20gJ0BuZ3J4L3N0b3JlJztcbmltcG9ydCB7IElOQ1JFTUVOVCwgREVDUkVNRU5ULCBSRVNFVCB9IGZyb20gJy4vY291bnRlci5yZWR1Y2VyJztcblxuaW50ZXJmYWNlIEFwcFN0YXRlIHtcbiAgY291bnRlcjogbnVtYmVyO1xufVxuXG5AQ29tcG9uZW50KHtcbiAgICBzZWxlY3RvcjogJ25zLWl0ZW1zJyxcbiAgICBtb2R1bGVJZDogbW9kdWxlLmlkLFxuXHR0ZW1wbGF0ZVVybDogJy4vaXRlbXMuY29tcG9uZW50Lmh0bWwnXG59KVxuZXhwb3J0IGNsYXNzIEl0ZW1zQ29tcG9uZW50IHtcblx0Y291bnRlcjogT2JzZXJ2YWJsZTxudW1iZXI+O1xuXG5cdGNvbnN0cnVjdG9yKHByaXZhdGUgc3RvcmU6IFN0b3JlPEFwcFN0YXRlPil7XG5cdFx0dGhpcy5jb3VudGVyID0gc3RvcmUuc2VsZWN0KCdjb3VudGVyJyk7XG5cdH1cblxuXHRpbmNyZW1lbnQoKXtcblx0XHR0aGlzLnN0b3JlLmRpc3BhdGNoKHsgdHlwZTogSU5DUkVNRU5UIH0pO1xuXHR9XG5cblx0ZGVjcmVtZW50KCl7XG5cdFx0dGhpcy5zdG9yZS5kaXNwYXRjaCh7IHR5cGU6IERFQ1JFTUVOVCB9KTtcblx0fVxuXG5cdHJlc2V0KCl7XG5cdFx0dGhpcy5zdG9yZS5kaXNwYXRjaCh7IHR5cGU6IFJFU0VUIH0pO1xuXHR9XG59XG5cblxuLy8gaW1wb3J0IHsgQ29tcG9uZW50LCBPbkluaXQgfSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xuXG4vLyBpbXBvcnQgeyBJdGVtIH0gZnJvbSBcIi4vaXRlbVwiO1xuLy8gaW1wb3J0IHsgSXRlbVNlcnZpY2UgfSBmcm9tIFwiLi9pdGVtLnNlcnZpY2VcIjtcbi8vIGltcG9ydCAqIGFzIGZpcmViYXNlIGZyb20gXCJuYXRpdmVzY3JpcHQtcGx1Z2luLWZpcmViYXNlXCI7XG5cbi8vIEBDb21wb25lbnQoe1xuLy8gICAgIHNlbGVjdG9yOiBcIm5zLWl0ZW1zXCIsXG4vLyAgICAgbW9kdWxlSWQ6IG1vZHVsZS5pZCxcbi8vICAgICB0ZW1wbGF0ZVVybDogXCIuL2l0ZW1zLmNvbXBvbmVudC5odG1sXCIsXG4vLyB9KVxuLy8gZXhwb3J0IGNsYXNzIEl0ZW1zQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcbi8vICAgICBpdGVtczogSXRlbVtdO1xuXG4vLyAgICAgLy8gVGhpcyBwYXR0ZXJuIG1ha2VzIHVzZSBvZiBBbmd1bGFy4oCZcyBkZXBlbmRlbmN5IGluamVjdGlvbiBpbXBsZW1lbnRhdGlvbiB0byBpbmplY3QgYW4gaW5zdGFuY2Ugb2YgdGhlIEl0ZW1TZXJ2aWNlIHNlcnZpY2UgaW50byB0aGlzIGNsYXNzLiBcbi8vICAgICAvLyBBbmd1bGFyIGtub3dzIGFib3V0IHRoaXMgc2VydmljZSBiZWNhdXNlIGl0IGlzIGluY2x1ZGVkIGluIHlvdXIgYXBw4oCZcyBtYWluIE5nTW9kdWxlLCBkZWZpbmVkIGluIGFwcC5tb2R1bGUudHMuXG4vLyAgICAgY29uc3RydWN0b3IocHJpdmF0ZSBpdGVtU2VydmljZTogSXRlbVNlcnZpY2UpIHsgfVxuXG4vLyAgICAgbmdPbkluaXQoKTogdm9pZCB7XG4vLyAgICAgICAgIHRoaXMuaXRlbXMgPSB0aGlzLml0ZW1TZXJ2aWNlLmdldEl0ZW1zKCk7XG5cbi8vICAgICAgICAgZmlyZWJhc2UuaW5pdCgpXG4vLyAgICAgICAgICAgICAudGhlbihcbi8vICAgICAgICAgICAgICAgICAoKSA9PiB7XG4vLyAgICAgICAgICAgICAgICAgICAgIGZpcmViYXNlLnVwZGF0ZShcbi8vICAgICAgICAgICAgICAgICAgICAgICAgICcvY29tcGFuaWVzJyxcbi8vICAgICAgICAgICAgICAgICAgICAgICAgIHtcbi8vICAgICAgICAgICAgICAgICAgICAgICAgICAgICBmb286ICdBY2Npb24gTGFicycsXG4vLyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdXBkYXRlVHM6IGZpcmViYXNlLlNlcnZlclZhbHVlLlRJTUVTVEFNUFxuLy8gICAgICAgICAgICAgICAgICAgICAgICAgfVxuLy8gICAgICAgICAgICAgICAgICAgICApO1xuLy8gICAgICAgICAgICAgICAgIH0sXG4vLyAgICAgICAgICAgICAgICAgKGVycm9yKSA9PiBjb25zb2xlLmxvZyhcImZpcmViYXNlLmluaXQgZXJyb3I6IFwiICsgZXJyb3IpXG4vLyAgICAgICAgICAgICApO1xuLy8gICAgIH1cbi8vIH0iXX0=