import { useState } from "react"
import "./Form.css"

function Form() {
    const [nome, setNome] = useState("")
    const [email, setEmail] = useState("")
    const [senha, setSenha] = useState("")

    function handleSubmit(e){
        e.preventDefault()
        setEmail(email)
        setNome(nome)
        setSenha(senha)

        console.log(`email: ${email}, `, `nome: ${nome}, `, `senha: ${senha}`)
    }

 

  return (
<form onSubmit={handleSubmit}>
  <div>
        <label htmlFor="nome" >Nome:</label>
        <input 
        type="text" 
        id="nome" 
        name="nome" 
        value={nome} 
        onChange={(e) => setNome(e.target.value)}/>
    </div>

    <div>
        <label htmlFor="email">Email:</label>
        <input 
        type="email" 
        id="email" 
        name="email" 
        value={email}
        onChange={(e)=> setEmail(e.target.value)}/>
    </div>

    <div>
        <label htmlFor="senha">Senha:</label>
        <input 
        type="password" 
        id="senha" 
        name="senha"
        value={senha}
        onChange={(e) => setSenha(e.target.value)} />
    </div>

    <button type="submit">Enviar</button>
</form>
  )
}

export default Form