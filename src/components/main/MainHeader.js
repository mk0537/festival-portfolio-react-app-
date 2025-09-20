import { useState } from "react";
import { Link } from "react-router-dom";
import "./MainHeader.css";

export default function MainHeader() {
    const [menuOpen, setMenuOpen] = useState(false);
    const closeMenu = () => setMenuOpen(false);

    return (
        <header className="main-header">
            {/* 왼쪽 - 로고 + 내비 */}
            <div className="header-left">
                <Link to="/" className="logo" onClick={closeMenu}>
                    <h3>세상축제</h3>
                </Link>

                <nav className="nav-links" aria-label="주 내비게이션">
                    <Link to="/overview" className="nav-item" onClick={closeMenu}>
                        한눈에 보기
                    </Link>
                    <Link to="/board" className="nav-item" onClick={closeMenu}>
                        커뮤니티
                    </Link>

                    <Link to="/mypage" className="nav-item" onClick={closeMenu}>
                        마이페이지
                    </Link>

                    <Link to="/admin" className="nav-item" onClick={closeMenu}>
                        관리자
                    </Link>

                    
                    <Link to="/register" className="nav-item" onClick={closeMenu}>
                        인증
                    </Link>

                    <Link to="/ai-test" className="nav-item2" onClick={closeMenu}>
                        AI 방방곡곡
                    </Link>
                </nav>
            </div>

            {/* 오른쪽 - 인증/모바일 토글 */}
            <div className="header-right">

            {/* 모바일 햄버거 버튼 */}
            <button
                    className="menu-toggle"
                    type="button"
                    aria-expanded={menuOpen}
                    onClick={() => setMenuOpen((v) => !v)}
                >
                    {menuOpen ? "✖" : "☰"}
                </button>
            </div> 

            {/* 모바일 드롭다운 */}
            {menuOpen && (
                <div className="mobile-menu" role="menu">
                    <Link to="/overview" onClick={closeMenu}>🗺️ 한눈에 보기</Link>
                    <Link to="/board" onClick={closeMenu}>📝 게시판</Link>
                    <Link to="/mypage" onClick={closeMenu}>👤 마이페이지</Link>
                    <Link to="/admin" onClick={closeMenu}>🛠️ 관리자</Link>
                    <Link to="/ai-test" onClick={closeMenu}>🤖 AI 테스트</Link>
                </div>
            )}
        </header>
    );
}