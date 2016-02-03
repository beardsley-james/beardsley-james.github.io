var currentIssue = "01";
var currentPage = 0;

$(document).ready(function(){
	
	//Initial settings
	$("#currentPage").html(pageImage());
	
	//Issue selection
	$("#issueSelect").on("click", "button", function(e){
		currentIssue = $(this).attr("id").slice(5,7);
		currentPage = 0;
		
		var output = "<h2>Issue ";
		if (parseInt(currentIssue) < 10) {
			output += currentIssue.slice(1)
		} else {output += currentIssue};
		output += "</h2>";
		
		$("#issueTitle").html(output);
		$("#currentPage").html(pageImage());
		$(".previousPage").attr("disabled", "disabled");
	});
	
	//Page selection
	$(".pageSelect").on("click", "button", function(e){
		if ($(this).hasClass("previousPage")) {
			currentPage -= 1;
			$("#currentPage").html(pageImage());
			if (currentPage === 0) {
				$(".previousPage").attr("disabled", "disabled")
			};
			$(".nextPage").removeAttr("disabled");
		} else if ($(this).hasClass("nextPage")) {
			currentPage += 1;
			$("#currentPage").html(pageImage());
			if (currentPage === 6) {
				$(".nextPage").attr("disabled", "disabled")
			};
			$(".previousPage").removeAttr("disabled");
		}
	})
	
})

function pageImage(){
	return "<img class = 'img-responsive' src='./images/awesomecomix/issue" + currentIssue + "/" + currentIssue + "0" + currentPage + ".gif'>";
}
