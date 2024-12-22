//router
import { Suspense } from "react";
import { Route, Routes } from "react-router-dom";

//global
import LandingFooter from "@cg/landingFooter/LandingFooter";
import LandingNav from "@cg/landingNav/LandingNav";

//util
import routes from "@cu/routes/routes";


export default function LandingTemplate() {
    const loading = (
        <div>
           <span>loading...</span>
        </div>
     );
    return (
        <>
            <LandingNav />
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