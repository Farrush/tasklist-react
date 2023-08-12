import './Task.css'
import { AiFillCloseSquare } from 'react-icons/ai'

export const Task = ({titulo, desc, deletar}) =>{
    return(
        <div className='item'>
            <AiFillCloseSquare className='btn-fechar' size={30} color={'red'} onClick={() => deletar(titulo)}/>
            <h4>{titulo}</h4>
            <p>{desc}</p>
        </div>
    )
}
export default Task