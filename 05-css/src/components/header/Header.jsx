import styles from '../header/Header.module.css'

const Header = () => {
  return (
    <div className={styles.header}>
    <h3>Header</h3>
    <div className={styles.btn}>button</div>
    </div>
  )
}

export default Header