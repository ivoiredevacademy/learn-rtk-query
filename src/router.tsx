import { createBrowserRouter } from 'react-router-dom';
import BaseLayout from './components/layouts/BaseLayout';
import Home from './views/Home';
import CreateContact from './views/CreateContact';
import EditContact from './views/EditContact';

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
                element: <EditContact />
            }
        ]
    }
]);