// Layout.js


import Footer from "./Test";

function Layout({ children }) {
  return (
    <div>
      {/* Header or other layout elements can go here */}
      {children}
      <Footer />
    </div>
  );
}

export default Layout;
