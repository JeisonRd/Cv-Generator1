// Selecting Input Elements
const nameInput = document.getElementById("nombre");
const adressInput = document.getElementById("direccion");
const emailInput = document.getElementById("correo");
const telInput = document.getElementById("telefono");
const webInput = document.getElementById("website");
const resumeInput = document.getElementById("resumen");
const languageInput = document.getElementById("idioma");
const jobInput = document.getElementById("empleo");
const educInput = document.getElementById("educacion");
const skillInput = document.getElementById("skill");
const certInput = document.getElementById("certificaciones");

let isvalid = true;



//validating fields
function validating(){

const nameVal = nameInput.value;
const adressVal = adressInput.value;
const emailVal = emailInput.value;
const telVal = telInput.value;
const webVal = webInput.value;
const resumeVal = resumeInput.value;
const langVal = languageInput.value;
const jobVal = jobInput.value;
const eduVal = educInput.value;
const skilVal = skillInput.value;
const certVal = certInput.value;

let isValid = true;

isValid = inputValidator(nameVal, nameInput, isvalid);
isValid = inputValidator(adressVal, adressInput, isValid );
isValid = inputValidator(emailVal, emailInput, isValid);
isValid = inputValidator(telVal, telInput, isValid);
isValid = inputValidator(webVal, webInput, isvalid);
isValid = inputValidator(resumeVal, resumeInput, isValid);
isValid = inputValidator(langVal, languageInput, isValid);
isValid = inputValidator(jobVal, jobInput, isValid);
isValid = inputValidator(eduVal, educInput, isValid);
isValid = inputValidator(skilVal, skillInput, isValid);
isValid = inputValidator(certVal, certInput, isValid);

return isValid;
// this function will return either true or false then we're going to evaluate in the function cv generate
// Which is the final function who will generate the cv
};

// Making the Cv
function cvGenerate(){
  // if validating returns false it will ask to fill up all the inputs 
  if(!validating()){
    alert('Faltan campos !')
    } else {

  const nameVal = nameInput.value;
const adressVal = adressInput.value;
const emailVal = emailInput.value;
const telVal = telInput.value;
const webVal = webInput.value;
const resumeVal = resumeInput.value;
const langVal = languageInput.value;
const jobVal = jobInput.value;
const eduVal = educInput.value;
const skilVal = skillInput.value;
const certVal = certInput.value;

      const container = document.querySelector(".container2");
      const mainB = document.querySelector(".main-body");
      const filadiv = document.querySelector(".fila");
      const hr = document.createElement("hr");

      const div1 = document.createElement("div");
      div1.setAttribute("class", "col-md-4 mb-3");

      const div2 = document.createElement("div");
      div2.setAttribute("class", "card");

      const div3 = document.createElement("div");
      div3.setAttribute("class", "card-body");

      const div4 = document.createElement("div");
      div4.setAttribute("class", "d-flex flex-column align-items-center text-center");

      const img = document.createElement("img");
      img.src = "https://bootdey.com/img/Content/avatar/avatar7.png";
      img.width = 150;
      img.setAttribute("class", "rounded-circle");

      const div5 = document.createElement("div");
      div5.setAttribute("class", "mt-3");

      const h4 = document.createElement("h4");
      h4.textContent = `${nameVal}`;
      const p = document.createElement("p");
      p.setAttribute("class", "text-muted font-size-sm");
      p.textContent = `${adressVal}`;

              div5.append(h4, p);
              div4.append(img, div5);
              div3.appendChild(div4);
              div2.appendChild(div3);
              div1.appendChild(div2);
    
     
              // filadiv.appendChild(div1);
              // mainB.appendChild(filadiv);
              // container.appendChild(mainB);


      const div6 = document.createElement("div");
      div6.setAttribute("class", "card mt-3");
      const ul = document.createElement("ul");
      ul.setAttribute("class", "list-group list-group-flush");
      const li = document.createElement("li");
      li.setAttribute("class", "list-group-item d-flex justify-content-between align-items-center flex-wrap");
      const h6 = document.createElement("h6");
      h6.setAttribute("class", "mb-0");
      h6.textContent = `Website: `;
      const span = document.createElement("span");
      span.setAttribute("class", "text-secondary");
      span.textContent = `${webVal}`;
       li.append(h6, span);
       ul.appendChild(li);
       div6.appendChild(ul);
       div1.appendChild(div6);


       const div7 = document.createElement("div");
      div7.setAttribute("class", "card mt-3");
      const ul2 = document.createElement("ul");
      ul2.setAttribute("class", "list-group list-group-flush");
      const li2 = document.createElement("li");
      li2.setAttribute("class", "list-group-item d-flex justify-content-between align-items-center flex-wrap");
      const h6Em = document.createElement("h6");
      h6Em.setAttribute("class", "mb-0");
      h6Em.textContent = `Empleos: `;
      const ulEm = document.createElement("ul");
      const liEm = document.createElement("li");
      liEm.textContent = `${jobVal}`;
      ulEm.appendChild(liEm);
      li2.append(h6Em, ulEm);
      ul2.appendChild(li2);
      div7.appendChild(ul2);
      div1.appendChild(div7);



      
      const div8 = document.createElement("div");
      div8.setAttribute("class", "card mt-3");
      const ul3 = document.createElement("ul");
      ul3.setAttribute("class", "list-group list-group-flush");
      const li3 = document.createElement("li");
      li3.setAttribute("class", "list-group-item d-flex justify-content-between align-items-center flex-wrap");
      const h6Edu = document.createElement("h6");
      h6Edu.setAttribute("class", "mb-0");
      h6Edu.textContent = `Educacion: `;
      const olEdu = document.createElement("ol");
      const liEdu = document.createElement("li");
      liEdu.textContent = `${eduVal}`;
      olEdu.appendChild(liEdu);
      li3.append(h6Edu, olEdu);
      ul3.appendChild(li3);
      div8.appendChild(ul3);
      div1.appendChild(div8);


      const div9 = document.createElement("div");
      div9.setAttribute("class", "card mt-3");
      const ul4 = document.createElement("ul");
      ul4.setAttribute("class", "list-group list-group-flush");
      const li4 = document.createElement("li");
      li4.setAttribute("class", "list-group-item d-flex justify-content-between align-items-center flex-wrap");
      const h6Cert = document.createElement("h6");
      h6Cert.setAttribute("class", "mb-0");
      h6Cert.textContent = `Certificaciones: `;
      const ulcert = document.createElement("ul");
      const licert = document.createElement("li");
      licert.textContent = `${certVal}`;
      ulcert.appendChild(licert);
      li4.append(h6Cert, ulcert);
      ul4.appendChild(li4);
      div9.appendChild(ul4);
      div1.appendChild(div9);
      filadiv.appendChild(div1);

      const divTable = document.createElement("div");
      divTable.setAttribute("class", "col-md-8");
      const divsub = document.createElement("div");
      divsub.setAttribute("class", "card mb-3");
      const divbody = document.createElement("div");
      divbody.setAttribute("class", "card-body");

      const divrow = document.createElement("div");
      divrow.setAttribute("class", "row");
      const divrowsub = document.createElement("div");
      divrowsub.setAttribute("class", "col-sm-3");
      const h6Name = document.createElement("div");
      h6Name.setAttribute("class", "mb-0");
      h6Name.textContent = `Nombre: `;
      const divcol = document.createElement("div");
      divcol.setAttribute("class", "col-sm-9 text-secondary");
      divcol.textContent = `${nameVal} `;
      
      const hr2 = document.createElement("hr");
      divrowsub.appendChild(h6Name);
      divrow.append(divrowsub, divcol);
      divbody.appendChild(divrow);
      divbody.appendChild(hr2);

      const divrow2 = document.createElement("div");
      divrow2.setAttribute("class", "row");
      const divrowsub2 = document.createElement("div");
      divrowsub2.setAttribute("class", "col-sm-3");
      const h6Email = document.createElement("div");
      h6Email.setAttribute("class", "mb-0");
      h6Email.textContent = `Email: `;
      const divcol2 = document.createElement("div");
      divcol2.setAttribute("class", "col-sm-9 text-secondary");
      divcol2.textContent = `${emailVal} `;
      
      const hr3 = document.createElement("hr");
      divrowsub2.appendChild(h6Email);
      divrow2.append(divrowsub2, divcol2);
      divbody.appendChild(divrow2);
      divbody.appendChild(hr3);

      
      const divrow3 = document.createElement("div");
      divrow3.setAttribute("class", "row");
      const divrowsub3 = document.createElement("div");
      divrowsub3.setAttribute("class", "col-sm-3");
      const h6Tel = document.createElement("div");
      h6Tel.setAttribute("class", "mb-0");
      h6Tel.textContent = `Telefono: `;
      const divcol3 = document.createElement("div");
      divcol3.setAttribute("class", "col-sm-9 text-secondary");
      divcol3.textContent = `${telVal} `;

      const hr4 = document.createElement("hr");
      divrowsub3.appendChild(h6Tel);
      divrow3.append(divrowsub3, divcol3);
      divbody.appendChild(divrow3);
      divbody.appendChild(hr4);

      const divrow4 = document.createElement("div");
      divrow4.setAttribute("class", "row");
      const divrowsub4 = document.createElement("div");
      divrowsub4.setAttribute("class", "col-sm-3");
      const h6Res = document.createElement("div");
      h6Res.setAttribute("class", "mb-0");
      h6Res.textContent = `Resumen: `;
      const divcol4 = document.createElement("div");
      divcol4.setAttribute("class", "col-sm-9 text-secondary");
      divcol4.textContent = `${resumeVal} `;

      const hr5 = document.createElement("hr");
      divrowsub4.appendChild(h6Res);
      divrow4.append(divrowsub4, divcol4);
      divbody.appendChild(divrow4);
      divbody.appendChild(hr5);

      const divrow5 = document.createElement("div");
      divrow5.setAttribute("class", "row");
      const divrowsub5 = document.createElement("div");
      divrowsub5.setAttribute("class", "col-sm-3");
      const h6Add = document.createElement("div");
      h6Add.setAttribute("class", "mb-0");
      h6Add.textContent = `Address: `;
      const divcol5 = document.createElement("div");
      divcol5.setAttribute("class", "col-sm-9 text-secondary");
      divcol5.textContent = `${adressVal} `;

      divrowsub5.appendChild(h6Add);
      divrow5.append(divrowsub5, divcol5);
      divbody.appendChild(divrow5);
      divbody.appendChild(hr);
      
      const divrow6 = document.createElement("div");
      divrow6.setAttribute("class", "row");
      const divrowsub6 = document.createElement("div");
      divrowsub6.setAttribute("class", "col-sm-12");
     const a = document.createElement("a");
     a.setAttribute("class", "btn btn-danger");
     a.textContent = `Delete all`;
     a.addEventListener('click', ()=>{
      container.innerHTML = "";
      container.remove();
      });
      divrowsub6.appendChild(a);
      divrow6.appendChild(divrowsub6);

      divbody.appendChild(divrow6);
      divsub.appendChild(divbody);
      divTable.appendChild(divsub);

      
      const divf = document.createElement("div");
      divf.setAttribute("class", "row gutters-sm");
      const divsm = document.createElement("div");
      divsm.setAttribute("class", "col-sm-6 mb-3");
      const divcrd = document.createElement("div");
      divcrd.setAttribute("class", "card h-100");
      const divcb = document.createElement("div");
      divcb.setAttribute("class", "card-body");
      const h6sk = document.createElement("h6");
      h6sk.setAttribute("class", "d-flex align-items-center mb-3");
      const i = document.createElement("i");
      i.setAttribute("class", "material-icons text-info mr-2");
      i.textContent = `Skills: `;
      h6sk.appendChild(i);
      const lisk = document.createElement("li");
      lisk.textContent = `${skilVal}`;

      divcb.append(h6sk, lisk);
      divcrd.appendChild(divcb);
      divsm.appendChild(divcrd);
      divf.appendChild(divsm);

      const divlan = document.createElement("div");
      divlan.setAttribute("class", "col-sm-6 mb-3");
      const divcrd2 = document.createElement("div");
      divcrd2.setAttribute("class", "card h-100");
      const divcb2 = document.createElement("div");
      divcb2.setAttribute("class", "card-body");
      const h6lan = document.createElement("h6");
      h6lan.setAttribute("class", "d-flex align-items-center mb-3");
      const ilan = document.createElement("i");
      ilan.setAttribute("class", "material-icons text-info mr-2");
      ilan.textContent = `Idiomas: `;
      h6lan.appendChild(ilan);
      const liLan = document.createElement("li");
      liLan.textContent = `${langVal}`;

      divcb2.append(h6lan, liLan);
      divcrd2.appendChild(divcb2);
      divlan.appendChild(divcrd2);
     divf.appendChild(divlan);

     divTable.appendChild(divf);
     filadiv.appendChild(divTable);
      mainB.appendChild(filadiv);
              container.appendChild(mainB);
    
     clearElements();
}


}


//cleaning elements
function clearElements(){
inputClear(nameInput, true);
inputClear(adressInput,false);
inputClear(emailInput, false);
inputClear(telInput, false);
inputClear(webInput, false);
inputClear(resumeInput,false);
inputClear(languageInput, false);
inputClear(jobInput, false);
inputClear(educInput, false);
inputClear(skillInput, false);
inputClear(certInput, false);


}

function inputValidator(value, input, isvalid){

 if (value == "" || value == null || value == undefined){
          input.classList.add("wrong");
          input.classList.remove("input-success");

          return false;

    } else {
          input.classList.add("input-success");
          input.classList.remove("wrong");
          
          if(!isvalid){
            return false;
          } else {
         return true;
                 }
    }

}

function inputClear(input, focus){
input.value = "";
input.classList.remove("input-success");
input.classList.remove("wrong");

//if focus is true then 
if(focus){
  input.focus();
}

};


// Guardar Button
const guardarBtn = document.querySelector(".guardar");

guardarBtn.addEventListener("click", (e) => {
    e.preventDefault();
cvGenerate();

});


// Limpiar Button
const limpiabtn = document.querySelector(".limpiar");

limpiabtn.addEventListener("click", () => {
clearElements();

});


