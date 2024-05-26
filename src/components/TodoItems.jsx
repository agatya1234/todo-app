import TodoItem3 from "./TodoItem3";
import styles from "./todoItems.module.css";
const TodoItems = ({ todoItems }) => {
    console.log('hi',todoItems);
  return (
    
    <div className={styles.itemContainer}>
      {todoItems.map((item) => (
        <TodoItem3 tododate={item.duedate} todoname={item.name}/>
      ))}
    </div>
  );
};

export default TodoItems;