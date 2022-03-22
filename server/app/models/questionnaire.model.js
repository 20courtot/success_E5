module.exports = mongoose => {
    const Questionnaire = mongoose.model("questionnaire",
        mongoose.Schema({
            nom_questionnaire: String,
            time: Number,
            matiere: String,
            code: String
        })
    );
    return Questionnaire;
};