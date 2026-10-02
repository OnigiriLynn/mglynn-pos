const express = require('express');

const cors = require('cors');

const app = express();

const multer = require('multer');

const path = require('path');



app.use(cors());

app.use(express.json());

app.use(express.urlencoded({ extended: true })); 

const mongoose = require('mongoose');
const { error } = require('node:console');

const mongoUrl = 'mongodb://localhost:27017/my_db';

mongoose.connect(mongoUrl)
.then( () => {
    console.log('DB is connected');
  }
)
.catch( error => {
    console.log(error);
  }
);


const newProductsSchema = new mongoose.Schema(
  {
    name: String,
    price: Number,
    image:String
  }
);
const NewProducts = mongoose.model('new_products', newProductsSchema);

//Serve the 'uploads' folder statically under the '/uploads' route
app.use('/uploads', express.static(path.join(__dirname, 'uploads')));

 // Configure storage options
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, 'uploads/'); // The folder where files will be saved
  },
  filename: function (req, file, cb) {
    // Generate a unique filename using a timestamp + original extension
    const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1E9);
    cb(null, file.fieldname + '-' + uniqueSuffix + path.extname(file.originalname));
  }
});

// 2. Initialize the upload middleware
const upload = multer({ 
  storage: storage,
  limits: { fileSize: 50 * 1024 * 1024 } // Optional limit: 5MB
});

//get products from database
app.get('/getNewProducts', (req, res) => {
  
      NewProducts.find({})
      .then( data => {
        res.send(data);
      })
      .catch( error => {
        console.log(error);
      });
});

app.post('/addNewProduct', upload.single('image'), (req, res) => {
 const {name, price} = req.body;
const image = req.file.path;
  
  NewProducts({ name, price, image }).save()
    .then( data => {
      res.send(data);
    })
    .catch( error => {
      console.log(error);
    });

}); 


app.post('/updateNewProduct', upload.single('image'), (req, res) => {
  const { _id, name, price } = req.body;
  const updateData = { name: name, price: price};
  updateData.image = req.file? req.file.path : undefined;

  NewProducts.updateOne({ _id: _id}, updateData)
    .then( data => {
      res.send(data);
    })
    .catch( error => {
      console.log(error);
      res.status(500).send(error);
    });
});


app.post('/deleteNewProduct', (req, res) => {
  const { id } = req.body;
  NewProducts.deleteOne({ _id: id })
    .then( data => {
      res.send(data);
    })
    .catch( error => {
      console.log(error);
    });
}); 




// For newUser API 

const newUsersSchema = new mongoose.Schema(
  {
    full_name: String,
    email: String,
    password: String,
    image: String
  }
);

const NewUsers = mongoose.model('new_users', newUsersSchema);

//Serve the 'uploads' folder statically under the '/uploads' route
app.use('/userUploads', express.static(path.join(__dirname, 'userUploads')));

 // Configure storage options
const userstorage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, 'userUploads/'); // The folder where files will be saved
  },
  filename: function (req, file, cb) {
    // Generate a unique filename using a timestamp + original extension
    const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1E9);
    cb(null, file.fieldname + '-' + uniqueSuffix + path.extname(file.originalname));
  }
});

// 2. Initialize the upload middleware
const usersupload = multer({ 
  storage: userstorage,
  limits: { fileSize: 50 * 1024 * 1024 } // Optional limit: 50MB
});

app.post('/checkLogin', (req, res) => {
  const { email, password } = req.body;
  NewUsers.findOne({ email, password })
    .then( data => {
      if (data) {
        res.send({ success: true });
      } else {
        res.send({ success: false });
      }
    })
  .catch( error => {
    console.log(error);
  });
});

// For GetNewUser API

app.get('/getNewUser', (req, res) => {
  
      NewUsers.find({})
      .then( data => {
        res.send(data);
      })
      .catch( error => {
        console.log(error);
      });
});


// For AddNewUser for API 

app.post('/addNewUser', usersupload.single('image'), (req, res) => {
 const {full_name, email, password} = req.body;
 const image = req.file ? req.file.path : '';
  
  NewUsers({ full_name, email, password, image }).save()
    .then( data => {
      res.send(data);
    })
    .catch( error => {
      console.log(error);
    });

}); 

// For UpdateNewUser API 



app.post('/updateNewUser',usersupload.single('image'), (req, res) => {
  const { _id, full_name, email, password } = req.body;
  const image =req.file.path;

  NewUsers.updateOne({ _id: _id}, { full_name:full_name, email: email, password: password, image: image})
    .then( data => {
      res.send(data);
    })
    .catch( error => {
      console.log(error);
    });
});


// For DeleteNewUser API 

app.post('/deleteNewUser', (req, res) => {
  const { id } = req.body;
  NewUsers.deleteOne({ _id: id })
    .then( data => {
      res.send(data);
    })
    .catch( error => {
      console.log(error);
    });
}); 






//users Schema and model
// const usersSchema = new mongoose.Schema(
//   {
//     full_name: String,
//     email: String,
//     password: String
//   }
// );
// const Users = mongoose.model('users', usersSchema);



// //get users from database
// app.post('/checkLogin', (req, res) => {
//   const { email, password } = req.body;
//   Users.findOne({ email, password })
//     .then( data => {
//       if (data) {
//         res.send({ success: true });
//       } else {
//         res.send({ success: false });
//       }
//     })
//   .catch( error => {
//     console.log(error);
//   });
// });

// app.get('/getUsers', (req, res) => {
  
//       Users.find({})
//       .then( data => {
//         res.send(data);
//       })
//       .catch( error => {
//         console.log(error);
//       });
// });

// app.post('/addUser', (req, res) => {
//   const { full_name, email, password } = req.body;
//   Users({ full_name, email, password }).save()
//     .then( data => {
//       res.send(data);
//     })
//     .catch( error => {
//       console.log(error);
//     });
// }); 

// app.post('/deleteUser', (req, res) => {
//   const { id } = req.body;
//   Users.deleteOne({ _id: id })
//     .then( data => {
//       res.send(data);
//     })
//     .catch( error => {
//       console.log(error);
//     });
// }); 

//update user from database
// app.post('/updateUser', (req, res) => {
//   const { _id, full_name, email, password } = req.body;
//   Users.updateOne({ _id: _id}, { full_name:full_name, email: email, password: password})
//     .then( data => {
//       res.send(data);
//     })
//     .catch( error => {
//       console.log(error);
//     });
// });

//For selected seats API
const seatsSchema = new mongoose.Schema(
  {
    seat: String
  }
);
const firstSeats = mongoose.model('selected_first_seats', seatsSchema);

app.get('/getFirstSeats', (req, res) => {
  // .distinct('seat') extracts ONLY the 'seat' field values as a flat array
  firstSeats.distinct('seat')
    .then(data => {
      // Sends a clean array like ["A1", "B2"] back to the client
      res.json(data); 
    })
    .catch(error => {
      console.error(error);
      // Keeps frontend from freezing if database fails
      res.status(500).json({ error: 'Failed to fetch seats' });
    });
});

const upperSeats = mongoose.model('selected_upper_seats', seatsSchema);

app.get('/getUpperSeats', (req, res) => {
  // .distinct('seat') extracts ONLY the 'seat' field values as a flat array
  upperSeats.distinct('seat')
    .then(data => {
      // Sends a clean array like ["A1", "B2"] back to the client
      res.json(data); 
    })
    .catch(error => {
      console.error(error);
      // Keeps frontend from freezing if database fails
      res.status(500).json({ error: 'Failed to fetch seats' });
    });
});

app.post('/updateSeats', (req, res) => {
  const { seat, type } = req.body;
    if(type === 'upper'){
      upperSeats({ seat}).save()
      .then( data => {
        res.send(data);
      })
      .catch( error => {
        console.log(error);
      });
  }else{
      firstSeats({ seat}).save()
      .then( data => {
        res.send(data);
      })
      .catch( error => {
        console.log(error);
      });
  }
}); 

app.listen(4000,() => {
  console.log('Server is running on port 4000');
});
  
  
