import React, { useState, useEffect } from "react"
import { fetchChangeData } from "../../hooks/useFetchChangeData"

const History = ({ uid }) => {
  const [changeData, setChangeData] = useState([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await fetchChangeData(uid)
        setChangeData(data)
        setLoading(false)
      } catch (error) {
        console.error("Erro ao buscar dados de alteração:", error)
        setLoading(false)
      }
    }

    fetchData()
  }, [uid])

  if (loading) {
    return <p>Carregando dados de alteração...</p>
  }

  return (
    <div>
      <h2>Histórico de Alterações</h2>
      <ul>
        {changeData.map((change, index) => (
          <li key={index}>
            <p>
              <strong>Título:</strong> {change.title}
            </p>
            <p>
              <strong>Conteúdo:</strong> {change.body}
            </p>
            <p>
              <strong>Data de Criação:</strong> {change.createdAt}
            </p>
            <p>
              <strong>Criado por:</strong> {change.createdBy}
            </p>
            <p>
              <strong>Imagem:</strong> <img src={change.image} alt="Imagem" />
            </p>
            <p>
              <strong>Tags:</strong> {change.tags.join(", ")}
            </p>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default History
