const http=require('http');
const dt=require('./mdemo');
var server=http.createServer((req,res)=>{
  if(req.url==='/')
  {  
  res.writeHead(200,{'content-type':'text/html'});
  res.write("this server handling modules : "+dt());
  res.end();
  }
  if(req.url==='/sajith')
  {  
  res.writeHead(200,{'content-type':'text/html'});
  res.write("this server handling modules for sajith : "+dt());
  res.end();
  }
});

server.listen(3000);