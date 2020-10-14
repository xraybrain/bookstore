import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { ReactiveFormsModule, FormsModule } from "@angular/forms";
import { HttpClientModule } from "@angular/common/http";

import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { ToastrModule } from "ngx-toastr";
import { NgbModule, NgbActiveModal } from "@ng-bootstrap/ng-bootstrap";
import { JwtModule } from "@auth0/angular-jwt";
import { Angular4PaystackModule } from "angular4-paystack";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { AngularFontAwesomeModule } from "angular-font-awesome";
import { HomepageComponent } from "./homepage/homepage.component";
import { BookItemComponent } from "./book-item/book-item.component";
import { BookListComponent } from "./book-list/book-list.component";
import { LoginComponent } from "./login/login.component";
import { SignupComponent } from "./signup/signup.component";
import { BooksComponent } from "./books/books.component";
import { BookSearchBarComponent } from "./book-search-bar/book-search-bar.component";
import { BookDetailComponent } from "./book-detail/book-detail.component";
import { CartComponent } from "./cart/cart.component";
import { CartItemComponent } from "./cart-item/cart-item.component";
import { AdminDashboardComponent } from "./admin/admin-dashboard/admin-dashboard.component";
import { BooksComponent as AdminBooksComponent } from "./admin/books/books.component";
import { SidebarComponent } from "./admin/sidebar/sidebar/sidebar.component";
import { BaseModalComponent } from "./base-modal/base-modal.component";
import { EditBookModalComponent } from "./admin/edit-book-modal/edit-book-modal.component";
import { WarningDialogComponent } from "./warning-dialog/warning-dialog.component";
import { OrdersComponent } from "./admin/orders/orders.component";
import { StudentsComponent } from "./admin/students/students.component";
import { LecturersComponent } from "./admin/lecturers/lecturers.component";
import { TransactionsComponent } from "./admin/transactions/transactions.component";
import { ProfileCardComponent } from "./profile-card/profile-card.component";
import { CheckoutComponent } from "./checkout/checkout.component";
import { OrdersComponent as StudentOrders } from "./orders/orders.component";
import { OrderItemsComponent } from "./order-items/order-items.component";
import { StudentProfileComponent } from "./student-profile/student-profile.component";
import { LecturerProfileComponent } from "./lecturer/lecturer-profile/lecturer-profile.component";
import { LecturerTransactionComponent } from "./lecturer/lecturer-transaction/lecturer-transaction.component";
import { ChangeOrderStatusModalComponent } from "./admin/change-order-status-modal/change-order-status-modal.component";
import { LecturerBooksComponent } from './lecturer/lecturer-books/lecturer-books.component';

// this function retrieves the token
export function tokenGetter() {
  return localStorage.getItem("access_token");
}

@NgModule({
  declarations: [
    AppComponent,
    HomepageComponent,
    BookItemComponent,
    BookListComponent,
    LoginComponent,
    SignupComponent,
    BooksComponent,
    BookSearchBarComponent,
    BookDetailComponent,
    CartComponent,
    CartItemComponent,
    AdminDashboardComponent,
    AdminBooksComponent,
    SidebarComponent,
    BaseModalComponent,
    EditBookModalComponent,
    WarningDialogComponent,
    OrdersComponent,
    StudentsComponent,
    LecturersComponent,
    TransactionsComponent,
    ProfileCardComponent,
    CheckoutComponent,
    StudentOrders,
    OrderItemsComponent,
    StudentProfileComponent,
    LecturerProfileComponent,
    LecturerTransactionComponent,
    ChangeOrderStatusModalComponent,
    LecturerBooksComponent,
  ],
  entryComponents: [
    BaseModalComponent,
    EditBookModalComponent,
    WarningDialogComponent,
    ProfileCardComponent,
    ChangeOrderStatusModalComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AngularFontAwesomeModule,
    ReactiveFormsModule,
    FormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    ToastrModule.forRoot({
      progressBar: true,
      timeOut: 5000,
      maxOpened: 1,
    }),
    NgbModule,
    JwtModule.forRoot({
      config: {
        tokenGetter: tokenGetter,
        allowedDomains: ["localhost:4100"],
        disallowedRoutes: ["localhost:4100/api/auth/"],
      },
    }),
    Angular4PaystackModule.forRoot(
      "pk_test_c3cd2b6a8c267691e93f3b29ab8c015061618895"
    ),
  ],
  providers: [NgbActiveModal],
  bootstrap: [AppComponent],
})
export class AppModule {}
