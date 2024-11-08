import css from './Layout.module.css';

const Layout = ({ children }) => {
  return (
    <main className={css.container}>
      <div className={css.calculator}>{children}</div>
    </main>
  );
};

export default Layout;
