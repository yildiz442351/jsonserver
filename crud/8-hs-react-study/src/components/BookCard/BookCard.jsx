import React from 'react'

const BookCard = ({ bookInfo, handleModal,handleEditModal,handleRead }) => {
    //console.log(props);
    const { title, date, isRead,id } = bookInfo

    return (
        <div className="d-flex justify-content-betwen aling-items-center p-3 mt-5 border rounded shadow">
             <div>
                <h5 style={{
                    textDecoration: bookInfo.isRead ? 'Line-through' : 'none',
                }}
                >
                    {title}
                </h5>
                <p>{date}</p>
            </div>
            <div className="btn-group">
                <button onClick={() => handleModal(id,title)} className="btn btn-danger">Sil</button>
                <button onClick={()=>handleEditModal(bookInfo)} className="btn btn-primary">Düzenle</button>
                <button onClick={()=>handleRead(bookInfo)} className="btn btn-success">
                    {isRead === true ? "okundu" : "okunmadı"}
                </button>
            </div>
        </div>
    );
};

export default BookCard;
