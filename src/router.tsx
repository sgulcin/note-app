import { Suspense, lazy } from "react";
import { useRoutes, type RouteObject } from "react-router-dom";
import MainLayout from "./layouts/MainLayout";


const Loadable = (Component: any) => (props: JSX.IntrinsicAttributes) =>
(
    <Suspense>
        <Component {...props} />
    </Suspense>
);
const Homepage = Loadable(lazy(() => import("./pages/homepage/Homepage")));
const UploadImage = Loadable(lazy(() => import("./pages/uploadimage/UploadImage")));
const Second = Loadable(lazy(() => import("./pages/Second")));

const routes: RouteObject[] = [
    {
        path: '/',
        element: <MainLayout />,
        children: [
            { element: <Homepage />, index: true },
            { path: 'second', element: <Second /> },
            { path: 'upload-image', element: <UploadImage /> }
        ]
    }
];
export default function Router() {
    return useRoutes(routes)
}
