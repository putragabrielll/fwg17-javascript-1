let data = {
  id: 1,
  name: "Leanne Graham",
  username: "Bret",
  email: "Sincere@april.biz",
  address: {
    street: "Kulas Light",
    suite: "Apt. 556",
    city: "Gwenborough",
    zipcode: "92998-3874",
  },
  phone: "1-770-736-8031 x56442",
  website: "hildegard.org",
};

// JAWABAN ke 1
let data_baru = { ...data, name: "Gabriel", email: "puragmahk@gmail.com", hobby: "Ngoding" };

console.log(data_baru)

// JAWABAN ke 2
// Cara 1
const {address: {street}, address: {city}, name } = data
// Cara 2
// const {street,city} = data.address
// const {name} = data

console.log(name)