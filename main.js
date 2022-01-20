const body = document.body
// body.append("Hello World", " Bye")

//append can be used to append elements and strings


//const div = document.createElement("div")  // we have created an element but we need to append it 
//body.append(div) //we have now appended it and can now see it 
//alternatively you can use appendChild to append an element 
//body.appendChild(div)

//append child can only be used be for elements not strings 

//div.innerText = "Kenya"

//div.textContent = "Nairobi"

//const div = document.querySelector("div")

// console.log(div.innerText)  //hi
// console.log(div.textContent)  //hi Bye including placement and space

 
//div.innerText = "<strong> Hello World</strong>" // OUTPUT <strong> Hello World</strong>

// div.innerHTML = "<strong> Hello World</strong>"  //OUTPUT Hello World (BOLD) Security weakness

// const strong = document.createElement("strong")
// div.append(strong)
// strong.textContent = "Hey you"


//strong.remove() //remove the element


 const hey = document.querySelector("#hey")

 console.log(hey.getAttribute("id"))

 console.log(hey.title)
 console.log(hey.id)
 console.log(hey.setAttribute("id", "baby")) //id has been changed from hey to baby

 hey.id= "moon"

 //hey.removeAttribute("id")  //removes id attribute


 console.log(hey.dataset)


 hey.classList.remove ("h1")
 hey.classList.toggle("h13") //adds or removes depending if its there or not 
 hey.classList.toggle("h13",  false) //removes the class if boolean is false
 hey.classList.toggle("h13",  true)//adds the class if boolean is true
 

 hey.style.color= "red" //to access style properties in DOM
 