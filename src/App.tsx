import Home from './components/home/home';
import { FAQ } from './components/faq/faq';
import { Certificates } from './components/certificates/certificates';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import Login from './components/login/Login';
import Layout from './components/layout/Layout';
import Register from './components/register/Register';
import Profile from './components/profile-page/Profile';
import { useOnReload } from './components/custom-hooks/onReload';
import { useContext, useEffect, useState } from 'react';
import { AuthContext } from './components/context/authContext';
import Loader from './components/loader/Loader';
import EditProfile from './components/profile-page/EditProfile';

const questions: { faqid: number; faqTitle: string; answer: string }[] = [
    {
        faqid: 1,
        faqTitle: 'FAQ1',
        answer: 'hellohellohellohellohellohellohellohellohellohellohellohellohellohellohellohellohellohellohellohellohellohellohellohellohellohellohellohellohellohellohellohellohellohellohellohellohellohellohellohellohellohellohellohello',
    },
    { faqid: 2, faqTitle: 'FAQ2', answer: 'hello' },
    { faqid: 3, faqTitle: 'FAQ3', answer: 'hello' },
    { faqid: 4, faqTitle: 'FAQ4', answer: 'hello' },
    { faqid: 5, faqTitle: 'FAQ5', answer: 'hello' },
    { faqid: 6, faqTitle: 'FAQ6', answer: 'hello' },
    { faqid: 7, faqTitle: 'FAQ7', answer: 'hello' },
    { faqid: 8, faqTitle: 'FAQ8', answer: 'hello' },
    { faqid: 9, faqTitle: 'FAQ9', answer: 'hello' },
    { faqid: 10, faqTitle: 'FAQ10', answer: 'hello' },
];

function App() {
    const router = createBrowserRouter([
        {
            path: '/',
            element: <Layout />,
            children: [
                { path: '/home', element: <Home /> },
                { path: '/certificates', element: <Certificates /> },
                {
                    path: '/faq',
                    element: (
                        <FAQ
                            questions={questions}
                            heading="Frequently Asked Questions"
                            subheading="lorem ipsum"
                        />
                    ),
                },
                {
                    path: '/profile/:username',
                    element: <Profile />,
                },
                {
                    path: '/profile/edit/:username',
                    element: <EditProfile closeModal={() => {}} />,
                },
            ],
        },
        { path: '/login', element: <Login /> },
        { path: '/register', element: <Register /> },
    ]);

    const authContext = useContext(AuthContext);

    const [loading, setLoading] = useState(true);

    useEffect(() => {
        try {
            const reload = async () => {
                if (authContext?.logoutSignal === false) {
                    const loginCheck = await useOnReload(
                        // REMEMBER: DO NOT DO USECONTEXT INSIDE A CUSTOM HOOK
                        // DO NOT DEPEND ON A VARIABLE THAT IS INITIALLY NULL, ALWAYS DEPEND ON THE RESULT OF THE API CALL
                        authContext.logoutSignal,
                        authContext.setCurrentUser,
                        authContext.setAccessToken,
                        authContext.currentUser
                    );

                    if (loginCheck) {
                        setLoading(false);
                    }
                }
            };
            reload();
        } catch (error) {
            console.log(error);
        }
    }, []);

    return (
        <>
            <Loader offSignal={loading} />
            {!loading && <RouterProvider router={router} />}
        </>
    );
}

export default App;
