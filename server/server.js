const express = require('express');
const mongoose = require('mongoose');
const User = require('./models/User');
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

app.use(express.urlencoded({ extended: true }));



app.post('/register', async (req, res) => {
    const { email, password } = req.body;
    
    if(!email || !password) throw new Error("wtf men");
    try {
        const exsistingUser = await User.findOne({ email });
        if(exsistingUser){
            return res.send('User Already Exsists');
        }

        const newUser = new User({ email, password });
        await newUser.save();

        res.render('registered', {newUser});
    } catch (error) {
        res.status(500).send("error message")
    }
})

app.post('/login', async (req, res) => {

    const { email, password } = req.body;
    try {
        const user = await User.findOne({email, password});
        if(!user) res.status(401).send('❌ Incorrect email or password');

        res.render('logined', { user });
        
    } catch (error) {
        throw new Error("error", error.message);
    }
})
app.get('/', async (req, res) => {

    try {
        const users = await User.find();
        res.render('index', {users});
    } catch (error) {
        throw new Error("errrir meeen");
    }

})
app.get('/register', (req, res) => {
    res.render('register');
})
app.get('/login', (req, res) => {
    res.render('login');
})

app.listen(3000, () => {
    console.log('server is running on port http://localhost:3000');  
})