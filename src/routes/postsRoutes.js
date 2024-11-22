import express from 'express';
import multer from 'multer';
const storage = multer.diskStorage({
    destination: function(req, file, cb){
        cb(null, 'uploads/');
    },
    filename: function(req, file, cb){
        cb(null, file.originalname);
    }
})
const upload = multer({dest: "./uploads", storage})
//linux ou mac:
//const upload = multer({dest: "./uploads", storage})
import { listarPosts, postarNovoPost, uploadImagem } from '../controllers/postsControllers.js';
const routes = app => {
    app.use(express.json());
    app.get("/posts", listarPosts);
    app.post("/posts", postarNovoPost)
    app.post("/posts/upload", upload.single("imagem"), uploadImagem)
}
export default routes;
/*
** 4 principais Verbos HTTP:
** 1 - Ler (get)
** 2 - Criar (post)
** 3 - Atualizar (put)
** 4 - Deletar (delete)
 */