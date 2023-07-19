var details = document.getElementById("details");
var button = document.getElementById("button");
var company = document.getElementById("company");
var model = document.getElementById("model");
var ram = document.getElementById("ram");
var rom = document.getElementById("rom");
var camera = document.getElementById("camera");
var price = document.getElementById("price");

a = {
    mobiles: {
        Samsung: {
            SamsungA10: {
                name: "Samsung A10",
                ram: "4gb",
                rom: "64gb",
                camera: "13",
                price: "22,000 PKR"
            },
            SamsungA20: {
                name: "Samsung A20",
                ram: "4gb",
                rom: "64gb",
                camera: "18",
                price: "28,000"
            },
            SamsungA30: {
                name: "Samsung A30",
                ram: "4gb",
                rom: "64gb",
                camera: "25",
                price: "29,000"
            }
        },
        IPhone: {
            IPhone11: {
                name: "IPhone11",
                ram: "4gb",
                rom: "64gb",
                camera: "12",
                price: "100,000"
            },
            IPhone12: {
                name: "IPhone12",
                ram: "4gb",
                rom: "64gb",
                camera: "12",
                price: "150,000"
            },
            IPhone13: {
                name: "IPhone13",
                ram: "6gb",
                rom: "128gb",
                camera: "24",
                price: "200,000"
            }
        },
        Oppo: {
            OppoV20: {
                name: "OppoV20",
                ram: "8gb",
                rom: "128gb",
                camera: "64",
                price: "54,999"
            },
            OppoF19: {
                name: "OppoF19",
                ram: "6gb",
                rom: "128gb",
                camera: "48",
                price: "36,999"
            },
            OppoF11: {
                name: "OppoF11",
                ram: "4gb",
                rom: "64gb",
                camera: "48",
                price: "35,999"
            }
        },
        Vivo: {
            VivoY20: {
                name: "VivoY20",
                ram: "4gb",
                rom: "64gb",
                camera: "13",
                price: "26,999"
            },
            VivoY21: {
                name: "VivoY21",
                ram: "4gb",
                rom: "64gb",
                camera: "13",
                price: "43,999"
            },
            VivoY55: {
                name: "VivoY55",
                ram: "8gb",
                rom: "128gb",
                camera: "50",
                price: "64,999"
            }
        }
    }
};

function abc() {
    var inp_comp = document.getElementById("inp_comp").value;
    var inp_mod = document.getElementById("inp_mod").value;
    if (inp_comp == "" || inp_mod == "") {
        alert("First Enter Something!");
    }
    console.log(inp_comp);
    console.log(inp_mod);
    company.innerHTML = inp_comp;
    console.log(inp_comp);
    model.innerHTML = a.mobiles[inp_comp][inp_mod].name;
    console.log(a.mobiles[inp_comp][inp_mod].name);
    ram.innerHTML = a.mobiles[inp_comp][inp_mod].ram;
    console.log(a.mobiles[inp_comp][inp_mod].ram);
    rom.innerHTML = a.mobiles[inp_comp][inp_mod].rom;
    console.log(a.mobiles[inp_comp][inp_mod].rom);
    camera.innerHTML = a.mobiles[inp_comp][inp_mod].camera;
    console.log(a.mobiles[inp_comp][inp_mod].camera);
    price.innerHTML = a.mobiles[inp_comp][inp_mod].price;
    console.log(a.mobiles[inp_comp][inp_mod].price);
    details.style.display = "inline-block";
    button.style.visibility = "hidden";
}

// if (company == "Samsung") {
//     if (model == "SamsungA10") {
//         console.log(a.mobiles.Samsung.SamsungA10);
//     } else if (model == "SamsungA20") {
//         console.log(a.mobiles.Samsung.SamsungA20);
//     } else if (model == "SamsungA20") {
//         console.log(a.mobiles.Samsung.SamsungA20);
//     } else {
//         console.log("Model unavailable");
//     }
// } else if (company == "Iphone") {
//     if (model == "Iphone11") {
//         console.log(a.mobiles.IPhone.Iphone11);
//     } else if (model == "Iphone12") {
//         console.log(a.mobiles.IPhone.Iphone12);
//     } else if (model == "Iphone13") {
//         console.log(a.mobiles.IPhone.Iphone13);
//     } else {
//         console.log("Model unavailable");
//     }
// } else if (company == "Oppo") {
//     if (model == "OppoV20") {
//         console.log(a.mobiles.Oppo.OppoV20);
//     } else if (model == "OppoF19") {
//         console.log(a.mobiles.Oppo.OppoF19);
//     } else if (model == "OppoF11") {
//         console.log(a.mobiles.Oppo.OppoF11);
//     } else {
//         console.log("Model unavailable");
//     }
// } else if (company == "Vivo") {
//     if (model == "VivoY20") {
//         console.log(a.mobiles.Vivo.VivoY20);
//     } else if (model == "VivoY21") {
//         console.log(a.mobiles.Vivo.VivoY21);
//     } else if (model == "VivoY55") {
//         console.log(a.mobiles.Vivo.VivoY55);
//     } else {
//         console.log("Model unavailable");
//     }
// }