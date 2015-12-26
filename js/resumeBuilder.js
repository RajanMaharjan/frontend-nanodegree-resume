/*
This is empty on purpose! Your code to build the resume will go here.
 */


//-------My biodata 
var bio = {
	"name":"Rajan Maharjan",
	"role":"Full Stack Web Developer",
	"welcomeMessage":"Hello! fellas..."
	"contacts":{
		"mobile":"9841716454",
		"email":"notify@mrajan.com.np",
		"github":"RajanMaharjan",
		"twitter":"RajanMaharjn",
		"location":"Kathmandu"
	},
	"skills":["Html","Css","JS","AngularJs","Node.js"],
	"bioPic":"images/RajanPPtie.jpg"
};

//--------My work details
var work = {
	"jobs":[
	{
		"employer": "Frelance", 
		"title": "Js Developer",
		"location": "Kathmandu",
		"dates": "2015", 
		"description":"Self job"
	},
	{
		"employer": "Oval",
		"title":"Data Engineer",
		"location": "Kathmandu",
		"dates": "2014", 
		"description":"Work for Smarttel"
	}
	]
};

//-------My education details
var education = {
	"schools":[
	{
		"name":"Tribhuvan University",
		"city": "Kathmandu,Nepal",
		"degree": "BE",
		"major":["Computer Engineering","English"],
		"dates": "2013",
		"url":"www.tu.com"
	},
	{
		"name":"DAV",
		"city": "Kathmandu,Nepal",
		"degree": "+2",
		"major":["Science"],
		"dates": "2010",
		"url": "www.dav.com", 
	}
	]
	,
	"onlineCoursers":[
	{
		"tittle": "Javascript Syntax",
	 	"school": "Udacity",
	 	"date": "2014", 
	 	"url":"www.Udacity.com"
	}
	]
};

var projects = {
	"projects":[
	{
		"title": "Sample Project",
		"dates": "2014",
		"description":"my starting project",
		"images":["images/fry.jpg","images/RajanPPtie.jpg"] 
	}
	]
}




// var name = "Rajan Maharjan";
// var formattedName = HTMLheaderName.replace("%data%",name); 

// var role = "Full Stack Web Developer";
// var formattedRole = HTMLheaderRole.replace("%data%",role); 

// $("#header").prepend(formattedRole);
// $("#header").prepend(formattedName);


if(bio.skills.length > 0){
	$("#header").append(HTMLskillStart);

	var formattedSkill = HTMLskills.replace("%data%",bio.skills[0]);

	$("#skills").append(formattedSkill);
	formattedSkill = HTMLskills.replace("%data%",bio.skills[1]);
	$("#skills").append(formattedSkill);
	formattedSkill = HTMLskills.replace("%data%",bio.skills[2]);
	$("#skills").append(formattedSkill);
	formattedSkill = HTMLskills.replace("%data%",bio.skills[3]);
}

for (job in work.jobs) {
 $("#workExperience").append(HTMLworkStart);

 var formattedEmployer = HTMLworkEmployer.replace("%data%", work.jobs[job].employer);
 var formattedTitle = HTMLworkTitle.replace("%data%", work.jobs[job].title);
 var formattedEmployerTitle = formattedEmployer + formattedTitle;
 $(".work-entry:last").append(formattedEmployerTitle);

 var formattedDates = HTMLworkDates.replae("%data%",work.jobs[job].dates);
 $(".work-entry:last").append(formattedDates);

 var formattedDescription = HTMLworkDescription.replae("%data%",work.jobs[job].description);
 $(".work-entry:last").append(formattedDescription);

}