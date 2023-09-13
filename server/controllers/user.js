async function getMe(req, res){
    res.status(200).send({msg: "Ok"});
}

module.exports = {
    getMe,
}