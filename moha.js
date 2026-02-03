 // DOM
const form = document.getElementById("form");
const fname = document.getElementById("fname");
const sname = document.getElementById("sname");
const lname = document.getElementById("lname");
const phone = document.getElementById("phone");
const leg = document.getElementById("leg");
const error = document.getElementById("error");

// 🔴 MAGAC: QASAB Capital + small (REAL TIME)
function forceNameFormat(input) {
  input.addEventListener("input", function () {
    let value = input.value;

    if (value.length === 0) return;

    input.value =
      value.charAt(0).toUpperCase() +
      value.slice(1).toLowerCase();
  });
}

// ku dabaq 3-da magac
forceNameFormat(fname);
forceNameFormat(sname);
forceNameFormat(lname);

// phone hubin
function validPhone(number) {
  const prefixes = ["061", "068", "062"];
  if (number.length !== 10) return false;
  return prefixes.some(p => number.startsWith(p));
}

// EVENT
form.addEventListener("submit", function (e) {
  e.preventDefault();

  error.textContent = "";

  // hubi buuxinta
  if (
    fname.value === "" ||
    sname.value === "" ||
    lname.value === "" ||
    phone.value === "" ||
    leg.value === ""
  ) {
    error.textContent = "Fadlan dhammaan xogta buuxi";
    return;
  }

  // phone sax
  if (!validPhone(phone.value)) {
    error.textContent =
      "Number-ka waa inuu ku bilaabmaa 061, 068 ama 062, isla markaana ahaadaa 10 digit";
    return;
  }

  // guul
  alert("Isdiiwaangelinta waa lagu guuleystay ✅");
});
