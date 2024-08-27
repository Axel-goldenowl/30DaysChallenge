import styles from './CustomButton.module.scss';
function CustomButton({ title }) {
  return <button className={styles.button}>{title}</button>;
}

export default CustomButton;
