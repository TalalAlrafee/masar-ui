
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import AIPage from "../src/Pages/PagesJSX/AIPage.jsx"

function App() {
  
  // const { token, login, logout, userId } = useAuth();
    let routes;
  // if(token){
    routes=(<Router>
   
      <Routes>
      <Route path="/" element={<AIPage />} />
        {/* <Route path="/" element={<HomePage />} />
        <Route path="*" element={<Navigate to="/" replace />} />
        <Route path="/user" element={<UserPage />} />
        <Route path="/generate/:platform" element={<GeneratePage />} />
        <Route path="/myReports" element={<PreviousReports />} />

        <Route path="/reports/:platform/:rId" element={<ReportPage />} /> */}

      </Routes>
  </Router>)


  // }else{
  //   routes=(<Router>
  //     <Routes>
  //       {/* <Route path="/" element={<HomePage/>} />
  //       <Route path="/login" element={<LoginPage />} />
  //       <Route path="/signup" element={<SignUpPage />} />
  //       <Route path="/user" element={<LoginPage />} />
  //       <Route path="/OTPPage" element={<OTPPage/>} />
  //       <Route path="/generate/:platform" element={<GeneratePage />} />

  //       <Route path="/reports/:platform/:rId" element={<ReportPage />} />

  //       <Route path="*" element={<Navigate to="/" replace />} /> */}
  //     </Routes>
    
  // </Router>)

  // }
  return (<main>{routes}</main>) 
{/* <AuthContext.Provider
      value={{
        isLoggedIn: !!token,
        token: token,
        userId: userId,
        login: login,
        logout: logout,
      }}
    >
   
        */} 
    // </AuthContext.Provider>



  
}

export default App
