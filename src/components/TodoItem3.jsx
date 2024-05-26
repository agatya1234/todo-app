function TodoItem3({todoname,tododate}) {
    return (
      <div className="container">
      <div className="row">
        <div className="col-4">{todoname}</div>
        <div className="col-4">{tododate}</div>
        <div className="col-2"><button type="button" class="btn btn-danger">delete</button>
        </div>
      </div>
      </div>
      

 );
 }
export default TodoItem3;