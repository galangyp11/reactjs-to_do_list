import React from "react";

export default function List({ data, handleEdit, handleDelete }) {
    return (
        <div className="tampil-todo">
            {data.map((todo) =>{
                return ( 
                    <ul className="list-ul">
                        <li className="list-kegiatan">{todo.act}</li>                   
                        <li className="list-hapus"><button className="bEdit" onClick={() => handleEdit(todo.id)} >Ubah</button></li>
                        <li className="list-edit"><button className="bHapus" onClick={() => handleDelete(todo.id)} >Hapus</button></li>   
                </ul>
                );
            }) }
           
    </div>
    );
  }