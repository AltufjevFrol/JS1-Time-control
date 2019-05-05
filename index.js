/**
 * @param {String} date
 * @returns {Object}
 */
module.exports = function (date) {

//var setDate = new Date (date);// полученая в функцию дата преобразована в объект Date
//var varDate = setDate;
// объект возвращения функции объект возвращения функции объект возвращения функции объект возвращения функции
return {
value: _value.toString(),

_value: new Date (date),// здесь должна быть строка вида - '2017-04-20 14:00'

add: function (num, units) { // метод прибавки времени

// исключения
if ((units ==='years' || units ==='months' || units === 'days' || units === 'hours' || units === 'minutes') && !(isNaN(num)) && num>0 ) {
	
switch (units) {
case 'years': 
this._value = new Date (this._value.setFullYear(this._value.getFullYear() + num));
break;
case 'months':
this._value = new Date (this._value.setMonth(this._value.getMonth() + num));
break;
case 'days':
this._value = new Date (this._value.setDate(this._value.getDate() + num));
break;
case 'hours':
this._value = new Date (this._value.setHours(this._value.getHours() + num));
break;
case 'minutes':
this._value = new Date (this._value.setMinutes(this._value.getMinutes() + num));
break;
}

} else {
	throw new TypeError();
}
return this;
}
,

subtract: function (num, units) {// метод вычитания времени
// исключения
if ((units ==='years' || units ==='months' || units === 'days' || units === 'hours' || units === 'minutes') && !(isNaN(num)) && num>0 ) {
	
switch (units) {
case 'years': 
this._value = new Date (this._value.setFullYear(this._value.getFullYear() - num));
break;
case 'months':
this._value = new Date (this._value.setMonth(this._value.getMonth() - num));
break;
case 'days':
this._value = new Date (this._value.setDate(this._value.getDate() - num));
break;
case 'hours':
this._value = new Date (this._value.setHours(this._value.getHours() - num));
break;
case 'minutes':
this._value = new Date (this._value.setMinutes(this._value.getMinutes() - num));
break;
}

} else {
	throw new TypeError();
}
return this;	
}
};
// объект возвращения функции объект возвращения функции объект возвращения функции объект возвращения функции

/*setDate = null;
varDate = null;*/
};
