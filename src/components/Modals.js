import "../styles/modals.css"

const ModalsTweet = ({ show=false, close, children }) => {
    return (
        <>
            {
                show === true &&
                <div className="modals-all">
                    <div className="modals-container" onClick={close}></div>
                    <div className="modals-content">
                        { children }
                    </div>
                </div>
            }
        </>
    )
}

export default ModalsTweet