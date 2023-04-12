let firstname = document.getElementById("firstname");
let lastname = document.getElementById("lastname");
let address = document.getElementById("address");
let pincode = document.getElementById("pincode");
let Male = document.getElementById("Male");
let Female = document.getElementById("Female");
let foodSelect = document.getElementById("food-select");
let State = document.getElementById("State");
let Country = document.getElementById("Country");
let Save = document.getElementById("Save");

let FirstnameData = document.getElementById("Firstname-data");
let LastnameData = document.getElementById("Lastname-data");
let AddressData = document.getElementById("Address-data");
let PincodeData = document.getElementById("Pincode-data");
let GenderData = document.getElementById("Gender-data");
let FoodData = document.getElementById("Food-data");
let StateData = document.getElementById("State-data");
let CountryData = document.getElementById("Country-data");
// console.dir(FirstnameData.innerText);

Save.addEventListener("click", () => {
  FirstnameData.innerText = firstname.value;
  LastnameData.innerText = lastname.value;
  AddressData.innerText = address.value;
  PincodeData.innerText = pincode.value;
  StateData.innerText = State.value;
  CountryData.innerText = Country.value;
});
