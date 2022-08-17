import mongoose from "mongoose";

const imovelSchema = new mongoose.Schema(
    {
        id: { type: String, required: true },
        tipo_imovel: { type: String, required: true },
        numero_quartos: { type: Number, required: true },
        numero_banheiros: { type: Number, required: true },
        garagem: { type: Boolean, required: true },
        vagas_garagem: { type: Number, required: true },
        endereco: { type: String, required: true },
        cidade: { type: mongoose.Schema.Types.ObjectId, ref: 'cidades', required: true },

    }
)

const Imovel = mongoose.model('imoveis', imovelSchema);

export default Imovel;