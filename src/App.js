import {BrowserRouter, Routes, Route } from "react-router-dom";
import MainHeader from "./components/main/MainHeader";
import MainPage from "./components/main/MainPage";

import './App.css';
import BoardComponent from "./components/board/BoardComponent";
import MyPage from "./user/MyPage";
import { AdminPage } from "./components/auth/AdminPage";
import { AuthPage } from "./components/auth/AuthPages";

function App() {
  return (
    <div>
       {/* gh-pages 배포 후 새로고침시 404 오류 및 경로 꼬임 방지 */}
      <BrowserRouter basename="/festival-portfolio-react-app-/">
            <MainHeader />

            <Routes>
                {/* 메인 - 축제 리스트 */}
                <Route path="/" element={<MainPage />} />

                {/* AI 일정 추천 */}
                <Route path="/ai-test" element={''} />

                {/* 한눈에 보기 페이지 */}
                <Route path="/overview" element={''} />

                {/* 상세 페이지 */}
                <Route path="/festival/:id" element={''} />

                {/* 로그인-회원가입-회원가입 */}
                <Route path="/register" element={<AuthPage/>} />

                {/* 관리자 */}
                <Route path="/admin" element={<AdminPage/>}/>

                {/* 마이페이지 */}
                <Route path="/mypage" element={<MyPage />} />

                {/* 게시판*/}
                <Route path='/board' element={<BoardComponent/>} />
            </Routes>
          </BrowserRouter>
        </div>
  );
}

export default App;
