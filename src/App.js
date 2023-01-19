import React, { Component, Suspense } from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
// import { useLocation } from 'react-router-dom'
// import routes from './routes'
import './scss/style.scss'
const ProtectedRoute =React.lazy(()=> import('./util/ProtectedRoutes'))
const loading = (
  <div className="pt-3 text-center">
    <div className="sk-spinner sk-spinner-pulse"></div>
  </div>
)
// const currentLocation = useLocation().pathname

// const getRouteName = (pathname, routes) => {
//   const currentRoute = routes.find((route) => route.path === pathname)
//   return currentRoute ? currentRoute.name : false
// }

// Containers
const DefaultLayout = React.lazy(() => import('./layout/DefaultLayout'))

// Pages
const Login = React.lazy(() => import('./views/pages/login/Login'))
const Register = React.lazy(() => import('./views/pages/register/Register'))
const Page404 = React.lazy(() => import('./views/pages/page404/Page404'))
const Page500 = React.lazy(() => import('./views/pages/page500/Page500'))

// const Banneradd = React.lazy(()=> import('./views/pages/banner/Addbanner'))
// const Banneredit = React.lazy(()=> import('./views/pages/banner/Editbanner'))
// const Bannerlist = React.lazy(()=> import('./views/pages/banner/Listbanner'))
// const Managerlist = React.lazy(()=> import('./views/pages/list/Managerlist'))

// const FoodAdd = React.lazy(()=> import('./views/pages/food/FoodAdd'))
// const DrinkAdd = React.lazy(()=> import('./views/pages/drink/DrinkAdd'))

class App extends Component {
  render() {
    return (
      <Router>
        <Suspense fallback={loading}>
          <Routes>
{/* 
            <Route element={<ProtectedRoute />}>
            {routes.map((route, idx) => {
            return (
              route.element && (
                <Route
                  key={idx}
                  path={route.path}
                  exact={route.exact}
                  name={route.name}
                  element={<route.element />}
                />
              )
            )
          })}
          <Route path="/" element={<Navigate to="dashboard" replace />} />
            </Route> */}

            
            {/* <Route element={<ProtectedRoute />}>
             <Route exact path='/addbanner' name='Add' element={<Banneradd />}/>
             <Route exact path = '/editbanner' name='Edit' element={<Banneredit />}/>
             <Route exact path='/bannerlist' name='Banners' element={<Bannerlist />} />
             <Route exact path='/managerlist' name='Manager list' element={<Managerlist />} />
             <Route exact path='/addfood' name='Add food excel' element={<FoodAdd />}  />
             <Route exact path='/adddrink' name='Add drink excel' element={<DrinkAdd />}  />
            </Route> */}
            <Route exact path="/login" name="Login Page" element={<Login />} />
            <Route exact path="/register" name="Register Page" element={<Register />} />
            <Route exact path="/404" name="Page 404" element={<Page404 />} />
            <Route exact path="/500" name="Page 500" element={<Page500 />} />
            <Route path="*" name="Home" element={<DefaultLayout />} />
          </Routes>
        </Suspense>
      </Router>
    )
  }
}

export default App
