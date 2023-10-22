const Joi=require('joi')
const exp=require('express');
const app=exp();
app.use(exp.json());

const lectures=[{id:1,course:'DSA'},{id:2,course:'DBMS'}]

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

// app.get('/courses/:course',(req,res)=>{
//     const arr=['DBMS','OS','Linux','DS','ADA','MCU']
//     res.send(arr.find(x=>x===req.params.course))
// });

// Query Param: http://localhost:3000/courses?sortBy=asc
// app.get('/courses',(req,res)=>{
//     res.send(req.query)
// });

app.get('/courses/:id',(req,res)=>{
    const foundCourse=lectures.find(x=>x.id===parseInt(req.params.id));
    if(!foundCourse) res.status(404).send('Course not found');
    res.send(foundCourse)
});

app.post('/courses',(req,res)=>{
    const schema=Joi.object({name: Joi.string().length(3).required()});
    const resuly=schema.validate(req.body)

    if(resuly.error) {
        res.status(404).send(resuly.error);
        return;
    }
    const course={
        id:lectures.length+1,
        course: req.body.name
    }
    lectures.push(course);
    res.send(course)
})

const port =process.env.PORT || 3000
app.listen(port,()=>console.log(`listening on port ${port}`)) 