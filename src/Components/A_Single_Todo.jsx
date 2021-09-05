
import "./styles.css"
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Card from 'react-bootstrap/Card';
import {useState} from "react"
import EditForm from "./EditForm"


const A_Single_Todo = ({each_todo, deletetodo, editTodo }) => {

    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);


const [newTodo, setnewTodo] = useState ("New Todo Added!")
const [cardColor, setCardColor]= useState("")
const [taskCompText, settaskCompText] = useState("")
const [todoText, settodoText] = useState("")


const handleSuccess = ()=>{
    setnewTodo("Task Completed, Congratualtions!!")
    setCardColor("#019042")
    settaskCompText("white")
    settodoText("white")
  
}

const handleDelete = ()=> {
    deletetodo(each_todo.id) 
}


    return (
        <>
        <div className = "a_single_todo_box">

        <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Edit Your Todo</Modal.Title>
        </Modal.Header>
        <Modal.Body>
            <EditForm each_todo = {each_todo} editTodo = {editTodo} closeModal = {handleClose} />
        </Modal.Body>
        <Modal.Footer>
         
        </Modal.Footer>
      </Modal>
            
            <Card style={{ width: '18rem' }} className = "card">
            <Card.Body style = {{backgroundColor : cardColor }} >
                <Card.Title style= {{color: taskCompText}}>{newTodo}</Card.Title>
                <br/>
                <Card.Text>
                <h3 className = "each-todo" style= {{color: todoText}}> {each_todo.activity} </h3>
              
                </Card.Text>
            <Button variant="success" onClick = {handleSuccess} className = "btn"><i class="fas fa-check"></i></Button> 
            <Button variant="danger" onClick = {handleDelete} className = "btn"><i class = "fas fa-trash-alt"></i></Button> 
            <Button variant="secondary" onClick={handleShow} className = "btn"><i class="far fa-edit"></i></Button>
            </Card.Body>
            </Card>
        
        <br />
        </div>

        </>
        
    );
}

export default A_Single_Todo;
