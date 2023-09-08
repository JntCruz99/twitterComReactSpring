import blogFetch from "../axios/config";
import './NewPost.css';

import { useState } from "react";

import { useNavigate } from "react-router-dom";

const NewPost = () => {
  const navigate = useNavigate();
  const [mensagem, setMensagem] = useState("");

  const createPost = async (e) => {
    e.preventDefault();

    try {
      const response = await blogFetch.post("/twitter/1", {
        mensagem: mensagem, // Altere 'mensagem: post' para 'mensagem: mensagem'
      });

      // Faça algo com a resposta, se necessário
      console.log("Resposta da criação do post:", response.data);

      // Navegue para a página inicial ou faça qualquer outra ação necessária após a criação do post
      navigate("/");
    } catch (error) {
      console.error("Erro ao criar o post:", error);
    }
  };

  return (
    <div className='new-post'>
      <h2>Inserir novo Post</h2>
      <form onSubmit={(e) => createPost(e)}>
        <div className='form-control'>
            <label htmlFor="mensagem">Conteúdo:</label>
            <textarea 
              name="mensagem" 
              id="mensagem" 
              cols="30" 
              rows="5" 
              placeholder='Digite o conteúdo'
              onChange={(e) => setMensagem(e.target.value)}
              value={mensagem} // Adicione o valor do textarea
            />
            <input type="submit" value="Criar Post" className='btn btn-light' />
        </div>
      </form>
    </div>
  );
};

export default NewPost;
