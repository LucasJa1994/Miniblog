//css
import styles from "./Home.module.css"
// hooks
import { useNavigate, Link } from "react-router-dom"
import { useState } from "react"
import { useFetchDocuments } from "../../hooks/useFetchDocuments"

// components
import PostDetail from "../../components/PostDetail"

const Home = () => {
  const [query, setQuery] = useState("")
  const navigate = useNavigate("")
  const { documents: posts, loading } = useFetchDocuments("posts")
  const handleSubmit = (e) => {
    e.preventDefault()
    if (query) {
      return navigate(`/search?q=${query}`)
    }
  }

  return (
    <div className={styles.home}>
      <h1>Vejas os posts mais recentes</h1>
      <form onSubmit={handleSubmit} className={styles.search_form}>
        <input
          type="text"
          placeholder="Busque por tags"
          onChange={(e) => setQuery(e.target.value)}
        />
        <button className="btn btn-dark">Pesquisar</button>
      </form>
      <div>
        {loading && <p>Carregando..</p>}
        {posts && posts.map((post) => <PostDetail key={post.id} post={post} />)}
        {posts && posts.length === 0 && (
          <div className={styles.noposts}>
            <p>nao foram encotrado posts</p>
            <Link to="/posts/create" className="btn">
              Criar um post
            </Link>
          </div>
        )}
      </div>
    </div>
  )
}

export default Home