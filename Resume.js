var getJson=(file)=>{
	return new Promise((resolve,reject)=>{

		return fetch(file).then(response=>{
			
			if(response.ok){resolve(response.json());}
			else
				{reject(new Error("error"))}
		})
	})
}

getJson("Resume.json").then(d=>{
console.log(d);
fetch_details(d.details);
fetch_objective(d.Objective);
fetch_education(d.Education);
fetch_project(d.Project);
fetch_skills(d.Skills);
fetch_accomplishments(d.Accomplishments);
})

var main=document.querySelector(".parent-div");

function fetch_details(dd)
{

for(var i=0;i<dd.length;i++)
	{
	var li=document.createElement("h2");
	li.classList.add("h2");
	li.textContent=dd[i];
	main.appendChild(li);
	}
	main.appendChild(document.createElement("hr"));
	
}

function fetch_objective(o)
{
	for(var i=0;i<o.length;i++)
	{
	var h3=document.createElement("h3");
	h3.classList.add("p");
	h3.textContent=o[i];
	h2=document.createElement("h2");
	h2.classList.add("h2");
	h2.textContent="Career Objective ";
	main.append(h2);
	main.appendChild(h3);
	main.appendChild(document.createElement("hr"));
	}
} 

function fetch_education(e)
{
	var h3=document.createElement("h2");
	h3.classList.add("h2");
	h3.textContent="Education";
	main.appendChild(h3);
	var table=document.createElement("table");
	table.classList.add("table");
	for(var i=0;i<e.length;i++)
	{
	//var p=document.createElement("p");
	//p.textContent=e[i];
	//h2=document.createElement
	
	var tr=document.createElement("tr");
	var td=document.createElement("td");
	td.classList.add("td");
	var td1=document.createElement("td");
	td1.classList.add("td");
	td.textContent=e[i];
	td1.textContent=e[++i];
	tr.appendChild(td);
	tr.appendChild(td1);
	table.appendChild(tr);
	main.appendChild(table);
	}
	main.appendChild(document.createElement("hr"));
}

function fetch_project(pr)
{
	h2=document.createElement("h2");
	h2.classList.add("h2");
	h2.textContent="Academic Projects";
	main.appendChild(h2);
	h3=document.createElement("h3");
	h3.classList.add("h2");
	h3.textContent="1.Student Interaction System with Higher Officials | July-November 2019";
	main.appendChild(h3);
	for(var i=0;i<pr.list.length;i++)
	{
	var p=document.createElement("p");
	p.classList.add("p");
	p.textContent=pr.list[i];
	main.appendChild(p);
	if(i==1)
	{
	h3=document.createElement("h3");
	h3.classList.add("h2");
	h3.textContent="2.Data security using CBC | January-April 2020";
	main.appendChild(h3);
	}
	}
	main.appendChild(document.createElement("hr"));
	
}

function fetch_skills(sk)
{
	h2=document.createElement("h2");
	h2.classList.add("h2");
	h2.textContent="Skills";
	main.appendChild(h2);
	p=document.createElement("h3");
	p.classList.add("h2");
	p.textContent="Languages";
	main.appendChild(p);
	p1=document.createElement("p");
	p1.classList.add("p");
	p1.textContent="";
	for(var i=0;i<sk.Languages.length;i++)
	{
		
		p1.textContent+=sk.Languages[i]+", ";
	}
	main.appendChild(p1);
	p=document.createElement("h3");
	p.classList.add("h2");
	p.textContent="IDE/Tools";
	main.appendChild(p);
	p1=document.createElement("p");
	p1.classList.add("p");
	p1.textContent="";
	for(var i=0;i<sk.IDE_Tools.length;i++)
	{
		
		p1.textContent+=sk.IDE_Tools[i]+", ";
		
	}
	main.appendChild(p1);
	p=document.createElement("h3");
	p.classList.add("h2");
	p.textContent="Web Designing";
	main.appendChild(p);
	p1=document.createElement("p");
	p1.classList.add("p");
	p1.textContent="";
	for(var i=0;i<sk.Web_Designing.length;i++)
	{
		
		p1.textContent+=sk.Web_Designing[i]+", ";
		
	}
	main.appendChild(p1);
	main.appendChild(document.createElement("hr"));
}

function fetch_accomplishments(a)
{
	h2=document.createElement("h2");
	h2.classList.add("h2");
	h2.textContent="Accomplishments";
	main.appendChild(h2);
	for(var i=0;i<a.length;i++)
	{
		p1=document.createElement("p");
		p1.classList.add("p");
		p1.textContent=a[i];
		main.appendChild(p1);
	}
}
