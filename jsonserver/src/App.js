import React, { useEffect, useState} from 'react'
import axios from 'axios'
import CustomButton from './components/CustomButton/CustomButton';
import CustomInput from './components/Custominput/Custominput';
import './app.css'
const App = () => {

  //Önce API üzerinden gelecek verilerin tutulacağı state tanımlanır
  const [todos, setTodos] = useState([])
  const [todoText, setTodoText] = useState("")
  //Inputun içeriğini alabilmek için referans oluşturma

const getTodos=()=>{
  //Kendi oluşturduğumuz apiye istek atma
  axios
  .get("http://localhost:3001/todos")
  //gelen veriyi stateye aktarma
  .then((response) => setTodos(response?.data))
  //diğer api tarafında veya server tarafında bir sorun olursa hatayı yakalama
  .catch((error) => console.log("het hatası", error?.message));
};

  //Ekran ilk açıldığında çalışacak useEffect(()=>{},[]) içerisinde verilerimizi çağırıyoruz

  useEffect(() => {
    getTodos();
    
  }, []);

  //Ekle butonunabasıldığı anda çalışır

  const handleSubmit = (e) => {
    //Formun elementinin varsayılan özelliklerini sıfırlıyoruz
    e.preventDefault()
    //console.log("onSubmit çalıştı");
    //console.log(todoText)

//Yen ibir todo oluşturma
      const newTodo = {
      id: new Date().getTime(),
      title: todoText,
      date: new Date().toLocaleString(),
      isDone: false
    };

    //axios yardımı ile kendi api mize post isteği atma
    axios
    //yol olarak todos endpointine newt todyu gönderiyoruz
    .post('https://dummyjson.com/products', newTodo)
    //gönderme işleminden sonra stateyide yeni todo içerecek şekilde güncelliyoruz
    .then(() => setTodos([...todos, newTodo]));

    //inputun içeriğini temizleme
    setTodoText('');
  };

const handleDelete=(id)=>{
  //console.log("silme fonksiyonu çalıştı" ,id)

  axios.delete(`http://localhost:3001/todos/${id}`).then(()=>{
    const filtered = todos.filter((todo) => todo.id !== id);
    setTodos(filtered);
  });
};
//Checkboxa tıklanınca çalışır
const handleEdit=(todoInfo)=>{
  //console.log("checkbox fonksiyonu" , todoInfo)

  //gönderilecek objenin güncel halini hazırlama

  let updatedTodo={...todoInfo, isDone:!todoInfo.isDone}

  //güncel hali api ye gönderme

  axios
  .put(`http://localhost:3001/todos${todoInfo.id}`, updatedTodo)
  .then(()=>{
  const cloneTodos=[...todos]

  const updatedIndex=cloneTodos.findIndex(
    (item)=>item.id ===todoInfo.id
    );
  cloneTodos.splice(updatedIndex,1,updatedTodo)
  setTodos(cloneTodos)
  });
};

 
  return (
    <div className='container'>
      <h1>Yapılacaklar</h1>
      <form className='form' onSubmit={(e) => handleSubmit(e)}>
        <CustomInput 
        value={todoText} 
        onChange={(e) => setTodoText(e.target.value)} />
        <CustomButton type={"primary"} buttonTitle={"Ekle"} />
      </form>
      <ul className='list-group mt-4'>
        {todos?.map((todo) =>(
        <li className='list-group-item d-flex justify-content-between align-items-center'>

        <span>
          <input 
          checked={todo?.isDone}
          onClick={
            ()=>handleEdit(todo)
          }
          type="checkbox" />
          {todo?.isDone===true?' Tamamlandı' :'  Devam Ediyor'}
        </span>
        <span>{todo?.title}</span>
        
        <CustomButton onClick={()=>handleDelete (todo?.id)} type={"danger"} buttonTitle={"sil"}/>
        
        </li>
          
          ))}
      </ul>
    </div>
  );
};

export default App;
