import List from "./List";
import backgroundImg from "../img/background.jpg";
import { useState } from "react";
import { uid } from "uid";

function Main() {
    const [todos, setTodos] = useState([
        {
            id: 1,
            act: "Salto Backflip",
        },
        {
            id: 2,
            act: "Membeli ikan di pasar",
        }
    ])

    const [isUpdate, setIsUpdate] = useState({ id: null, status: false});

    const [formData, setFormData] = useState({
        act: ""
    });

    function handleSubmit(e) {
        e.preventDefault();
        let data = [...todos]; 
        
        if(formData.act === "") {
            return true;
        }
        
        if (isUpdate.status) {
            data.forEach((todo) => {
                if (todo.id === isUpdate.id) {
                    todo.act = formData.act;
                }
            })
        } else {
        //ini buat input data
        data.push({ id: uid(), act: formData.act });
        }

        setTodos(data);
        setFormData({ act: "" });
        
    } 

    function handleChange(e) {
        let data = { ...formData };
        data[e.target.name] = e.target.value;
        setFormData(data);
    } 
    
    function handleEdit(id) {
        let data = [...todos];
        let foundData = data.find((todo) => todo.id === id);
        setFormData({ act: foundData.act });
        setIsUpdate({ id: id, status: true });
    }

    function handleDelete(id) {
        let data = [ ...todos];
        let filterData = data.filter(todo => todo.id !== id);
        setTodos(filterData);
    }
  

    return (
        <div className="base">
            <img src={backgroundImg} id="backgroundImg" alt="Latar"/>     
            <div className="input">
                <h2>TO DO LIST</h2>
                <form onSubmit={handleSubmit}>
                   <input className="inputBar" type="text" placeholder="Masukkan To Do" autoComplete="off"
                        onChange={handleChange}
                        value={formData.act}
                        name="act"
                    />
                    <button type="submit" id="submit" >submit</button>
                </form>
            </div>
            <List handleDelete={handleDelete} handleEdit={handleEdit} data={todos}/>
        </div>
     );
}
 
export default Main;