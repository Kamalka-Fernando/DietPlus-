const express = require('express');
const path = require('path');
const app = express();


//Using middleware
app.use(express.static(path.join(__dirname,`dist/dietplusplus`)));

//catch all other routes request and return it to the index
app.get('*', (req, res)=>{

    res.sendFile(path.join(__dirname, `dist/dietplusplus/index.html`))

});


const port = process.env.PORT || 4600;

app.listen(port, (req, res)=>{

console.log(`Server Running1234go... ${port}`);

});
