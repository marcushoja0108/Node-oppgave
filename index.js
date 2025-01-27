const readline = require('readline');
const fs = require('fs/promises')

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
})

mainMenu()
function mainMenu(){
    rl.question('Commands:  New || View || Delete || Exit  ', (menuInput) => {
            switch(menuInput.toLocaleLowerCase()){
                case 'new':
                    newNote()
                    break;
                case 'view':
                    viewNotes()
                    mainMenu()
                    break;
                case 'delete':
                    deleteNotes()
                    break;
                case 'exit':
                    exitApp()
                    break;
                default:
                    invalidChoice()
                    mainMenu()
                    break;
            }
        })
}


function newNote(){
    rl.question('Type note:  ', (noteInput) => {
        fs.appendFile('notes.txt', noteInput + '\n')
        console.log(`Note added`)
        mainMenu()
    });
}

function viewNotes(){
fs.readFile('notes.txt', 'utf-8', (err, notes) => {
    if(err){
        console.log('No notes to show');
    }
    else{
        console.log("Notes:\n" + notes);
    }
    mainMenu();
});
}

function deleteNotes(){
    rl.question('Are you sure you want to delete notes? y/n ', (input) => {
    switch(input){
        case 'y':
            fs.unlink('notes.txt')
            break;
        case 'n':
            break;
    }
        mainMenu()
    });
}

function invalidChoice(){
    console.log("Invalid choice");
}

function exitApp(){
    rl.close()
}