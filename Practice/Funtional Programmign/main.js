let companies = [
{name : 'company1' , category : 'Finance' , start : 1997, end : 2002},
{name : 'company2' , category : 'Automobile' , start : 1983, end : 1990},
{name : 'company3' , category : 'Stocks' , start : 1980, end : 2007},
{name : 'company4' , category : 'Finance' , start : 1982, end : 2003},
{name : 'company5' , category : 'Marketing' , start : 2001, end : 2012},
{name : 'company4' , category : 'Finance' , start : 1987, end : 2001},


]

let ages = [4, 20, 31, 40, 17, 16, 19, 25, 21, 9, 15, 11, 8 , 66 , 61 , 10 ];
 
let financeCompany = companies.filter(function(company){
	if (company.category === 'Finance') {
		return true;
	}
});
console.log(financeCompany)

let specialFinanceCompanies = companies.filter(function(company){
	if (company.category === 'Finance' && company.start >= 1980 && company.start < 1990) {
		return true;
	}
})
console.log(specialFinanceCompanies)



companies.forEach(function(company){
  console.log(company.name)
})


let companName = companies.map(function(company){
	 return company.name + '[' + company.start + '-' + company.end + ']' 
})
console.log(companName)

ages.forEach(function(age){
	console.log(Math.sqrt(age) * 2)
})

var list = ['apple' , 'mango' , 'pear']
console.log(list)
function  veg(chop){
  return 'chopped -' + chop
}

 list.forEach(function(listitem){
 	console.log(veg(listitem))
})
