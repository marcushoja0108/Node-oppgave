const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
})
const notes = []
let noteId = 0;

let valid = false;
while(valid == false){
rl.question('Commands:  New_____View_____Delete', (menuInput) => {
        switch(menuInput.toLocaleLowerCase){
            case 'new':
                newNote()
                valid == true
                break;
            case 'view':
                viewNotes()
                valid == true
                break;
            case 'delete':
                deleteNotes()
                valid == true
                break;
            default:
                invalidChoice()
                break;
        }
    }
})


function newNote(){
    rl.question('Type note', (noteInput) => {
        let newNote = {
            id: noteId,
            note: noteInput
        }
        notes.push(newNote)
        console.log(newNote)
        noteId++;
        rl.close();
    });
}

function viewNotes(){
    if(notes.length > 0){
        notes.forEach(element => {
            console.log(`Id: ${element.id}
                ${element.note}`)
        });

    }
    else{
        console.log('No notes to show')
    }
}

function deleteNotes(){

}

function invalidChoice(){
    console.log("Invalid choice");
}