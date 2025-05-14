import styles from './Message.module.css'
function Message({message}) {
    return (
        <div className={styles.message}>
            <span>➕</span>{message}
        </div>
    )
}

export default Message
