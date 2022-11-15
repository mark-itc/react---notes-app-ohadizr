import '../CSS/model.css';
import ReactDom from 'react-dom'


function Model({open, children,onClose}) {
    if (!open) return null
    return ReactDom.createPortal(
        <>
        <div className='modelContainer'>
            <button onClick={onClose}>x</button>
        {children}
        </div>
        </>,
        document.getElementById('portal')
    )
}

export default Model