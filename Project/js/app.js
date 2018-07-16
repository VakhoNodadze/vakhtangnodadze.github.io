let table = document.querySelector('.main-table tbody');

function getNextDate(){//This Function just lets us choose the next right date
	let tr = table.children[0];//First row

	if(tr.children.length === 2){//If the button if pressed for the first time, it adds our first lesson: 30 april
		return new Date('April 30, 2018 00:00:00');
	}
	
	let lastChild = tr.children[tr.children.length - 1];//First Row's Last Element
	//We save the Date of the last day
	let lastDate = new Date(parseInt(lastChild.getAttribute('data-time')));//ბოლო დღის Date-ს ვიღებთ.
	let acceptedDays = [1, 3, 5, 6];//Our lesson days (Monday, Wednesday, Fridy, Saturday)
	let nextAcceptedDay = acceptedDays[0];//We say that the day we want to start with is Monday
	
	for(let weekDay of acceptedDays) {
		//for every acceptedDays' Elements we test if it is more than the last day we added. If so, 
		//the next day to be added, becomes that day
		if(weekDay > lastDate.getDay()) {
			nextAcceptedDay = weekDay;
			break;
		}
	}
	
	let nextDate = new Date(lastDate.getTime());
	nextDate.setDate(lastDate.getDate() + (nextAcceptedDay + 7 - lastDate.getDay()) % 7);

	return nextDate;
}

document.querySelector('.btn-add-day').addEventListener('click', function(){//functional for the "Add Day" Button
	let nextDate = getNextDate();//We use the previously created function and store it's answer in this value
	let parts = nextDate.toDateString().split(' ');//We split the date with spaces
	parts.pop();//We delete the last element, in this case years
	// let title = parts.join(' ');//
	let title = parts[0] + ' ' + parts[2] + ' ' + parts[1];//We now Join the dates, but now switch day of the month and month
	
	let td = document.createElement('td');//create a td Element and store it
	td.innerHTML = title;//we write the date in this stored td
	td.setAttribute('data-time', nextDate.getTime());//We give attribute to the created TD, so we can easily address it
	
	table.children[0].appendChild(td);//We Store this created TD in table's first row

	for(let i = 1; i < table.children.length; i++) {//We start cycle on all the table except for first row
		td = document.createElement('td');//
		td.innerHTML = 0;
		td.setAttribute('data-score-box', 1);//We give it a new attribute so we can easily address it for the future
		td.setAttribute('class', 'red');//We give red color for all of first created elements

		table.children[i].appendChild(td);//we add newly created TD in it's place
	}

	updateStatistic();//We use the below created function to update the scores automaticaly
});

document.querySelector('.btn-remove-day').addEventListener('click', function(){//functional for the "Remove Day" button
	if(table.children[0].children.length > 2) {//If we have more than two elements in the first row
		for(let i = 0; i < table.children.length; i++) {
			let tr = table.children[i];
			
			tr.removeChild(tr.children[tr.children.length - 1]);//Removes each cell one by one
		}

		updateStatistic();//We use the below created function to update the scores automaticaly
	}
});

table.addEventListener('click', function(event){//functional so we can write scores in the cells
	if(event.target.hasAttribute('data-score-box')) {/*We use the attribute we gave it in the top. if the cell has this
		element, then we need this */
		let point;
		let td = event.target;//we store the cell target in the td value

		do {
			let promptValue = prompt('Enter point');//ask to enter a point

			if (promptValue === null) {//if the user presses Cancel, the prompt will close
				return;
			}

			point = parseInt(promptValue);
		} while (isNaN(point));//if the user enters something other then a number, it will keep asking again

		if(point > 5) {//If the input is higher than 5, input is 5
			point = 5;
		}

		if(point < 0) {//if the input is lower than 0, input is 0
			point = 0;
		}

		td.innerHTML = point;//we make the point show up in the cell

		if(point > 0) {
			td.setAttribute('class', 'green');//if the score is higher than 0, it will be green
		} 
		else {
			td.setAttribute('class', 'red');/*if the score changes from default(0) to a green and than to 0 again, the cell
			gets red again */
		}

		updateStatistic();//We use the below created function to update all the scores automaticaly
	}
});

function updateStatistic(){

	let countDays = table.children[0].children.length - 2;//To know the days we get the total number of columns minus 2

	document.querySelector('.statistic .total-days .value').innerHTML = countDays; 

	let countStudents = table.children.length - 1;//TO know the students numbers, we get the total number of rows minus 1

	document.querySelector('.statistic .total-students .value').innerHTML = countStudents;

	let missedLessons = 0;

	for(let i = 1; i < table.children.length; i++) {//all the rows, one by one (from top to bottom)
		let tr = table.children[i];
		
		for(let j = 2; j < tr.children.length; j++) {//all the columns one by one(from left to right)
			if(tr.children[j].innerHTML == '0') {
				missedLessons++;
			}
		}
	}

	document.querySelector('.statistic .missed-lesson .value').innerHTML = missedLessons;

	let sum = 0;

	for(let i = 1; i < table.children.length; i++) {//all the rows, one by one(from top to bottom)
		let tr = table.children[i];
		
		sum += parseFloat(tr.children[1].innerHTML);
	}

	let average = sum / countStudents;

	document.querySelector('.statistic .average-mark .value').innerHTML = average.toFixed(2);

	updateAverages();//We use the below created function to update the average scores automaticaly
}

function updateAverages(){
	for(let i = 1; i < table.children.length; i++) {
		let tr = table.children[i];
		
		if(tr.children.length === 2) {//If we have only two elements in the row, than average is 0
			tr.children[1].innerHTML = '0.00';
			
			continue; //Skip
		}

		let sum = 0;

		for(let j = 2; j < tr.children.length; j++) {
			sum += parseFloat(tr.children[j].innerHTML);//We sum all the numbers stored in the cells
		}

		let average = sum / (tr.children.length - 2);//average is all that number devided by the total days

		tr.children[1].innerHTML = average.toFixed(2);
		// tr.children[1].setAttribute('class', 'yellow');
		// array.push(average.toFixed(2));
	}
}
