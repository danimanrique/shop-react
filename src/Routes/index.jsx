import HomePage from '../Pages/Home';
import MyAccountPage from '../Pages/MyAccount';
import MyOrderPage from '../Pages/MyOrder';
import MyOrdersPage from '../Pages/MyOrders';
import NotFoundPage from '../Pages/NotFound';
import SignInPage from '../Pages/SignIn';
import {useRoutes} from 'react-router-dom';

const AppRoutes = () => {
    let routes = useRoutes([
        { path: '/', element: <HomePage /> },
        { path: '/:category', element: <HomePage /> },
        { path: '/my-account', element: <MyAccountPage /> },
        { path: '/my-orders/last', element: <MyOrderPage /> },
        { path: '/my-orders/:index', element: <MyOrderPage /> },
        { path: '/my-orders', element: <MyOrdersPage /> },
        { path: '/sign-in', element: <SignInPage /> },
        { path: '/*', element: <NotFoundPage /> },
      ]);
    return routes;
}

export default AppRoutes;