import React from "react";

const DeleteModal = ({ setShowDeleteModal, handleDelete, bookTitle }) => {
    return (
        <div className='modall-wrapperr'>
            <div className='modall' >
                <h5>{bookTitle} Kitabını Silmek İstiyor musunuz?</h5>
                <button onClick={() => setShowDeleteModal(false)} className='btn btn-warning'>Vazgeç</button>
                <button onClick={() => handleDelete()} className='btn btn-danger'>Onayla</button>
            </div>
        </div>
    );
};

export default DeleteModal;
