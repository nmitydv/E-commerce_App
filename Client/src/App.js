import './App.css';
import HomePage from './pages/HomePage';
import { BrowserRouter, Routes, Route } from'react-router-dom';
import ProductListPage from './pages/ProductListPage';
import ProductDetailsPage from './pages/ProductDetailsPage';
import CartPage from './pages/CartPage';
import LoginPage from './pages/LoginPage';
import RegisterPage from './pages/RegisterPage';
import UserProfilePage from './pages/user/UserProfilePage';
import UserCartDetailsPage from './pages/user/UserCartDetailsPage';
import UserOrdersPage from './pages/user/UserOrdersPage';
import UserOrderDetailsPage from './pages/user/UserOrderDetails.Page';
import ProtectedRouteComponent from './components/ProtectedRouteComponent';
import AdminUsersPage from './pages/admin/AdminUsersPage';
import AdminEditUserPage from './pages/admin/AdminEditUserPage';
import AdmingProductPage from './pages/admin/AdminProductPage';
import AdminEditProductPage from './pages/admin/AdminEditProductPage';
import AdminOrderPage from './pages/admin/AdminOrderPage';
import AdminOrderDetailsPage from './pages/admin/AdminOrderDetailsPage';
import AdminChatsPage from './pages/admin/AdminChatsPage';
import AdminAnalyticPage from './pages/admin/AdminAnalyticsPage';
// User Component 
import HeaderComponent from './components/HeaderComponent';
import FooterComponent from './components/FooterComponent';
import RouteWithUserChatComponent from './components/user/RouteWithUserChatComponent';


function App() {
  return (
    <BrowserRouter>
    <HeaderComponent/>
      
    <Routes>
    <Route element={<RouteWithUserChatComponent/>}>
    <Route path="/" element={<HomePage/>} />
      <Route path="/product-list" element={<ProductListPage/>} />
      <Route path="/product-details" element={<ProductDetailsPage/>} />
      <Route path="/product-details/:id" element={<ProductDetailsPage/>} />
      <Route path="/cart" element={<CartPage/>} />
      <Route path="/login" element={<LoginPage/>} />
      <Route path="/register" element={<RegisterPage/>} />
      <Route path="*" element={<div> Page not exist 404</div>} />
      {/* User Protected Route Component */}
      <Route element={<ProtectedRouteComponent admin={false}/>} />
      <Route path="/user/" element={<UserProfilePage/>} />
      <Route path="/user/my-orders" element={<UserOrdersPage/>} />
      <Route path="/user/cart-details" element={<UserCartDetailsPage/>} />
      <Route path="/user/order-details" element={<UserOrderDetailsPage/>} />
      </Route>
      {/* Admin Protected Route Component */}
      <Route element={<ProtectedRouteComponent admin={true}/>} />
      <Route path="/admin/users/" element={<AdminUsersPage/>} />
      <Route path="/admin/edit-user" element={<AdminEditUserPage/>} />
      <Route path="/admin/product" element={<AdmingProductPage/>} />
      <Route path="/admin/create-new-product" element={<AdmingProductPage/>} />
      <Route path="/admin/edit-product" element={<AdminEditProductPage/>} />
      <Route path="/admin/orders" element={<AdminOrderPage/>} />
      <Route path="/admin/order-details" element={<AdminOrderDetailsPage/>} />
      <Route path="/admin/chats" element={<AdminChatsPage/>} />
      <Route path="/admin/analytics" element={<AdminAnalyticPage/>} />
    </Routes>
    <FooterComponent/>
    </BrowserRouter>
  );
}

export default App;
