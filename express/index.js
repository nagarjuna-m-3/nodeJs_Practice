const exp=require('express');
const app=exp()

// methods
// app.get()
// app.post()
// app.delete()
// app.put()

app.get('/',(req,res)=>{
    res.send('Hello World!');
})

app.get('/courses',(req,res)=>{
    res.send([1,2,3])
});

const port =process.env.PORT || 3000
app.listen(port,()=>console.log(`listening on port ${port}`)) 