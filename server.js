import express from "express";
const posts = [
    {
        id: 1,
        titulo: "Receita deliciosa de bolo de chocolate",
        descricao: "Uma receita fácil e irresistível para o seu final de semana.",
        imagem: "https://example.com/bolo-de-chocolate.jpg",
        data: "2023-11-21",
        autor: "Ana Maria",
        likes: 150
    },
    {
        id: 2,
        titulo: "Viagem para a Europa",
        descricao: "Um relato incrível sobre uma viagem pela Europa.",
        imagem: "https://example.com/europa.jpg",
        data: "2023-11-22",
        autor: "Pedro Silva",
        likes: 200
    },
    {
        id: 3,
        titulo: "Imersão Dev Beck-End Alura",
        descricao: "Servidores, API's... Muitas coisas!",
        imagem: "https://example.com/europa.jpg",
        data: "2023-11-22",
        autor: "Pedro Silva",
        likes: 222
    }
];
const app = express();
app.use(express.json());
app.listen(3000, () => {
    console.log('Servidor escutando...');
});
app.get("/posts", (req, res) => {
    res.status(200).json(posts);
});
function buscaPosts(id){
    return posts.findIndex((post) => {
        return post.id === Number(id)
    })
}
app.get("/posts/:id", (req, res) => {
    const index = buscaPosts(req.params.id)
    res.status(200).json(posts[index]);
});