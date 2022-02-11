exports.status404 = (req,res,next) => {
res.status(404).render("page-404",{titles:"Not Found"})
}
