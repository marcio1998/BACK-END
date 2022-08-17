import mongoose from "mongoose";


const cidadeSchema = new mongoose.Schema(
    {
        id: { type: String},
        nome_cidade: { type: String, required: true },
        estado: { type: String, required: true },
        cep: { type: String, required: true },
    }
)

const Cidade = mongoose.model('cidades', cidadeSchema);

export default Cidade;