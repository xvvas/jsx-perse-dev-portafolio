import Home from "@ce/landing/Home";
import Bio from "@ce/landing/Bio"
import Work from "@ce/landing/Work"

const routes = [
    { path: "/", name: "", element: Home },
    { path: "/Bio", name: "Bio", element:Bio },
    { path: "/Work", name: "Work", element:Work }

]

export default routes;