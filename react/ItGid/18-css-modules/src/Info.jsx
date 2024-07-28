import styles from './Info.module.css'

export default function Info() {

	return (
		<div className={styles.info}>
			<h1>Title</h1>
			<button className={styles.button}>Click me</button>
		</div>
	)
}