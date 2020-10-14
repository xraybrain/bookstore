import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { HomepageComponent } from "./homepage/homepage.component";
import { LoginComponent } from "./login/login.component";
import { SignupComponent } from "./signup/signup.component";
import { BooksComponent } from "./books/books.component";
import { BookDetailComponent } from "./book-detail/book-detail.component";
import { CartComponent } from "./cart/cart.component";
import { OrdersComponent as StudentOrders } from "./orders/orders.component";
import { StudentProfileComponent } from "./student-profile/student-profile.component";

import { AdminDashboardComponent } from "./admin/admin-dashboard/admin-dashboard.component";
import { BooksComponent as AdminBooksComponent } from "./admin/books/books.component";
import { OrdersComponent } from "./admin/orders/orders.component";
import { TransactionsComponent } from "./admin/transactions/transactions.component";
import { StudentsComponent } from "./admin/students/students.component";
import { LecturersComponent } from "./admin/lecturers/lecturers.component";
import { AuthGuard } from "./auth.guard";
import { CheckoutComponent } from "./checkout/checkout.component";
import { OrderItemsComponent } from "./order-items/order-items.component";
import { LecturerProfileComponent } from "./lecturer/lecturer-profile/lecturer-profile.component";
import { LecturerTransactionComponent } from "./lecturer/lecturer-transaction/lecturer-transaction.component";
import { LecturerBooksComponent } from "./lecturer/lecturer-books/lecturer-books.component";

const routes: Routes = [
  { path: "", component: HomepageComponent },
  { path: "login", component: LoginComponent },
  { path: "signup", component: SignupComponent },
  { path: "books", component: BooksComponent },
  { path: "book/detail/:id", component: BookDetailComponent },
  { path: "cart", canActivate: [AuthGuard], component: CartComponent },
  { path: "checkout", component: CheckoutComponent },
  { path: "orders", component: StudentOrders },
  { path: "order/items/:id", component: OrderItemsComponent },
  {
    path: "student/profile",
    canActivate: [AuthGuard],
    component: StudentProfileComponent,
  },

  { path: "admin/dashboard", component: AdminDashboardComponent },
  { path: "admin/books", component: AdminBooksComponent },
  { path: "admin/orders", component: OrdersComponent },
  { path: "admin/transactions", component: TransactionsComponent },
  { path: "admin/students", component: StudentsComponent },
  { path: "admin/lecturers", component: LecturersComponent },

  { path: "lecturer/profile", component: LecturerProfileComponent },
  { path: "lecturer/books", component: LecturerBooksComponent },
  {
    path: "lecturer/transactions/:bid",
    component: LecturerTransactionComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
