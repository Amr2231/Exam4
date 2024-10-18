const opennav = document.getElementById('OpenNav');
const Name = document.getElementById('Name');
const Email = document.getElementById('Email');
const phone = document.getElementById('phone');
const Age = document.getElementById('Age');
const pass = document.getElementById('pass');
const Repassword = document.getElementById('Repassword');
const AlertName = document.querySelector(".AlertName")
const AlertEmail = document.querySelector(".AlertEmail")
const AlertPhone = document.querySelector(".AlertPhone")
const AlertAge = document.querySelector(".AlertAge")
const Alertpass = document.querySelector(".AlertPass")
const AlertRepass = document.querySelector(".AlertRePass")

$(document).ready(() => {
        $(".loading-screen").fadeOut(1200 , function () {
               $(".loader").fadeOut(700, function () {
                $(".loader").removeClass('bg-black')       
        })
})
        $("body").css("overflow", "visible")
        $('loader').css('display' , "none")
    })

$("#OpenNav").click(function() {
    $('.Mainnav').animate({width :"360px"},500)   
    $(".nav-second").animate({marginLeft :"0px"},500)  
    $('#getHome').animate({top :"0px"},200 , function() {
        $('#getSearch').animate({top :"0px"},200 , function() {
            $('#getCategories').animate({top :"0px"},200 , function() {
        $('#getArea').animate({top :"0px"},200 , function() {
        $('#getIngredients').animate({top :"0px"},200 , function() {
        $('#getContact').animate({top :"0px"},200)  
})})})})})  
        
        opennav.classList.add("d-none")
        closeNav.classList.remove("d-none")
    
})

$("#closeNav").click(function() {
    $(".nav-second").animate({marginLeft :"-140px"},400)  
    $('.Mainnav').animate({width :"70px"},400)   
    $('#getHome').animate({top :"100px"},200 , function() {
    $('#getSearch').animate({top :"100px"},200 , function() {
        $('#getCategories').animate({top :"100px"},200 , function() {
    $('#getArea').animate({top :"100px"},200 , function() {
    $('#getIngredients').animate({top :"100px"},200 , function() {
    $('#getContact').animate({top :"100px"},200)  
})})})})  })
        closeNav.classList.add("d-none")
        opennav.classList.remove("d-none")
})

    const getHome = document.getElementById('getHome');
    getHome.addEventListener('click', function(){
        $(".nav-second").animate({marginLeft :"-140px"},400)  
        $('.Mainnav').animate({width :"70px"},400)   
        $('#getHome').animate({top :"100px"},100 , function() {
        $('#getSearch').animate({top :"100px"},100 , function() {
            $('#getCategories').animate({top :"100px"},100 , function() {
        $('#getArea').animate({top :"100px"},100 , function() {
        $('#getIngredients').animate({top :"100px"},100 , function() {
        $('#getContact').animate({top :"100px"},100)  
        $(".loading-screen").fadeOut(1100 , function () {
            $(".loader").fadeOut(700, function () {
             $(".loader").removeClass('bg-black')       
     })})
     $("body").css("overflow", "visible")
     $('loader').css('display' , "none")
        window.location.href = ('/index.html')
        document.getElementById("ByName").classList.remove("d-none");
        document.getElementById("ByLetter").classList.remove("d-none");  
    })})})})}) 
    })
const getSearch = document.getElementById('getSearch');
getSearch.addEventListener('click', function(){
    $(".nav-second").animate({marginLeft :"-140px"},400)  
    $('.Mainnav').animate({width :"70px"},400)   
    $('#getHome').animate({top :"100px"},100 , function() {
    $('#getSearch').animate({top :"100px"},100 , function() {
        $('#getCategories').animate({top :"100px"},100 , function() {
    $('#getArea').animate({top :"100px"},100 , function() {
    $('#getIngredients').animate({top :"100px"},100 , function() {
    $('#getContact').animate({top :"100px"},100)  
    $(".loading-screen").fadeOut(1100 , function () {
        $(".loader").fadeOut(700, function () {
         $(".loader").removeClass('bg-black')       
 })})
 $("body").css("overflow", "visible")
 $('loader').css('display' , "none")
    window.location.href = ('/search.html')
    document.getElementById("ByName").classList.remove("d-none");
    document.getElementById("ByLetter").classList.remove("d-none");
})})})})})})
const getCategories = document.getElementById('getCategories');
getCategories.addEventListener('click', function(){
    $(".nav-second").animate({marginLeft :"-140px"},400)  
    $('.Mainnav').animate({width :"70px"},400)   
    $('#getHome').animate({top :"100px"},100 , function() {
    $('#getSearch').animate({top :"100px"},100 , function() {
    $('#getCategories').animate({top :"100px"},100 , function() {
    $('#getArea').animate({top :"100px"},100 , function() {
    $('#getIngredients').animate({top :"100px"},100 , function() {
    $('#getContact').animate({top :"100px"},100)  
    $(".loading-screen").fadeOut(100)
    $(".loading-screen").fadeOut(1200 , function () {
    $(".loader").fadeOut(400, function () {
    $(".loader").removeClass('bg-black')       
 })
        
})
 $("body").css("overflow", "visible")
 $('loader').css('display' , "none")
    window.location.href = ('/Category.html')

})})})})})})
const getArea = document.getElementById('getArea');
getArea.addEventListener('click', function(){
    $(".loading-screen").fadeOut(2000)
    $(".loading-screen").fadeOut(1200 , function () {
        $(".loader").fadeOut(700, function () {
         $(".loader").removeClass('bg-black')       
 })
        
})
 $("body").css("overflow", "visible")
 $('loader').css('display' , "none" )
    $(".nav-second").animate({marginLeft :"-140px"},400)  
    $('.Mainnav').animate({width :"70px"},400)
    $('#getHome').animate({top :"100px"},100 , function() {
    $('#getSearch').animate({top :"100px"},100 , function() {
        
        $('#getCategories').animate({top :"100px"},100 , function() {
    $('#getArea').animate({top :"100px"},100 , function() {
    $('#getIngredients').animate({top :"100px"},100 , function() {
    $('#getContact').animate({top :"100px"},100) 
    window.location.href = ('/Area.html')
})})})})})})
const getIngredients = document.getElementById('getIngredients');
getIngredients.addEventListener('click', function(){
    $(".loading-screen").fadeOut(2000)
    $(".loading-screen").fadeOut(1200 , function () {
        $(".loader").fadeOut(700, function () {
         $(".loader").removeClass('bg-black')       
 })
        
})
 $("body").css("overflow", "visible")
 $('loader').css('display' , "none" )
    $(".nav-second").animate({marginLeft :"-140px"},400)  
    $('.Mainnav').animate({width :"70px"},400)   
    $('#getHome').animate({top :"100px"},100 , function() {
    $('#getSearch').animate({top :"100px"},100 , function() {
        $('#getCategories').animate({top :"100px"},100 , function() {
    $('#getArea').animate({top :"100px"},100 , function() {
    $('#getIngredients').animate({top :"100px"},100 , function() {
        
    $('#getContact').animate({top :"100px"},100)  
    window.location.href = ('/Ingredients.html')


})})})}) })})

const getContact = document.getElementById('getContact');
getContact.addEventListener('click', function(){
    $(".nav-second").animate({marginLeft :"-140px"},400)  
    $('.Mainnav').animate({width :"70px"},400)   
    $('#getHome').animate({top :"100px"},100 , function() {
    $('#getSearch').animate({top :"100px"},70 , function() {
        $('#getCategories').animate({top :"100px"},70 , function() {
    $('#getArea').animate({top :"100px"},70 , function() {
    $('#getIngredients').animate({top :"100px"},70 , function() {
    $('#getContact').animate({top :"100px"},70)  
    window.location.href = ('/Contact.html')
})})})})})})

async function FetchIndex(Food) {
    $(".loading-screen").fadeOut(400)
        $(".loading-screen").fadeOut(100 , function () {
            $(".loader").fadeOut(700, function () {
             $(".loader").removeClass('bg-black')       
     })
    })
     $("body").css("overflow", "visible")
     $('loader').css('display' , "none" )
       try{
        const res = await fetch(`https:/www.themealdb.com/api/json/v1/1/search.php?s=`);
        if(!res.ok)throw new Error(res.error.message)
        const data = await res.json();
        console.log(data);
        DisplayIndex(data.meals)
}catch(e){
    console.log(e);  
 }
}
 FetchIndex('')
     function DisplayIndex(arr) {
     let cartoona = "";
     for (let i = 0; i < arr.length; i++) {
         cartoona += `
         <div class="col-md-3 col-sm-6">       
         <div onclick = "getMealDetailsIndex('${arr[i].idMeal}')" class="cursor inner position-relative overflow-hidden m-2  ">
                                 <img src="${arr[i].strMealThumb}" class=" w-100 overflow-hidden">
                                 <div class="overlay text-center position-absolute d-flex justify-content-center align-items-center flex-column">
                                    <h3>${arr[i].strMeal}</h3>
                                     
                                 </div>
                             </div>
                         </div>

`
     }
     document.getElementById("HomeData").innerHTML = cartoona
    }

 async function getCategoryIndex(category) {
     document.getElementById("HomeData").innerHTML = ""
     let response = await fetch(`https://www.themealdb.com/api/json/v1/1/filter.php?c=${category}`)
     response = await response.json()
     displayIndex(response.meals.slice(0, 20))
 }

 function displayMealDetailsIndex(meal) {
     let details = ``
     for (let i = 1; i <= 20; i++) {
         if (meal[`strIngredient${i}`]) {
             details += `<li class="alert alert-info m-2 p-1">${meal[`strMeasure${i}`]} ${meal[`strIngredient${i}`]}</li>`
         }
     }
 
     let tags = meal.strTags?.split(",")
     if (!tags) tags = []
 
     let tagsStr = ''
     for (let i = 0; i < tags.length; i++) {
         tagsStr += `
         <li class="alert alert-danger m-2 p-1">${tags[i]}</li>`
     }
     let cartoona = `
 <div class="col-md-4 text-white ">
                 <img class="w-100 rounded-3" src="${meal.strMealThumb}"
                     alt="">
                     <h2>${meal.strMeal}</h2>
             </div>
             <div class="col-md-8 text-white position-relative start">
                 <h2>Instructions</h2>
                 <p>${meal.strInstructions}</p>
                 <h3><span class="fw-bolder">Area : </span>${meal.strArea}</h3>
                 <h3><span class="fw-bolder">Category : </span>${meal.strCategory}</h3>
                 <h3>Recipes :</h3>
                 <ul class="list-unstyled d-flex g-3 flex-wrap">
                     ${details}
                 </ul>
 
                 <h3>Tags :</h3>
                 <ul class="list-unstyled d-flex g-3 flex-wrap">
                     ${tagsStr}
                 </ul>
 
                 <a target="_blank" href="${meal.strSource}" class="btn btn-success">Source</a>
                 <a target="_blank" href="${meal.strYoutube}" class="btn btn-danger">Youtube</a>
             </div>
   `
   document.getElementById("HomeData").innerHTML = cartoona
 }

 async function getMealDetailsIndex(mealID) {
     document.getElementById("HomeData").innerHTML = ''
     let respone = await fetch(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${mealID}`);
     respone = await respone.json();
     displayMealDetailsIndex(respone.meals[0])
 }

async function fetchIng(){
    $(".loading-screen").fadeOut(400)
    $(".loading-screen").fadeOut(100 , function () {
        $(".loader").fadeOut(700, function () {
         $(".loader").removeClass('bg-black')       
 })        
})
 $("body").css("overflow", "visible")
 $('loader').css('display' , "none" )
    try{
        const data = await fetch(`https://www.themealdb.com/api/json/v1/1/list.php?i=list`)
        if(!data.ok)throw new Error(data.error.message)    
        const response = await data.json();
        displayIngredients(response.meals.slice(0, 20))
        console.log(response.meals);
        console.log("gg");
    }catch(err){
        console.log(err);
    }
}
fetchIng()
function displayIngredients(arr){
    let cartoona = ''
    for(let i = 0; i < arr.length; i++){
        cartoona += `
                        <div class="col-md-3">
                            <div onclick = "getIngredientsMeals('${arr[i].strIngredient}')" class="cursor inner position-relative overflow-hidden m-2">
                               <div class="  rounded-2 text-center IngredientPointer cursor ">
                               <i class="fa-solid fa-drumstick-bite fa-4x"></i>
                                <h4 class="text-center">${arr[i].strIngredient}</h4>   
                                <p>${arr[i].strDescription.split(" ").slice(0,20).join(" ")}</p>
                                </div>
                           </div>
                           </div>

`
    }
    document.getElementById('IngredientsData').innerHTML = cartoona
}

async function getIngredientsMeals(ingredients) {
    $(".loading-screen").fadeIn(700 , function(){
        $(".loader").fadeIn(700,async function () {
            $(".loader").addClass('bg-black' )

    let response = await fetch(`https://www.themealdb.com/api/json/v1/1/filter.php?i=${ingredients}`)
    response = await response.json()
    displayMealsIng(response.meals.slice(0, 20))

})
})
    $(".loading-screen").fadeOut(700 , function () {
        $(".loader").fadeOut(700, function () {
         $(".loader").removeClass('bg-black')       
    })})
    $('loader').css('display' , "block")
     $("body").css("overflow", "visible")
}

function displayMealsIng(arr) {
    let cartoona = "";
    for (let i = 0; i < arr.length; i++) {
        cartoona += `
        <div class="col-md-3 ">
                             <div onclick = "getMealDetailsIng('${arr[i].idMeal}')" class="cursor inner position-relative overflow-hidden m-2">
                                 <img src="${arr[i].strMealThumb}" class=" w-100 overflow-hidden">
                                 <div class="overlay text-center position-absolute d-flex justify-content-center align-items-center flex-column">
                                    <h3>${arr[i].strMeal}</h3>
                                    
                                 </div>
                             </div>
                         </div>
        `
    }
    document.getElementById("IngredientsData").innerHTML = cartoona
}

async function getMealDetailsIng(mealID) {
    $(".loading-screen").fadeIn(700 , function(){
        $(".loader").fadeIn(700,async function () {
            $(".loader").addClass('bg-black' )
    let respone = await fetch(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${mealID}`);
    respone = await respone.json();
    displayMealDetailsIng(respone.meals[0])
        })
    })
    $(".loading-screen").fadeOut(700 , function () {
        $(".loader").fadeOut(700, function () {
         $(".loader").removeClass('bg-black')       
     
    })
       
    })
    $('loader').css('display' , "block")
     $("body").css("overflow", "visible")
}

function displayMealDetailsIng(meal) {
    let details = ``

    for (let i = 1; i <= 20; i++) {
        if (meal[`strIngredient${i}`]) {
            details += `<li class="alert alert-info m-2 p-1">${meal[`strMeasure${i}`]} ${meal[`strIngredient${i}`]}</li>`
        }
    }

    let tags = meal.strTags?.split(",")
    if (!tags) tags = []
    let tagsStr = ''
    for (let i = 0; i < tags.length; i++) {
        tagsStr += `
        <li class="alert alert-danger m-2 p-1">${tags[i]}</li>`
    }
    let cartoona = `
<div class="col-md-4 text-white ">
                <img class="w-100 rounded-3" src="${meal.strMealThumb}"
                    alt="">
                    <h2>${meal.strMeal}</h2>
            </div>
            <div class="col-md-8 text-white position-relative start">
                <h2>Instructions</h2>
                <p>${meal.strInstructions}</p>
                <h3><span class="fw-bolder">Area : </span>${meal.strArea}</h3>
                <h3><span class="fw-bolder">Category : </span>${meal.strCategory}</h3>
                <h3>Recipes :</h3>
                <ul class="list-unstyled d-flex g-3 flex-wrap">
                    ${details}
                </ul>

                <h3>Tags :</h3>
                <ul class="list-unstyled d-flex g-3 flex-wrap">
                    ${tagsStr}
                </ul>

                <a target="_blank" href="${meal.strSource}" class="btn btn-success">Source</a>
                <a target="_blank" href="${meal.strYoutube}" class="btn btn-danger">Youtube</a>
            </div> 
  `
  document.getElementById("IngredientsData").innerHTML = cartoona
}

async function fetchArea(){
    $(".loading-screen").fadeOut(400)
    $(".loading-screen").fadeOut(100 , function () {
        $(".loader").fadeOut(700, function () {
         $(".loader").removeClass('bg-black')       
 })})
 $("body").css("overflow", "visible")
 $('loader').css('display' , "none" )
    try{
        const data = await fetch(`https://www.themealdb.com/api/json/v1/1/list.php?a=list`)
        if(!data.ok)throw new Error(data.error.message)    
        const response = await data.json();
        displayArea(response.meals)
        console.log("gg");
        
    }catch(err){
        console.log(err);
        
    }
}
function displayArea(arr){
    let cartoona = ''
    for(let i = 0; i < arr.length; i++){
        cartoona += `
                        <div class="col-md-3">
                            <div onclick = "getAreaMeals('${arr[i].strArea}')" class="cursor inner position-relative overflow-hidden m-2">
                               <div class="  rounded-2 text-center AreaPointer cursor m-4">
                                <i class=" fa-solid fa-house-laptop fa-4x"></i>
                                <h4 class="text-center">${arr[i].strArea}</h4>    
                                </div>
                           </div>
                           </div>
        `
    }
    document.getElementById("RowArea").innerHTML = cartoona
}
fetchArea();

function displayMealsArea(arr) {
    let cartoona = "";
    for (let i = 0; i < arr.length; i++) {
        cartoona += `
        <div class="col-md-3 ">
                             <div onclick = "getMealDetailsArea('${arr[i].idMeal}')" class="cursor inner position-relative overflow-hidden m-2">
                                 <img src="${arr[i].strMealThumb}" class=" w-100 overflow-hidden">
                                 <div class="overlay text-center position-absolute d-flex justify-content-center align-items-center flex-column">
                                    <h3>${arr[i].strMeal}</h3>
                                    
                                 </div>
                             </div>
                         </div>
        `
    }
    document.getElementById("RowArea").innerHTML = cartoona
}

function displayMealDetailsAra(meal) {
    let details = ``

    for (let i = 1; i <= 20; i++) {
        if (meal[`strIngredient${i}`]) {
            details += `<li class="alert alert-info m-2 p-1">${meal[`strMeasure${i}`]} ${meal[`strIngredient${i}`]}</li>`
        }
    }
    let tags = meal.strTags?.split(",")
    if (!tags) tags = []
    let tagsStr = ''
    for (let i = 0; i < tags.length; i++) {
        tagsStr += `
        <li class="alert alert-danger m-2 p-1">${tags[i]}</li>`
    }
    let cartoona = `


<div class="col-md-4 text-white ">
                <img class="w-100 rounded-3" src="${meal.strMealThumb}"
                    alt="">
                    <h2>${meal.strMeal}</h2>
            </div>
            <div class="col-md-8 text-white position-relative start">
                <h2>Instructions</h2>
                <p>${meal.strInstructions}</p>
                <h3><span class="fw-bolder">Area : </span>${meal.strArea}</h3>
                <h3><span class="fw-bolder">Category : </span>${meal.strCategory}</h3>
                <h3>Recipes :</h3>
                <ul class="list-unstyled d-flex g-3 flex-wrap">
                    ${details}
                </ul>

                <h3>Tags :</h3>
                <ul class="list-unstyled d-flex g-3 flex-wrap">
                    ${tagsStr}
                </ul>

                <a target="_blank" href="${meal.strSource}" class="btn btn-success">Source</a>
                <a target="_blank" href="${meal.strYoutube}" class="btn btn-danger">Youtube</a>
            </div>
  `
  document.getElementById("RowArea").innerHTML = cartoona
}

async function getAreaMeals(area) {
    RowArea.innerHTML = ""
    $(".loading-screen").fadeIn(700 , function(){
        $(".loader").fadeIn(700,async function () {
            $(".loader").addClass('bg-black' )
    let response = await fetch(`https://www.themealdb.com/api/json/v1/1/filter.php?a=${area}`)
    response = await response.json()
    displayMealsArea(response.meals.slice(0, 20))
})
})
$(".loading-screen").fadeOut(700 , function () {
    $(".loader").fadeOut(700, function () {
     $(".loader").removeClass('bg-black')       
})})
$('loader').css('display' , "block")
 $("body").css("overflow", "visible")
}
async function getMealDetailsArea(mealID) {
    $(".loading-screen").fadeIn(700 , function(){
        $(".loader").fadeIn(700,async function () {
            $(".loader").addClass('bg-black' )
    document.getElementById("RowArea").innerHTML = ''
    let respone = await fetch(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${mealID}`);
    respone = await respone.json();
    displayMealDetailsAra(respone.meals[0])
        })
    })

    $(".loading-screen").fadeOut(700 , function () {
        $(".loader").fadeOut(700, function () {
         $(".loader").removeClass('bg-black')         
    })})
    $('loader').css('display' , "block")
     $("body").css("overflow", "visible")
}
let RepasswordInputTouched = false;
let passInputTouched = false;
let AgeInputTouched = false;

let EmailInputTouched = false;
let phoneInputTouched = false;

let nameInputTouched = false;
if(document.getElementById('Name')) document.getElementById("Name").addEventListener("focus", () => {
    nameInputTouched = true
})
if(document.getElementById("Email")) document.getElementById("Email").addEventListener("focus", () => {
    EmailInputTouched = true
})
if(document.getElementById("phone")) document.getElementById("phone").addEventListener("focus", () => {
    phoneInputTouched = true
})
if(document.getElementById("Age")) document.getElementById("Age").addEventListener("focus", () => {
    AgeInputTouched = true
})
if(document.getElementById("pass")) document.getElementById("pass").addEventListener("focus", () => {
    passInputTouched = true
})

if(document.getElementById("Repassword")) document.getElementById("Repassword").addEventListener("focus", () => {
    RepasswordInputTouched = true
})

function ValidationForInput() {
if(nameInputTouched){
if (validationName()) {
    AlertName.classList.replace("d-block" , "d-none")

} else {
    AlertName.classList.replace( "d-none" ,"d-block")

}
}
if(EmailInputTouched){
if (validationEmail()) {
    AlertEmail.classList.replace("d-block" , "d-none")

} else {
    AlertEmail.classList.replace( "d-none" ,"d-block")
}
}
if(phoneInputTouched){
if(validationPhone()){
AlertPhone.classList.add("d-none")

}else {
AlertPhone.classList.remove("d-none")

}
}
if(AgeInputTouched){
if(validationAge()){
    AlertAge.classList.add("d-none")
}else {
    AlertAge.classList.remove("d-none")
}
}
if(passInputTouched){
if(validationpass()){
    Alertpass.classList.add("d-none")
}else {
    Alertpass.classList.remove("d-none")
}
}
if(RepasswordInputTouched){
if(validationrpass()){
    AlertRepass.classList.add("d-none")
}else {
    AlertRepass.classList.remove("d-none")
}
}
if(validationName() &&
validationEmail() &&
validationPhone() &&
validationAge() &&
validationpass() &&
validationrpass()){
    document.getElementById("buttonSubmit").classList.remove("disabled")
}
}
function validationName(){
    
return /^[A-Z{2,}|[a-z]{3,}$/.test(document.getElementById("Name").value)
}
function validationEmail(){
return /[^@ \t\r\n]+@[^@ \t\r\n]+\.[^@ \t\r\n]+/.test(document.getElementById("Email").value)
}
function validationPhone(){
return /^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/ .test(document.getElementById("phone").value)

}
function validationAge(){
return /^(1[0-9]|[2-9]\d)$/.test(document.getElementById("Age").value)

}
function validationpass(){
return /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$ %^&*-]).{8,}$/.test(document.getElementById("pass").value)
}
function validationrpass(){
return document.getElementById('pass').value == document.getElementById('Repassword').value

}

async function FetchCategory() {
    $(".loading-screen").fadeOut(400)
    $(".loading-screen").fadeOut(100 , function () {
        $(".loader").fadeOut(700, function () {
         $(".loader").removeClass('bg-black')       
 })
        
})
 $("body").css("overflow", "visible")
 $('loader').css('display' , "none" )
   try{
    const res = await fetch(`https://www.themealdb.com/api/json/v1/1/categories.php`);
    if(!res.ok)throw new Error(res.error.message)
    const data = await res.json();
    console.log(data);
    Displaycategory(data.categories)
    
   }catch(err){
    
   }
}
FetchCategory()

async function getCategoryMeals(category) {
    $(".loading-screen").fadeIn(700 , function(){
        $(".loader").fadeIn(700,async function () {
            $(".loader").addClass('bg-black' )
    document.getElementById("rowData").innerHTML = ""
    let response = await fetch(`https://www.themealdb.com/api/json/v1/1/filter.php?c=${category}`)
    response = await response.json()
    displayMeals(response.meals.slice(0, 20))
})
       
})
$(".loading-screen").fadeOut(700 , function () {
    $(".loader").fadeOut(700, function () {
     $(".loader").removeClass('bg-black')       
 
})
   
})
$('loader').css('display' , "block")
 $("body").css("overflow", "visible")
}

function displayMeals(arr) {
    let cartoona = "";
    for (let i = 0; i < arr.length; i++) {
        cartoona += `


        <div class="col-md-3 ">
                             <div onclick = "getMealDetails('${arr[i].idMeal}')" class="cursor inner position-relative overflow-hidden m-2">
                                 <img src="${arr[i].strMealThumb}" class=" w-100 overflow-hidden">
                                 <div class="overlay text-center position-absolute d-flex justify-content-center align-items-center flex-column">
                                    <h3>${arr[i].strMeal}</h3>
                                    
                                 </div>
                             </div>
                         </div>
        `
    }

    document.getElementById("rowData").innerHTML = cartoona

}
function displayMealDetails(meal) {
    let details = ``

    for (let i = 1; i <= 20; i++) {
        if (meal[`strIngredient${i}`]) {
            details += `<li class="alert alert-info m-2 p-1">${meal[`strMeasure${i}`]} ${meal[`strIngredient${i}`]}</li>`
        }
    }

    let tags = meal.strTags?.split(",")
    if (!tags) tags = []

    let tagsStr = ''
    for (let i = 0; i < tags.length; i++) {
        tagsStr += `
        <li class="alert alert-danger m-2 p-1">${tags[i]}</li>`
    }
    let cartoona = `
<div class="col-md-4 text-white ">
                <img class="w-100 rounded-3" src="${meal.strMealThumb}"
                    alt="">
                    <h2>${meal.strMeal}</h2>
            </div>
            <div class="col-md-8 text-white position-relative start">
                <h2>Instructions</h2>
                <p>${meal.strInstructions}</p>
                <h3><span class="fw-bolder">Area : </span>${meal.strArea}</h3>
                <h3><span class="fw-bolder">Category : </span>${meal.strCategory}</h3>
                <h3>Recipes :</h3>
                <ul class="list-unstyled d-flex g-3 flex-wrap">
                    ${details}
                </ul>

                <h3>Tags :</h3>
                <ul class="list-unstyled d-flex g-3 flex-wrap">
                    ${tagsStr}
                </ul>
                <a target="_blank" href="${meal.strSource}" class="btn btn-success">Source</a>
                <a target="_blank" href="${meal.strYoutube}" class="btn btn-danger">Youtube</a>
            </div>
  `
  document.getElementById("rowData").innerHTML = cartoona
}
async function getMealDetails(mealID) {
    $(".loading-screen").fadeIn(700 , function(){
        $(".loader").fadeIn(700,async function () {
            $(".loader").addClass('bg-black' )
    document.getElementById("rowData").innerHTML = ''
    let respone = await fetch(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${mealID}`);
    respone = await respone.json();
    displayMealDetails(respone.meals[0])
})})
$(".loading-screen").fadeOut(700 , function () {
    $(".loader").fadeOut(700, function () {
     $(".loader").removeClass('bg-black')       
 
})})
$('loader').css('display' , "block")
 $("body").css("overflow", "visible")

}
function Displaycategory(arr){
    let category = '';
    for(let i = 0; i < arr.length; i++){
        category += `
       
                          <div class="col-md-3 ">
                             <div onclick = "getCategoryMeals('${arr[i].strCategory}')" class="cursor inner position-relative overflow-hidden m-2">
                                 <img src="${arr[i].strCategoryThumb}" class=" w-100 overflow-hidden">
                                 <div class="overlay text-center position-absolute d-flex justify-content-center align-items-center flex-column">
                                    <h3>${arr[i].strCategory}</h3>
                                    <p>${arr[i].strCategoryDescription.split(" ").slice(0,20).join(" ")}</p>
                                 </div>
                             </div>
                         </div>
        `
        
    }
   document.getElementById("rowData").innerHTML = category;
}
// Finish Category
// searcg
async function FetchSearch(Search){
    $(".loading-screen").fadeOut(400)
    $(".loading-screen").fadeOut(100 , function () {
        $(".loader").fadeOut(700, function () {
         $(".loader").removeClass('bg-black')       
 })
        
})
 $("body").css("overflow", "visible")
 $('loader').css('display' , "none" )
    try{
        const data = await fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${Search}`);
        if(!data.ok)throw new Error(data.error.message)
        const response = await data.json();
    console.log(response);
    displaySearchByName(response.meals);
    $(".loading-screen").fadeOut(1200 , function () {
        $(".loader").fadeOut(700, function () {
         $(".loader").removeClass('bg-black')       
 })
        
})
 $("body").css("overflow", "visible")
 $('loader').css('display' , "none")
    }catch(err){
        console.log(err);
        
    }
}
if(document.getElementById("ByName")) document.getElementById("ByName").addEventListener("input", function(e){
    $(".loading-screen").fadeIn(1200 , function(){
        $(".loader").fadeIn(700, function () {
            $(".loader").addClass('bg-black' )
                      
            FetchSearch(e.target.value) 
        })            
        })}
)
function displaySearchByName(arr){
    let cartoona = ''
    for(let i = 0; i < arr.length; i++){  
        cartoona += 
        `
                        <div class="col-md-3">
                            <div onclick = "getMealDetailsSearchByName('${arr[i].idMeal}')" class="cursor inner position-relative overflow-hidden m-2">
                                <img src="${arr[i].strMealThumb}" class=" w-100 overflow-hidden">
                                <div class="overlay text-center position-absolute d-flex justify-content-center align-items-center">
                                    <h4 class="text-center">${arr[i].strMeal}</h4>
                                </div>
                            </div>
                        </div>
                        
        `     
    }

    $(".loading-screen").fadeOut(1200 , function () {
        $(".loader").fadeOut(700, function () {
         $(".loader").removeClass('bg-black')       
})})
   $('loader').css('display' , "block")
     $("body").css("overflow", "visible")
    document.getElementById("Rowdata").innerHTML = cartoona
}

async function getCategoryMealsSearchByName(category) {
    document.getElementById("Rowdata").innerHTML = ""
    let response = await fetch(`https://www.themealdb.com/api/json/v1/1/filter.php?c=${category}`)
    response = await response.json()
}
function displayMealDetailsSearchByName(meal) {
    let details = ``

    for (let i = 1; i <= 20; i++) {
        if (meal[`strIngredient${i}`]) {
            details += `<li class="alert alert-info m-2 p-1">${meal[`strMeasure${i}`]} ${meal[`strIngredient${i}`]}</li>`
        }
    }

    let tags = meal.strTags?.split(",")
    if (!tags) tags = []

    let tagsStr = ''
    for (let i = 0; i < tags.length; i++) {
        tagsStr += `
        <li class="alert alert-danger m-2 p-1">${tags[i]}</li>`
    }
    let cartoona = `
<div class="col-md-4 text-white ">
                <img class="w-100 rounded-3" src="${meal.strMealThumb}"
                    alt="">
                    <h2>${meal.strMeal}</h2>
            </div>
            <div class="col-md-8 text-white position-relative start">
                <h2>Instructions</h2>
                <p>${meal.strInstructions}</p>
                <h3><span class="fw-bolder">Area : </span>${meal.strArea}</h3>
                <h3><span class="fw-bolder">Category : </span>${meal.strCategory}</h3>
                <h3>Recipes :</h3>
                <ul class="list-unstyled d-flex g-3 flex-wrap">
                    ${details}
                </ul>

                <h3>Tags :</h3>
                <ul class="list-unstyled d-flex g-3 flex-wrap">
                    ${tagsStr}
                </ul>
                <a target="_blank" href="${meal.strSource}" class="btn btn-success">Source</a>
                <a target="_blank" href="${meal.strYoutube}" class="btn btn-danger">Youtube</a>
            </div>
  `
  document.getElementById("Rowdata").innerHTML = cartoona
}
async function FetchSearchByLetter(Search){
    try{
    Search == "" ? Search = "a" : "";
        const data = await fetch(`https://www.themealdb.com/api/json/v1/1/search.php?f=${Search}`);
        if(!data.ok)throw new Error(data.error.message)
        const response = await data.json();
    console.log(response);
    displaySearchByLetter(response.meals);
    }catch(err){
        console.log(err);
    }
}
if(document.getElementById("ByLetter")) document.getElementById("ByLetter").addEventListener("keyup", function(e){
    $(".loading-screen").fadeIn(400 , function(){
        $(".loader").fadeIn(300, function () {
            $(".loader").addClass('bg-black' )
            FetchSearchByLetter(e.target.value)
})})})
function displaySearchByLetter(arr){
    let cartoona = ''
    for(let i = 0; i < arr.length; i++){
        cartoona += 
        `
                        <div class="col-md-3">
                            <div onclick = "getMealDetailsSearchByLetter('${arr[i].idMeal}')" class="cursor inner position-relative overflow-hidden m-2">
                                <img src="${arr[i].strMealThumb}" class=" w-100 overflow-hidden">
                                <div class="overlay text-center position-absolute d-flex justify-content-center align-items-center">
                                    <h4 class="text-center">${arr[i].strMeal}</h4>
                                </div>
                            </div>
                        </div>
        `
    }
    $(".loading-screen").fadeOut(1200 , function () {
        $(".loader").fadeOut(700, function () {
         $(".loader").removeClass('bg-black')       
})})
   $('loader').css('display' , "block")
     $("body").css("overflow", "visible")
    document.getElementById("Rowdata").innerHTML = cartoona
}
async function getCategoryMealsSearchByLetter(category) { 
    document.getElementById("Rowdata").innerHTML = ""
    let response = await fetch(`https://www.themealdb.com/api/json/v1/1/search.php?f=${category}`)
    response = await response.json()
}

function displayMealDetailsSearchByLetter(meal) {
    let details = ``
    for (let i = 1; i <= 20; i++) {
        if (meal[`strIngredient${i}`]) {
            details += `<li class="alert alert-info m-2 p-1">${meal[`strMeasure${i}`]} ${meal[`strIngredient${i}`]}</li>`
        }
    }
    let tags = meal.strTags?.split(",")
    if (!tags) tags = []
    let tagsStr = ''
    for (let i = 0; i < tags.length; i++) {
        tagsStr += `
        <li class="alert alert-danger m-2 p-1">${tags[i]}</li>`
    }
    let cartoona = `
<div class="col-md-4 text-white ">
                <img class="w-100 rounded-3" src="${meal.strMealThumb}"
                    alt="">
                    <h2>${meal.strMeal}</h2>
            </div>
            <div class="col-md-8 text-white position-relative start">
                <h2>Instructions</h2>
                <p>${meal.strInstructions}</p>
                <h3><span class="fw-bolder">Area : </span>${meal.strArea}</h3>
                <h3><span class="fw-bolder">Category : </span>${meal.strCategory}</h3>
                <h3>Recipes :</h3>
                <ul class="list-unstyled d-flex g-3 flex-wrap">
                    ${details}
                </ul>
                <h3>Tags :</h3>
                <ul class="list-unstyled d-flex g-3 flex-wrap">
                    ${tagsStr}
                </ul>
                <a target="_blank" href="${meal.strSource}" class="btn btn-success">Source</a>
                <a target="_blank" href="${meal.strYoutube}" class="btn btn-danger">Youtube</a>
            </div>
  `
  document.getElementById("Rowdata").innerHTML = cartoona
}
async function getMealDetailsSearchByLetter(mealID) {
    $(".loading-screen").fadeIn(700 , function(){
        $(".loader").fadeIn(700,async function () {
            $(".loader").addClass('bg-black' )
    let respone = await fetch(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${mealID}`);
    respone = await respone.json();
    displayMealDetailsSearchByLetter(respone.meals[0])
    document.getElementById("ByName").classList.add("d-none");
    document.getElementById("ByLetter").classList.add("d-none");
})})
    $(".loading-screen").fadeOut(700 , function () {
        $(".loader").fadeOut(700, function () {
         $(".loader").removeClass('bg-black')        
})})
   $('loader').css('display' , "block")
     $("body").css("overflow", "visible")
}
async function getMealDetailsSearchByName(mealID) {
    let respone = await fetch(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${mealID}`);
    respone = await respone.json();
    $(".loading-screen").fadeIn(700 , function(){
        $(".loader").fadeIn(700,async function () {
            $(".loader").addClass('bg-black' )
    
    
    displayMealDetailsSearchByName(respone.meals[0])
    document.getElementById("ByName").classList.add("d-none");
    document.getElementById("ByLetter").classList.add("d-none");
})
})
$(".loading-screen").fadeOut(700 , function () {
    $(".loader").fadeOut(700, function () {
     $(".loader").removeClass('bg-black')       
 
})
   
})
$('loader').css('display' , "block")
 $("body").css("overflow", "visible")

}
