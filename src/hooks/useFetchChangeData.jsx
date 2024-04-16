import { collection, getDocs, query, where } from "firebase/firestore"
import { db } from "../firebase/config"

export const fetchChangeData = async (uid) => {
  try {
    // Consulta para obter os documentos da coleção 'posts' onde o campo 'uid' é igual ao UID fornecido
    const q = query(collection(db, "posts"), where("uid", "==", uid))
    const querySnapshot = await getDocs(q)

    // Array para armazenar os dados de alteração
    const changeDataArray = []

    // Iterar sobre os documentos retornados pela consulta
    querySnapshot.forEach((doc) => {
      // Obter os campos relevantes do documento
      const { title, body, createdAt, createdBy, image, tags } = doc.data()

      // Adicionar os dados de alteração ao array
      changeDataArray.push({
        title,
        body,
        createdAt: createdAt.toDate().toLocaleString(),
        createdBy,
        image,
        tags,
      })
    })

    return changeDataArray
  } catch (error) {
    console.error("Erro ao recuperar dados de alteração:", error)
    return []
  }
}
