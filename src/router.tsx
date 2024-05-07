import { createBrowserRouter } from 'react-router-dom';
import BaseLayout from './components/layouts/BaseLayout';
import Home from './views/Home';
import CreateContact from './views/CreateContact';
import ViewContact from './views/ViewContact';

export const router = createBrowserRouter([
    {
        path: '/',
        element: <BaseLayout />,
        children: [
            {
                path: '/',
                element: <Home />
            },
            {
                path: '/create',
                element: <CreateContact />
            },
            {
                path: '/contacts/:id/edit',
                element: <ViewContact />
            }
        ]
    }
]);