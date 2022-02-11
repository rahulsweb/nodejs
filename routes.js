
const requestH=(req,res)=>{
    let url=req.url;
   
    res.setHeader('Content-Type','text/html');
    res.on('data',(chunk)=>{
        console.log(chunk)
    });
    // process.exit();
    res.write('<html>');
    res.write('<head><title>404</title></head>');
    res.write('<body>');
    res.write('<h1> THIS IS NOT');
    res.write('</h1>');
    res.write('</body>');
    res.write('</html>');
    res.end();
};
module.exports=requestH;