
//?       db    88b 88 888888  dP"Yb  88""Yb 88""Yb  dP""b8 
//?      dPYb   88Yb88   88   dP   Yb 88__dP 88__dP dP   `" 
//?     dP__Yb  88 Y88   88   Yb   dP 88"Yb  88"Yb  Yb  "88 
//?    dP""""Yb 88  Y8   88    YbodP  88  Yb 88  Yb  YboodP 

//todo  .d88b.  .d888b.      dD  db  db      dD .d888b.  .d88b.  .d888b. d8888b. 
//todo .8P  88. 88   8D     d8' o88 o88     d8' VP  `8D .8P  88. VP  `8D VP  `8D 
//todo 88  d'88 `VoooY'    d8'   88  88    d8'     odD' 88  d'88    odD'   oooY' 
//todo 88 d' 88 .d~~~b.   d8'    88  88   d8'    .88'   88 d' 88  .88'     ~~~b. 
//todo `88  d8' 88   8D  d8'     88  88  d8'    j88.    `88  d8' j88.    db   8D 
//todo  `Y88P'  `Y888P' C8'      VP  VP C8'     888888D  `Y88P'  888888D Y8888P'                                                                         
//todo  :.....:.........::::::..:.....:..:::::.......:.....:.......:.....:
//todo  ::::::Archivo de ensayo para el pf grupo 4:::::::::::::::::::::::::
//todo  :::::Una vez más Rick and Morty ::::::::::::::::::::::::::::::::::::

const server = require('./src/server');
require ('dotenv').config();
const {PORT} = process.env;
const {sequelize}=require('./src/database');



server.listen(PORT, async()=>{
    try {
        await sequelize.sync({force:false})
        console.log(`Server is listening in Port: ${PORT},✔️
    Everything is Good! 😉`)
    } catch (error) {
     console.log(error); 


    }
    
})