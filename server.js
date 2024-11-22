import express from "express";
import routes from "./src/routes/postsRoutes.js";
const posts = [
    {
        id: 1,
        titulo: "Receita deliciosa de bolo de chocolate",
        descricao: "Uma receita fácil e irresistível para o seu final de semana.",
        imagem: "https://example.com/bolo-de-chocolate.jpg",
    },
    {
        id: 2,
        titulo: "Viagem para a Europa",
        descricao: "Um relato incrível sobre uma viagem pela Europa.",
        imagem: "https://example.com/europa.jpg",
    },
    {
        id: 3,
        titulo: "Imersão Dev Beck-End Alura",
        descricao: "Servidores, API's... Muitas coisas!",
        imagem: "https://example.com/europa.jpg",
    }
];
const app = express();
app.use(express.static("uploads"))
routes(app)

//Inicia o servidor na porta 3000 e exibe uma mensagem no console
app.listen(3000, () => {
    console.log('Servidor escutando...');
});
/* function buscaPosts(id){
    return posts.findIndex((post) => {
        return post.id === Number(id)
    })
}
app.get("/posts/:id", (req, res) => {
    const index = buscaPosts(req.params.id)
    res.status(200).json(posts[index]);
}); */