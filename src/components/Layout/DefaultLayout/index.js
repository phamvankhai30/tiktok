import Header from './Header/Header';
import Sidebar from './Sidebar/Sidebar';

export default function DefaultLayout({ children }) {
  return (
    <div>
      <Header />
      <div>
        <Sidebar />
        <div>{children}</div>
      </div>
    </div>
  );
}
