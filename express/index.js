const Joi = require('joi')
const exp = require('express');
const app = exp();
app.use(exp.json());

const lectures = [{ id: 1, course: 'DSA' }, { id: 2, course: 'DBMS' }]

// methods
// app.get()
// app.post()
// app.delete()
// app.put()

app.get('/', (req, res) => {
    res.send('Hello World!');
})

app.get('/courses', (req, res) => {
    res.send(lectures)
});

// app.get('/courses/:course',(req,res)=>{
//     const arr=['DBMS','OS','Linux','DS','ADA','MCU']
//     res.send(arr.find(x=>x===req.params.course))
// });

// Query Param: http://localhost:3000/courses?sortBy=asc
// app.get('/courses',(req,res)=>{
//     res.send(req.query)
// });

app.get('/courses/:id', (req, res) => {
    const foundCourse = lectures.find(x => x.id === parseInt(req.params.id));
    if (!foundCourse) res.status(404).send('Course not found');
    res.send(foundCourse)
});

app.post('/courses', (req, res) => {
    const resuly = validateCourses(req.body)

    if (resuly.error) {
        res.status(400).send(resuly.error);
        return;
    }
    const course = {
        id: lectures.length + 1,
        course: req.body.course
    }
    lectures.push(course);
    res.send(course)
})



app.put('/courses/:id', (req, res) => {
    const result=validateCourses(req.body)
    const found = lectures.findIndex(l => l.id === parseInt(req.params.id))
    if (!found) {
        res.status(404).send('record not found')
        return;
    }

    if (result.error) {
        res.status(400).send(result.error);
        return;
    }

    lectures[found].course=req.body.course
    res.send(lectures[found])
})
const port = process.env.PORT || 3000
app.listen(port, () => console.log(`listening on port ${port}`))

function validateCourses(course) {
    const schema = Joi.object({ course: Joi.string().length(3).required() });
    return schema.validate(course)
}