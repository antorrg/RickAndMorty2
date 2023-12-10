import React from 'react'

const Post = () => {
    const [postContent, setPostContent] = useState('');
    const [posted, setPosted] = useState(false);
  
    const handlePost = async () => {
      try {
        // Envia el post a la base de datos (sustituye la URL por la correcta)
        await axios.post('URL_DE_TU_API', { content: postContent });
  
        // Actualiza el estado para indicar que el post se ha enviado correctamente
        setPosted(true);
      } catch (error) {
        console.error('Error al enviar el post:', error);
      }
    };



  return (
    <div>
        <h2>Nuevo Post</h2>
      <textarea
        rows="4"
        cols="50"
        placeholder="Escribe tu post aquí"
        value={postContent}
        onChange={(e) => setPostContent(e.target.value)}
      />
      <br />
      <button onClick={handlePost}>Publicar</button>

      {posted && <p>¡Post enviado correctamente!</p>}
    </div>
  )
}

export default Post