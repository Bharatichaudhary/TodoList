import React, {useState} from 'react';

export default function ToDoList(){
    const [todo,setTodo]=useState("")
    const [items,setItems]=useState([]);
    function addList(){
        if(!todo){
            alert("Enter the note");
            return
        }
        const item={
            id: Math.floor(Math.random()*1000),
            value:todo
        }
        setItems(oldList=>[...oldList,item]);
        setTodo("");
        console.log(items);
    }
    
    function deleteItem(id){
        const newArray=items.filter(item => item.id !==id);
        setItems(newArray);
    }
    /*const [todos,setTodos]=useState({
        id:"",
        task:"",
        completed:false

    });
    function Element(props){
        return(
            <div onClick={e=> ()}>
                <form onSubmit={e=> ()}/>
                <button onChange={e=>()}/>
            </div>
        );
    }*/
    return(
        <>
       {/* <form>
            <input/>
            <button/>
    </form>*/}
    <h2>To Do List</h2>
    <input className='text' type="text" placeholder="Add an item" value={todo} onChange={e=>setTodo(e.target.value)}/><br/>
    <button className="add"onClick={()=>addList()}>Add</button>
    <ul>
        {items.map(item=>{
            return(
                <ol key={item.id}>{item.value}<button onClick={()=>deleteItem(item.id)} className="cross">X</button></ol>
            )
        })}
    </ul>
        </>
    );
}