import Header from './Header/Header';

export default function HeaderOnly({ children }) {
  return (
    <div>
      <Header />
      <div>
        <div>{children}</div>
      </div>
    </div>
  );
}
