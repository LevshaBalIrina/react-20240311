import { Footer } from '../Footer/Footer';
import { Header } from '../Header/Header';
import styles from './styles.module.css';

export const Layout = ({ children }) => {
  return (
    <div>
      <Header />
      <div className={styles.main}>
      {children}
      </div>
      <Footer />
    </div>
  );
};
