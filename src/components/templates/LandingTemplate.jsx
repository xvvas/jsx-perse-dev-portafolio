//router
import { Suspense, useEffect, useState } from "react";
import { Route, Routes } from "react-router-dom";

//global
import LandingFooter from "@cg/landingFooter/LandingFooter";
import LandingNav from "@cg/landingNav/LandingNav";

//util
import routes from "@cu/routes/routes";
import LandingNavMobile from "@cg/landingNav/LandingNavMobile";


export default function LandingTemplate() {




    const [mobileView, setMobileView] = useState(window.innerWidth <= 768);

    const loading = (
        <div>
            <span>loading...</span>
        </div>
    );


    useEffect(() => {
        const handleResize = () => {
            setMobileView(window.innerWidth <= 768);
        };

        // Agregar el evento resize
        window.addEventListener('resize', handleResize);

        // Limpiar el evento cuando el componente se desmonte
        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);

    return (
        <>
            {mobileView ? <LandingNavMobile /> : <LandingNav />}

            <Suspense fallback={loading}>
                <Routes>
                    {routes.map((route, idx) => {
                        return (
                            route.element && (
                                <Route
                                    key={idx}
                                    path={route.path}
                                    name={route.name}
                                    element={<route.element />}
                                />
                            )
                        );
                    })}
                </Routes>
            </Suspense>
            <LandingFooter />
        </>
    )
}