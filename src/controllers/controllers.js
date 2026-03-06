export function documentacao(req, res){
    res.render("docs")
}

export function helloWord(req, res){
    res.status(200);
    res.setHeader("Content-Type", "text/plain");
    res.send("Hello Word");
    res.end();
}

export function nome(req, res){
    const { name } = req.params
    res.status(200);
    res.setHeader("Content-Type", "application/json");
    res.json({
        mensagem: `Hello ${name}`
    });
    res.end();
};
