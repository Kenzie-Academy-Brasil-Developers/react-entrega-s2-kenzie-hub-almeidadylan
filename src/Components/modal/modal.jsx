export function Modal({ modal, setModal}){

    if (modal === true) {
        return (
            <div>
                <h2>modal mais</h2>
                <button onClick={() => setModal(false)}>x</button>
            </div>
        )
    }
    else {
        return null
    }
}