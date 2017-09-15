"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var store_1 = require("@ngrx/store");
var counter_reducer_1 = require("./counter.reducer");
var ItemsComponent = /** @class */ (function () {
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
    ItemsComponent = __decorate([
        core_1.Component({
            selector: 'ns-items',
            moduleId: module.id,
            templateUrl: './items.component.html'
        }),
        __metadata("design:paramtypes", [store_1.Store])
    ], ItemsComponent);
    return ItemsComponent;
}());
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaXRlbXMuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiaXRlbXMuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsc0NBQWtEO0FBRWxELHFDQUFvQztBQUNwQyxxREFBZ0U7QUFXaEU7SUFHQyx3QkFBb0IsS0FBc0I7UUFBdEIsVUFBSyxHQUFMLEtBQUssQ0FBaUI7UUFDekMsSUFBSSxDQUFDLE9BQU8sR0FBRyxLQUFLLENBQUMsTUFBTSxDQUFDLFNBQVMsQ0FBQyxDQUFDO0lBQ3hDLENBQUM7SUFFRCxrQ0FBUyxHQUFUO1FBQ0MsSUFBSSxDQUFDLEtBQUssQ0FBQyxRQUFRLENBQUMsRUFBRSxJQUFJLEVBQUUsMkJBQVMsRUFBRSxDQUFDLENBQUM7SUFDMUMsQ0FBQztJQUVELGtDQUFTLEdBQVQ7UUFDQyxJQUFJLENBQUMsS0FBSyxDQUFDLFFBQVEsQ0FBQyxFQUFFLElBQUksRUFBRSwyQkFBUyxFQUFFLENBQUMsQ0FBQztJQUMxQyxDQUFDO0lBRUQsOEJBQUssR0FBTDtRQUNDLElBQUksQ0FBQyxLQUFLLENBQUMsUUFBUSxDQUFDLEVBQUUsSUFBSSxFQUFFLHVCQUFLLEVBQUUsQ0FBQyxDQUFDO0lBQ3RDLENBQUM7SUFqQlcsY0FBYztRQUwxQixnQkFBUyxDQUFDO1lBQ1AsUUFBUSxFQUFFLFVBQVU7WUFDcEIsUUFBUSxFQUFFLE1BQU0sQ0FBQyxFQUFFO1lBQ3RCLFdBQVcsRUFBRSx3QkFBd0I7U0FDckMsQ0FBQzt5Q0FJMEIsYUFBSztPQUhwQixjQUFjLENBa0IxQjtJQUFELHFCQUFDO0NBQUEsQUFsQkQsSUFrQkM7QUFsQlksd0NBQWM7QUFxQjNCLHFEQUFxRDtBQUVyRCxpQ0FBaUM7QUFDakMsZ0RBQWdEO0FBQ2hELDREQUE0RDtBQUU1RCxlQUFlO0FBQ2YsNEJBQTRCO0FBQzVCLDJCQUEyQjtBQUMzQiw2Q0FBNkM7QUFDN0MsS0FBSztBQUNMLGtEQUFrRDtBQUNsRCxxQkFBcUI7QUFFckIsb0pBQW9KO0FBQ3BKLHdIQUF3SDtBQUN4SCx3REFBd0Q7QUFFeEQseUJBQXlCO0FBQ3pCLG9EQUFvRDtBQUVwRCwwQkFBMEI7QUFDMUIscUJBQXFCO0FBQ3JCLDBCQUEwQjtBQUMxQix1Q0FBdUM7QUFDdkMsd0NBQXdDO0FBQ3hDLDRCQUE0QjtBQUM1QixrREFBa0Q7QUFDbEQsdUVBQXVFO0FBQ3ZFLDRCQUE0QjtBQUM1Qix5QkFBeUI7QUFDekIscUJBQXFCO0FBQ3JCLDBFQUEwRTtBQUMxRSxpQkFBaUI7QUFDakIsUUFBUTtBQUNSLElBQUkiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIE9uSW5pdCB9IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XG5pbXBvcnQgeyBPYnNlcnZhYmxlIH0gZnJvbSAncnhqcy9PYnNlcnZhYmxlJztcbmltcG9ydCB7IFN0b3JlIH0gZnJvbSAnQG5ncngvc3RvcmUnO1xuaW1wb3J0IHsgSU5DUkVNRU5ULCBERUNSRU1FTlQsIFJFU0VUIH0gZnJvbSAnLi9jb3VudGVyLnJlZHVjZXInO1xuXG5pbnRlcmZhY2UgQXBwU3RhdGUge1xuICBjb3VudGVyOiBudW1iZXI7XG59XG5cbkBDb21wb25lbnQoe1xuICAgIHNlbGVjdG9yOiAnbnMtaXRlbXMnLFxuICAgIG1vZHVsZUlkOiBtb2R1bGUuaWQsXG5cdHRlbXBsYXRlVXJsOiAnLi9pdGVtcy5jb21wb25lbnQuaHRtbCdcbn0pXG5leHBvcnQgY2xhc3MgSXRlbXNDb21wb25lbnQge1xuXHRjb3VudGVyOiBPYnNlcnZhYmxlPG51bWJlcj47XG5cblx0Y29uc3RydWN0b3IocHJpdmF0ZSBzdG9yZTogU3RvcmU8QXBwU3RhdGU+KXtcblx0XHR0aGlzLmNvdW50ZXIgPSBzdG9yZS5zZWxlY3QoJ2NvdW50ZXInKTtcblx0fVxuXG5cdGluY3JlbWVudCgpe1xuXHRcdHRoaXMuc3RvcmUuZGlzcGF0Y2goeyB0eXBlOiBJTkNSRU1FTlQgfSk7XG5cdH1cblxuXHRkZWNyZW1lbnQoKXtcblx0XHR0aGlzLnN0b3JlLmRpc3BhdGNoKHsgdHlwZTogREVDUkVNRU5UIH0pO1xuXHR9XG5cblx0cmVzZXQoKXtcblx0XHR0aGlzLnN0b3JlLmRpc3BhdGNoKHsgdHlwZTogUkVTRVQgfSk7XG5cdH1cbn1cblxuXG4vLyBpbXBvcnQgeyBDb21wb25lbnQsIE9uSW5pdCB9IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XG5cbi8vIGltcG9ydCB7IEl0ZW0gfSBmcm9tIFwiLi9pdGVtXCI7XG4vLyBpbXBvcnQgeyBJdGVtU2VydmljZSB9IGZyb20gXCIuL2l0ZW0uc2VydmljZVwiO1xuLy8gaW1wb3J0ICogYXMgZmlyZWJhc2UgZnJvbSBcIm5hdGl2ZXNjcmlwdC1wbHVnaW4tZmlyZWJhc2VcIjtcblxuLy8gQENvbXBvbmVudCh7XG4vLyAgICAgc2VsZWN0b3I6IFwibnMtaXRlbXNcIixcbi8vICAgICBtb2R1bGVJZDogbW9kdWxlLmlkLFxuLy8gICAgIHRlbXBsYXRlVXJsOiBcIi4vaXRlbXMuY29tcG9uZW50Lmh0bWxcIixcbi8vIH0pXG4vLyBleHBvcnQgY2xhc3MgSXRlbXNDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xuLy8gICAgIGl0ZW1zOiBJdGVtW107XG5cbi8vICAgICAvLyBUaGlzIHBhdHRlcm4gbWFrZXMgdXNlIG9mIEFuZ3VsYXLigJlzIGRlcGVuZGVuY3kgaW5qZWN0aW9uIGltcGxlbWVudGF0aW9uIHRvIGluamVjdCBhbiBpbnN0YW5jZSBvZiB0aGUgSXRlbVNlcnZpY2Ugc2VydmljZSBpbnRvIHRoaXMgY2xhc3MuIFxuLy8gICAgIC8vIEFuZ3VsYXIga25vd3MgYWJvdXQgdGhpcyBzZXJ2aWNlIGJlY2F1c2UgaXQgaXMgaW5jbHVkZWQgaW4geW91ciBhcHDigJlzIG1haW4gTmdNb2R1bGUsIGRlZmluZWQgaW4gYXBwLm1vZHVsZS50cy5cbi8vICAgICBjb25zdHJ1Y3Rvcihwcml2YXRlIGl0ZW1TZXJ2aWNlOiBJdGVtU2VydmljZSkgeyB9XG5cbi8vICAgICBuZ09uSW5pdCgpOiB2b2lkIHtcbi8vICAgICAgICAgdGhpcy5pdGVtcyA9IHRoaXMuaXRlbVNlcnZpY2UuZ2V0SXRlbXMoKTtcblxuLy8gICAgICAgICBmaXJlYmFzZS5pbml0KClcbi8vICAgICAgICAgICAgIC50aGVuKFxuLy8gICAgICAgICAgICAgICAgICgpID0+IHtcbi8vICAgICAgICAgICAgICAgICAgICAgZmlyZWJhc2UudXBkYXRlKFxuLy8gICAgICAgICAgICAgICAgICAgICAgICAgJy9jb21wYW5pZXMnLFxuLy8gICAgICAgICAgICAgICAgICAgICAgICAge1xuLy8gICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZvbzogJ0FjY2lvbiBMYWJzJyxcbi8vICAgICAgICAgICAgICAgICAgICAgICAgICAgICB1cGRhdGVUczogZmlyZWJhc2UuU2VydmVyVmFsdWUuVElNRVNUQU1QXG4vLyAgICAgICAgICAgICAgICAgICAgICAgICB9XG4vLyAgICAgICAgICAgICAgICAgICAgICk7XG4vLyAgICAgICAgICAgICAgICAgfSxcbi8vICAgICAgICAgICAgICAgICAoZXJyb3IpID0+IGNvbnNvbGUubG9nKFwiZmlyZWJhc2UuaW5pdCBlcnJvcjogXCIgKyBlcnJvcilcbi8vICAgICAgICAgICAgICk7XG4vLyAgICAgfVxuLy8gfSJdfQ==