import { useState } from "react"
import "./Form.css"


function Form() {
  const [nome, setNome] = useState("")
  const [email, setEmail] = useState("")
  const [senha, setSenha] = useState("")
  const [confirmarSenha, setConfirmarSenha] = useState("")
  const [erro, setErro] = useState("")

  function handleSubmit(e) {
    e.preventDefault()

    if (confirmarSenha !== senha) {
      setErro("Senha diferente")
      return
    }

    setErro("")
    console.log(`email: ${email}, nome: ${nome}, senha: ${senha}`)
  }

  return (
    <div>
    {erro && (
        <div>
          <h2>{erro}</h2>
        </div>
      )}
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Nome"
          value={nome}
          onChange={(e) => setNome(e.target.value)}
        />

        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />

        <input
          type="password"
          placeholder="Senha"
          value={senha}
          onChange={(e) => setSenha(e.target.value)}
        />

        <input
          type="password"
          placeholder="Confirmar senha"
          value={confirmarSenha}
          onChange={(e) => setConfirmarSenha(e.target.value)}
        />

        <button type="submit">Enviar</button>
      </form>
    </div>
  )
}

export default Form