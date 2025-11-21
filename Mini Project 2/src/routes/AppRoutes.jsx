import Homepage from "../pages/Homepage";
import PageNotFound from "../pages/PageNotFound";
import { Route, Routes } from "react-router";
import LoginPage from "../pages/LoginPage";
import { ApiTest } from "../components/APItest";
import SearchPage from "../pages/SearchPage";
import DeckPage from "../pages/DeckPage";


// special component containing all the possible routes for this app
// any props passed into AppRoutes will also be passed onto
// child components using {...props}
function AppRoutes(props) {
return (
<Routes>
<Route index element={<Homepage {...props} />} />
<Route path='/login' element={<LoginPage {...props} />} />
<Route path='/search' element={<SearchPage {...props} />} />
<Route path='/deck' element={<DeckPage deck={props.deck} removeFromDeck={props.removeFromDeck} {...props} />} />
<Route path='/apitest' element={<ApiTest {...props} />} />
{/* special route to handle if none of the above match */}
<Route path="*" element={<PageNotFound />} />
</Routes>
)
}
export default AppRoutes;