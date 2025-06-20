const express = require('express');
const mongoose = require('mongoose');
const User = require('./models/User');
const cors = require('cors')
const app = express();

mongoose.connect('mongodb://localhost:27017/auth', {
    useNewUrlParser: true,
    useUnifiedTopology: true
})
.then(() => {console.log('connected');})
.catch((err) => {console.error('connected is failed')});

app.set('view engine', 'ejs');
app.set('views', ('views'));
app.use(express.static('public'));
app.use(cors({ origin: 'http://localhost:5173' }));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));



app.post('/api/auth/register', async (req, res) => {
    const { email, password } = req.body;
    
    if(!email || !password) throw new Error("wtf men");

    const exsistingUser = await User.findOne({ email });

    if(exsistingUser) return res.status(409).send('User Already Exsists'); 

    const newUser = new User({ email, password });
    await newUser.save();

    res.status(201).send('Registered');

})

app.post('/api/auth/login', async (req, res) => {

    const { email, password } = req.body;
    const user = await User.findOne({email, password});

    if(!user) return res.status(401).send('❌ Incorrect email or password');

    res.status(201).send('Logined');
})
// app.get('/', async (req, res) => {

//     try {
//         const users = await User.find();
//         res.render('index', {users});
//     } catch (error) {
//         throw new Error("errrir meeen");
//     }

// })
// app.get('/register', (req, res) => {
//     res.render('register');
// })
// app.get('/login', (req, res) => {
//     res.render('login');
// })

app.listen(5000, () => {
    console.log('server is running on port http://localhost:5000');  
})