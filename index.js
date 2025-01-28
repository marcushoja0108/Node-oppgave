const readline = require('readline');
const fs = require('fs')

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
        fs.appendFile('notes.txt', noteInput + '\n', (err) => {
            if(err) console.log("Error adding a note", err);
            else console.log(`\nNote added`)
        })
        mainMenu()
    });
}

function viewNotes(){
fs.readFile('notes.txt', 'utf-8', (err, notes) => {
    if(err){
        console.log('No notes to show');
    }
    else{
        console.log(`Notes:\n  ${notes}`);
    }
    mainMenu();
});
}

function deleteNotes(){
    if(fs.existsSync('notes.txt')){
        rl.question('Are you sure you want to delete notes? y/n ', (input) => {
        switch(input){
            case 'y':
                fs.unlink('notes.txt', (err) => {
                    if(err) console.log("Error deleting notes", err);
                    else console.log("Notes deleted")
                })
                break;
            case 'n':
                console.log("Delete aborted")
                break;
            }
        });
    }
    else{
        console.log("No files to delete")
    }
    mainMenu()
}

function invalidChoice(){
    console.log("Invalid choice");
}

function exitApp(){
    rl.close()
}