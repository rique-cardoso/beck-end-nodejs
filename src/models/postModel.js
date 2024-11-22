import "dotenv/config";
import { ObjectId } from "mongodb";
import conectarAoBanco from "../config/dbConfig.js";//no beck precisa do .js (extensão do arquivo), diferentemente do front
const conexao = await conectarAoBanco(process.env.STRING_CONEXAO)
export async function getTodosPosts() {
    const db = conexao.db('imersao-beck-end') //representa o meu banco de dados
    const colecao = db.collection('posts') //representa a coleção específica dentro deste meu banco
    return colecao.find().toArray()
}
export async function criarPost(novoPost) {
    const db = conexao.db('imersao-beck-end')
    const colecao = db.collection('posts')
    return colecao.insertOne(novoPost)
}
export async function atualizarPost(id, novoPost){
    const db = conexao.db("imersao-beck-end")
    const colecao = db.collection("posts")
    const objID = ObjectId.createFromHexString(id)
    return colecao.updateOne({_id : new ObjectId(objID)}, {$set : novoPost})
}