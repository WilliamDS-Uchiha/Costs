import styles from './Company.module.css';

import Container from '../layout/Container';

function Company() {
  return (
    <div className={styles.company_container}>
      <div className={styles.title_container}>
        <h1>Empresa</h1>
      </div>
      <Container customClass="start">
        <p className={styles.p_container}>Empresa especializada no gerenciamento de projetos relacionados a área de desenvolvimento e tecnologia.</p>
      </Container>
    </div>
  );
}

export default Company;
