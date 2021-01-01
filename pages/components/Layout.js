import Head from './Head'
import styles from './../../styles/Home.module.css'
import Header from './Header'
import Footer from './Footer'

export default () => {
  return (
    <div className={styles.container}>
      <Head />
      <Header />
      <main className={styles.main}>
        <h1 className={styles.title}>Estadisticas del sistema Chileno de AFP</h1>
      </main>

      <Footer />
    </div>
  )
}
