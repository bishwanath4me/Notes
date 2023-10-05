
//make addBtn selector
const addBtn = document.querySelector("#addBtn")
const main = document.querySelector("#main")
//creat saveNotes function
const saveNotes = () => {
    const notes = document.querySelectorAll(".note textarea");
    console.log(notes);
    const data =[];//data is empty
    notes.forEach(
        (note) => {
            data.push(note.value)
        }
    )
    //console.log(data)
    if(data.length ===0){
        localStorage.removeItem("notes")
    }else{
    //all deta come into array and to store that data into local storage by converting into string
    localStorage.setItem("notes",JSON.stringify(data))
    }
}
//as addbtn click note will be added for this we creat a function of addnote
addBtn.addEventListener(
    "click",
    function(){
        addNote()
    }
)

//  <div class="note">
//     <div class="tool">
//         <i class="fas fa-save"></i>
//         <i class="fas fa-trash"></i>
//     </div>
//     <textarea></textarea>
// </div> 
//calling addnote function & creat element div in that function
const addNote =(text="") =>{
    const note = document.createElement("div");
    //know add class in class list that nam is note
    note.classList.add("note")
    note.innerHTML =`
         <div class="tool">
         <i class="save fas fa-save"></i>
         <i class="trash fas fa-trash"></i>
         </div>
         <textarea>${text}</textarea>
         `;
         //to delet note 
         note.querySelector(".trash").addEventListener(
             "click",
             function(){
                 note.remove()
                 saveNotes()
                }
                )
                note.querySelector(".save").addEventListener(
                    "click",
                    function(){
                        saveNotes()
                    }
                    )
                    note.querySelector("textarea").addEventListener(
                        "focusout",
                        function(){
                            saveNotes()
                        }
                    )
                    main.appendChild(note);
                    saveNotes()
                } 
                //as user see ui we need to show note & for thish we creat self calling function
                 (
                    function(){
                        const lsnotes = JSON.parse(localStorage.getItem("notes"));
                        if(lsnotes === null){
                        addNote()
                        } else {
                            lsnotes.forEach(
                                (lsnote)=>{
                                    addNote(lsnote)//to feel the data
                                }
                            )
                            
                            }
                            console.log(lsnotes)
                        
                    }
                )() 