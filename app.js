import inquirer from "inquirer";
import chalk from "chalk";
console.log(chalk.yellowBright('\n\n\t\t' + '✨'.repeat(60)));
console.log(chalk.yellowBright('\t\t' + '='.repeat(60)));
console.log(chalk.yellowBright.bold('\t\t' + '='.repeat(23) + 'ADVENTURE GAME' + '='.repeat(23)));
console.log(chalk.yellowBright('\t\t' + '='.repeat(60)));
console.log(chalk.yellowBright('\t\t' + '✨'.repeat(60)));
//classes for player and opponent
class Player {
    name;
    fuel = 100;
    constructor(name) {
        this.name = name;
    }
    fuelDecrease() {
        let fuel = this.fuel - 25;
        this.fuel = fuel;
    }
    fuelIncrease() {
        this.fuel = 100;
    }
    knockoutpunch() {
        this.fuel = 0;
    }
}
class Opponent {
    name;
    fuel = 100;
    constructor(name) {
        this.name = name;
    }
    fuelDecrease() {
        let fuel = this.fuel - 25;
        this.fuel = fuel;
    }
    knockoutpunch() {
        this.fuel = 0;
    }
}
//variable to ask player name
let player = await inquirer.prompt({
    name: 'name',
    type: 'input',
    message: chalk.blueBright('\n\n Please enter your name:')
});
//variable to select opponent
let opponent = await inquirer.prompt({
    name: 'select',
    type: 'list',
    message: chalk.blueBright('\n\n Select your opponent:'),
    choices: ['Skeleton', 'Alien', 'Zombie']
});
//let p1=new Player(player.name.charAt(0).toUpperCase()+player.name.slice(1).toLowerCase())  
//Can be converted in title case in this way too
//converted the player name in title case
let title_case = player.name.charAt(0).toUpperCase() + player.name.slice(1).toLowerCase();
//declared variable to make object and used classes to get its properties
let p1 = new Player(title_case);
let o1 = new Opponent(opponent.select);
do { //used do while loop
    //Skeleton
    if (opponent.select == 'Skeleton') {
        let ask = await inquirer.prompt({
            name: 'ask',
            type: 'list',
            message: chalk.blueBright('\n\n What do you want to do?'),
            choices: ['Attack', 'Drink portion', 'Run for life', 'Knockout Punch']
        });
        if (ask.ask == 'Attack') {
            let num = Math.floor(Math.random() * 2); //generating random number
            if (num > 0) {
                p1.fuelDecrease();
                console.log(chalk.yellowBright(`\n\n\t\t${p1.name} fuel is ${p1.fuel}`));
                console.log(chalk.yellowBright(`\n\n\t\t${o1.name} fuel is ${o1.fuel}`));
                if (p1.fuel <= 0) {
                    console.log(chalk.redBright(`\n\n\t\tYou loose! Better Luck Next Time....`));
                    console.log(chalk.yellowBright('\n\n\t\t' + '✨'.repeat(60)));
                    console.log(chalk.yellowBright('\t\t' + '='.repeat(60)));
                    console.log(chalk.yellowBright.bold('\t\t' + '='.repeat(20) + 'THANKS FOR PLAYING!' + '='.repeat(21)));
                    console.log(chalk.yellowBright('\t\t' + '='.repeat(60)));
                    console.log(chalk.yellowBright('\t\t' + '✨'.repeat(60)));
                    process.exit(); //immediately exit from process
                }
            }
            else if (num <= 0) {
                o1.fuelDecrease();
                console.log(chalk.yellowBright(`\n\n\t\t${p1.name} fuel is ${p1.fuel}`));
                console.log(chalk.yellowBright(`\n\n\t\t${o1.name} fuel is ${o1.fuel}`));
                if (o1.fuel <= 0) {
                    console.log(chalk.greenBright(`\n\n\t\t Congratulations! You Win....`));
                    console.log(chalk.yellowBright('\n\n\t\t' + '✨'.repeat(60)));
                    console.log(chalk.yellowBright('\t\t' + '='.repeat(60)));
                    console.log(chalk.yellowBright.bold('\t\t' + '='.repeat(20) + 'THANKS FOR PLAYING!' + '='.repeat(21)));
                    console.log(chalk.yellowBright('\t\t' + '='.repeat(60)));
                    console.log(chalk.yellowBright('\t\t' + '✨'.repeat(60)));
                    process.exit(); //immediately exit from process
                }
            }
        }
        else if (ask.ask == 'Drink portion') {
            p1.fuelIncrease();
            console.log(chalk.yellowBright(`\n\n\t\t You Drink Health Portion, Your fuel is ${p1.fuel}`));
        }
        else if (ask.ask == 'Run for life') {
            console.log(chalk.redBright(`\n\n\t\t You Loose, Better Luck Next Time....`));
            console.log(chalk.yellowBright('\n\n\t\t' + '✨'.repeat(60)));
            console.log(chalk.yellowBright('\t\t' + '='.repeat(60)));
            console.log(chalk.yellowBright.bold('\t\t' + '='.repeat(20) + 'THANKS FOR PLAYING!' + '='.repeat(21)));
            console.log(chalk.yellowBright('\t\t' + '='.repeat(60)));
            console.log(chalk.yellowBright('\t\t' + '✨'.repeat(60)));
            process.exit(); //immediately exit from process
        }
        else if (ask.ask == 'Knockout Punch') {
            let count = Math.floor(Math.random() * 2);
            if (count == 0) {
                o1.knockoutpunch();
                console.log(chalk.yellowBright(`\n\n\t\t ${p1.name}, It's a Perfect Punch!`));
                console.log(chalk.yellowBright('\n\n\t\t Congratulations! You Won..'));
                console.log(chalk.yellowBright('\n\n\t\t' + '✨'.repeat(60)));
                console.log(chalk.yellowBright('\t\t' + '='.repeat(60)));
                console.log(chalk.yellowBright.bold('\t\t' + '='.repeat(20) + 'THANKS FOR PLAYING!' + '='.repeat(21)));
                console.log(chalk.yellowBright('\t\t' + '='.repeat(60)));
                console.log(chalk.yellowBright('\t\t' + '✨'.repeat(60)));
                process.exit(); //immediately exit from game
            }
            else if (count !== 0) {
                p1.knockoutpunch();
                console.log(chalk.yellowBright(`\n\n\t\t ${p1.name}, It's a Perfect Punch!`));
                console.log(chalk.yellowBright('\n\n\t\t Oops! You Lost..'));
                console.log(chalk.yellowBright('\n\n\t\t' + '✨'.repeat(60)));
                console.log(chalk.yellowBright('\t\t' + '='.repeat(60)));
                console.log(chalk.yellowBright.bold('\t\t' + '='.repeat(20) + 'THANKS FOR PLAYING!' + '='.repeat(21)));
                console.log(chalk.yellowBright('\t\t' + '='.repeat(60)));
                console.log(chalk.yellowBright('\t\t' + '✨'.repeat(60)));
                process.exit(); //immediately exit from game
            }
        }
    }
    //Alien
    if (opponent.select == 'Alien') {
        let ask = await inquirer.prompt({
            name: 'ask',
            type: 'list',
            message: chalk.blueBright('\n\n What do you want to do?'),
            choices: ['Attack', 'Drink portion', 'Run for life', 'Knockout Punch']
        });
        if (ask.ask == 'Attack') {
            let num = Math.floor(Math.random() * 2);
            if (num > 0) {
                p1.fuelDecrease();
                console.log(chalk.yellowBright(`\n\n\t\t${p1.name} fuel is ${p1.fuel}`));
                console.log(chalk.yellowBright(`\n\n\t\t${o1.name} fuel is ${o1.fuel}`));
                if (p1.fuel <= 0) {
                    console.log(chalk.redBright(`\n\n\t\t You Loose! Better Luck Next Time....`));
                    console.log(chalk.yellowBright('\n\n\t\t' + '✨'.repeat(60)));
                    console.log(chalk.yellowBright('\t\t' + '='.repeat(60)));
                    console.log(chalk.yellowBright.bold('\t\t' + '='.repeat(20) + 'THANKS FOR PLAYING!' + '='.repeat(21)));
                    console.log(chalk.yellowBright('\t\t' + '='.repeat(60)));
                    console.log(chalk.yellowBright('\t\t' + '✨'.repeat(60)));
                    process.exit(); //immediately exit from loop
                }
            }
            else if (num <= 0) {
                o1.fuelDecrease();
                console.log(chalk.yellowBright(`\n\n\t\t${p1.name} fuel is ${p1.fuel}`));
                console.log(chalk.yellowBright(`\n\n\t\t${o1.name} fuel is ${o1.fuel}`));
                if (o1.fuel <= 0) {
                    console.log(chalk.greenBright(`\n\n\t\tCongratulations! You Win....`));
                    console.log(chalk.yellowBright('\n\n\t\t' + '✨'.repeat(60)));
                    console.log(chalk.yellowBright('\t\t' + '='.repeat(60)));
                    console.log(chalk.yellowBright.bold('\t\t' + '='.repeat(20) + 'THANKS FOR PLAYING!' + '='.repeat(21)));
                    console.log(chalk.yellowBright('\t\t' + '='.repeat(60)));
                    console.log(chalk.yellowBright('\t\t' + '✨'.repeat(60)));
                    process.exit(); //immediately exit from loop
                }
            }
        }
        else if (ask.ask == 'Drink portion') {
            p1.fuelIncrease();
            console.log(chalk.yellowBright(`\n\n\t\tYou Drink Health Portion, Your fuel is ${p1.fuel}`));
        }
        else if (ask.ask == 'Run for life') {
            console.log(chalk.redBright(`\n\n\t\tYou Loose! Better Luck Next Time....`));
            console.log(chalk.yellowBright('\n\n\t\t' + '✨'.repeat(60)));
            console.log(chalk.yellowBright('\t\t' + '='.repeat(60)));
            console.log(chalk.yellowBright.bold('\t\t' + '='.repeat(20) + 'THANKS FOR PLAYING!' + '='.repeat(21)));
            console.log(chalk.yellowBright('\t\t' + '='.repeat(60)));
            console.log(chalk.yellowBright('\t\t' + '✨'.repeat(60)));
            process.exit(); //immediately exit form loop
        }
        else if (ask.ask == 'Knockout Punch') {
            let count = Math.floor(Math.random() * 2);
            if (count == 0) {
                o1.knockoutpunch();
                console.log(chalk.yellowBright(`\n\n\t\t ${p1.name}, It's a Perfect Punch!`));
                console.log(chalk.yellowBright('\n\n\t\t Congratulations! You Won..'));
                console.log(chalk.yellowBright('\n\n\t\t' + '✨'.repeat(60)));
                console.log(chalk.yellowBright('\t\t' + '='.repeat(60)));
                console.log(chalk.yellowBright.bold('\t\t' + '='.repeat(20) + 'THANKS FOR PLAYING!' + '='.repeat(21)));
                console.log(chalk.yellowBright('\t\t' + '='.repeat(60)));
                console.log(chalk.yellowBright('\t\t' + '✨'.repeat(60)));
                process.exit(); //immediately exit from game
            }
            else if (count !== 0) {
                p1.knockoutpunch();
                console.log(chalk.yellowBright(`\n\n\t\t ${p1.name}, It's a Perfect Punch!`));
                console.log(chalk.yellowBright('\n\n\t\t Oops! You Lost..'));
                console.log(chalk.yellowBright('\n\n\t\t' + '✨'.repeat(60)));
                console.log(chalk.yellowBright('\t\t' + '='.repeat(60)));
                console.log(chalk.yellowBright.bold('\t\t' + '='.repeat(20) + 'THANKS FOR PLAYING!' + '='.repeat(21)));
                console.log(chalk.yellowBright('\t\t' + '='.repeat(60)));
                console.log(chalk.yellowBright('\t\t' + '✨'.repeat(60)));
                process.exit(); //immediately exit from game
            }
        }
    }
    //Zombie
    if (opponent.select == 'Zombie') {
        let ask = await inquirer.prompt({
            name: 'ask',
            type: 'list',
            message: chalk.blueBright('\n\n What do you want to do?'),
            choices: ['Attack', 'Drink portion', 'Run for life', 'Knockout Punch']
        });
        if (ask.ask == 'Attack') {
            let num = Math.floor(Math.random() * 2);
            if (num > 0) {
                p1.fuelDecrease();
                console.log(chalk.yellowBright(`\n\n\t\t${p1.name} fuel is ${p1.fuel}`));
                console.log(chalk.yellowBright(`\n\n\t\t${o1.name} fuel is ${o1.fuel}`));
                if (p1.fuel <= 0) {
                    console.log(chalk.redBright(`\n\n\t\tYou Loose! Better Luck Next Time....`));
                    console.log(chalk.yellowBright('\n\n\t\t' + '✨'.repeat(60)));
                    console.log(chalk.yellowBright('\t\t' + '='.repeat(60)));
                    console.log(chalk.yellowBright.bold('\t\t' + '='.repeat(20) + 'THANKS FOR PLAYING!' + '='.repeat(21)));
                    console.log(chalk.yellowBright('\t\t' + '='.repeat(60)));
                    console.log(chalk.yellowBright('\t\t' + '✨'.repeat(60)));
                    process.exit(); //to break loop
                }
            }
            else if (num <= 0) {
                o1.fuelDecrease();
                console.log(chalk.yellowBright(`\n\n\t\t${p1.name} fuel is ${p1.fuel}`));
                console.log(chalk.yellowBright(`\n\n\t\t${o1.name} fuel is ${o1.fuel}`));
                if (o1.fuel <= 0) {
                    console.log(chalk.greenBright(`\n\n\t\tConratulations! You Win....`));
                    console.log(chalk.yellowBright('\n\n\t\t' + '✨'.repeat(60)));
                    console.log(chalk.yellowBright('\t\t' + '='.repeat(60)));
                    console.log(chalk.yellowBright.bold('\t\t' + '='.repeat(20) + 'THANKS FOR PLAYING!' + '='.repeat(21)));
                    console.log(chalk.yellowBright('\t\t' + '='.repeat(60)));
                    console.log(chalk.yellowBright('\t\t' + '✨'.repeat(60)));
                    process.exit(); //to break loop
                }
            }
        }
        else if (ask.ask == 'Drink portion') {
            p1.fuelIncrease();
            console.log(chalk.yellowBright(`\n\n\t\tYou Drink Health Portion, Your fuel is ${p1.fuel}`));
        }
        else if (ask.ask == 'Run for life') {
            console.log(chalk.redBright(`\n\n\t\tYou Loose! Better Luck Next Time....`));
            console.log(chalk.yellowBright('\n\n\t\t' + '✨'.repeat(60)));
            console.log(chalk.yellowBright('\t\t' + '='.repeat(60)));
            console.log(chalk.yellowBright.bold('\t\t' + '='.repeat(20) + 'THANKS FOR PLAYING!' + '='.repeat(21)));
            console.log(chalk.yellowBright('\t\t' + '='.repeat(60)));
            console.log(chalk.yellowBright('\t\t' + '✨'.repeat(60)));
            process.exit(); //to break loop
        }
        else if (ask.ask == 'Knockout Punch') {
            let count = Math.floor(Math.random() * 2);
            if (count == 0) {
                o1.knockoutpunch();
                console.log(chalk.yellowBright(`\n\n\t\t ${p1.name}, It's a Perfect Punch!`));
                console.log(chalk.yellowBright('\n\n\t\t Congratulations! You Won..'));
                console.log(chalk.yellowBright('\n\n\t\t' + '✨'.repeat(60)));
                console.log(chalk.yellowBright('\t\t' + '='.repeat(60)));
                console.log(chalk.yellowBright.bold('\t\t' + '='.repeat(20) + 'THANKS FOR PLAYING!' + '='.repeat(21)));
                console.log(chalk.yellowBright('\t\t' + '='.repeat(60)));
                console.log(chalk.yellowBright('\t\t' + '✨'.repeat(60)));
                process.exit(); //immediately exit from game
            }
            else if (count !== 0) {
                p1.knockoutpunch();
                console.log(chalk.yellowBright(`\n\n\t\t ${p1.name}, It's a Perfect Punch!`));
                console.log(chalk.yellowBright('\n\n\t\t Oops! You Lost..'));
                console.log(chalk.yellowBright('\n\n\t\t' + '✨'.repeat(60)));
                console.log(chalk.yellowBright('\t\t' + '='.repeat(60)));
                console.log(chalk.yellowBright.bold('\t\t' + '='.repeat(20) + 'THANKS FOR PLAYING!' + '='.repeat(21)));
                console.log(chalk.yellowBright('\t\t' + '='.repeat(60)));
                console.log(chalk.yellowBright('\t\t' + '✨'.repeat(60)));
                process.exit(); //immediately exit from game
            }
        }
    }
} while (true);
