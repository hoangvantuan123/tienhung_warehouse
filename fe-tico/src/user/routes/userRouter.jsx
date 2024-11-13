import { useEffect, useState, useRef, lazy, Suspense } from 'react'
import {
  BrowserRouter as Router,
  Routes,
  Route,
  useNavigate,
  useLocation,
  Navigate,
} from 'react-router-dom'
import { Layout, Spin } from 'antd'
import Sidebar from '../components/sildebar-frame/sidebar'
import Cookies from 'js-cookie'
import { useTranslation } from 'react-i18next'
import { checkActionPermission } from '../../permissions'
import Spinner from '../page/default/load'

const PageEtcPcbUnpackingWeb = lazy(() => import('../page/unpacking/etcPcbUnpackingWeb'))
const SheetViewEpuw = lazy(() => import('../components/sheet/sheetEpuw'))
const BarcodeScanner = lazy(() => import('../page/scanner/scanner'))

const { Content } = Layout

const UserRouter = () => {
  const { t } = useTranslation()
  const navigate = useNavigate()
  const location = useLocation()
  const [isLoggedIn, setIsLoggedIn] = useState(false)
  const [userPermissions, setUserPermissions] = useState([])
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState(null)
  const [showSpinner, setShowSpinner] = useState(false)
  const [isMobile, setIsMobile] = useState(false)

  return (
    <Routes>
      <Route
        path="/*"
        element={
          <Layout style={{ minHeight: '100vh' }}>
            <Sidebar permissions={userPermissions} />
            <Layout>
              <Content>
                <Suspense fallback={<Spinner/>}>
                  <Routes>
                    <Route
                      path="u/action=data-1-2/db=ETC_PCB_UNPACKING_WEB"
                      element={
                        checkActionPermission(userPermissions, '', '') ? (
                          <PageEtcPcbUnpackingWeb permissions={userPermissions} isMobile={isMobile} />
                        ) : (
                          <PageEtcPcbUnpackingWeb permissions={userPermissions} isMobile={isMobile} />
                        )
                      }
                    />
                    <Route
                      path="u/action=import/:db"
                      element={
                        checkActionPermission(userPermissions, '', '') ? (
                          <SheetViewEpuw permissions={userPermissions} isMobile={isMobile} />
                        ) : (
                          <SheetViewEpuw permissions={userPermissions} isMobile={isMobile} />
                        )
                      }
                    />
                    <Route
                      path="u/scan"
                      element={
                        checkActionPermission(userPermissions, '', '') ? (
                          <BarcodeScanner permissions={userPermissions} isMobile={isMobile} />
                        ) : (
                          <BarcodeScanner permissions={userPermissions} isMobile={isMobile} />
                        )
                      }
                    />
                  </Routes>
                </Suspense>
              </Content>
            </Layout>
          </Layout>
        }
      />
    </Routes>
  )
}

const App = () => (
  <Router>
    <UserRouter />
  </Router>
)

export default App
