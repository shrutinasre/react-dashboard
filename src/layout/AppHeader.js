import React from "react";

function AppHeader({ handleSidebarToggle }) {
  return (
    <>
      <header className="app-header">
        <div className="px-3 py-1 bg-dark text-white">
          <div className="container-fluid">
            <div className="d-flex flex-wrap align-items-center justify-content-end">
              <a onClick={() => handleSidebarToggle()} className="d-flex align-items-center my-2 my-lg-0 me-lg-auto text-white text-decoration-none">
                <i className="bi-list-ul fs-3" />
              </a>

              <ul className="nav col-12 col-lg-auto my-2 justify-content-center my-md-0 text-small">
                <li className="border-r border-l">
                  <a href="#" className="nav-link text-secondary">
                    <i className="bi-house-door-fill fs-4 d-block" />
                    Home
                  </a>
                </li>
                <li className="border-r">
                  <a href="#" className="nav-link text-white">
                    <i className="bi-speedometer2 fs-4 d-block" />
                    Dashboard
                  </a>
                </li>
                <li className="border-r">
                  <a href="#" className="nav-link text-white">
                    <i className="bi-box2-fill fs-4 d-block" />
                    Orders
                  </a>
                </li>
                <li className="border-r">
                  <a href="#" className="nav-link text-white">
                    <i className="bi-boxes fs-4 d-block" />
                    Products
                  </a>
                </li>
                <li className="border-r">
                  <a href="#" className="nav-link text-white">
                    <i className="bi-person-circle fs-4 d-block" />
                    Customers
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </header>
    </>
  );
}

export default AppHeader;
