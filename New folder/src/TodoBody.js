import React from 'react';
import './TodoBody.css'; 

const mockTodoList = [ //mock= datele care sunt fictive   //CSAK A SRC BE IROM A KODOT!!
    {
        checked: false,
        label: 'buy milk', //nem muszyaj ide vesszo
    },
    {
        checked: false,
        label: 'draw mock',
    },
    {
        checked: false,
        label: 'install node',
    }, //nem muszaj ide vesszo
]

const TodoBody = () => {
    const[todoList, setTodoList] = React.useState(mockTodoList);
    const [newItem, setNewItem] = React.useState('');
    const onAddClick = () => {
        if (!newItem) {
            return;
        }

        const tempTodoList = [
            ...todoList, //clone 
        ];
        tempTodoList.push({
            checked: false,
            label: newItem,
        });
        setNewItem("");
        setTodoList(tempTodoList);
    }

    const onDeleteClcik = (index) => {
        const  tempTodoList = [
            ...todoList,
        ];
        tempTodoList.splice(index, 1);
        setTodoList(tempTodoList);
    }

    const onDeleteAll = () => {
        const tempTodoList = [];
        setTodoList(tempTodoList);
    }

    return (
        <div>
            <button onClick={onDeleteAll}>Clear list</button>
            {todoList.map((element, index) => ( 
                <div className={element.checked ? 'checked' : 'unchecked'} key={index}>
                    <input
                     type="checkbox"
                     id={`check_${index}`}
                     checked={element.checked} 
                     onChange={e => {
                         const tempTodoList = [
                             ...todoList,
                         ];
                         tempTodoList[index].checked = !element.checked;
                         setTodoList(tempTodoList);
                     }} /> 
                    <label htmlFor={`check_${index}`}>{element.label}</label>
                    <button onClick={ () => onDeleteClcik(index)}>X</button>
                </div>
            ))}
            <hr />
            <div>
                <input value={newItem} onChange={e => setNewItem(e.target.value)} />
                <button onClick={onAddClick}>Add</button>
            </div>
        </div>
    );
};

export default TodoBody;