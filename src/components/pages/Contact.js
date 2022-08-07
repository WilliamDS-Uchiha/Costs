import styles from './Contact.module.css';

import Container from '../layout/Container';

function Contact() {
  return (
    <div className={styles.contact_container}>
      <div className={styles.title_container}>
        <h1>Contato</h1>
      </div>
      <Container customClass="start">
        <p className={styles.p_container}>Entre em contato conosco por meio de nosso e-mail: <strong>contato@costs.com.br</strong></p>
      </Container>
    </div>
  );
}

export default Contact;
