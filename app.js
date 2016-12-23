var getWordCount = function(text){
	return text.split(" ").length;
}

var getUniqueWordCount = function(text){
	var unique = [];
	var words = text.split(" ");
	words.forEach(function(word){
	if(unique.indexOf(word) < 0){
		unique.push(word);
		}
	})
	return unique.length;	
}

var getAvgWordLength = function(text){
	var words = text.split(" ");
	var total = 0;
	words.forEach(function(word){
		total = total + word.length;
	})
	return total/words.length;
}

var getAvgSentenceLength = function(text){
	var sentences = text.split(".");
	var total = 0
	sentences.forEach(function(sentence){
		total = total + getWordCount(sentence);
	})
	return total/sentences.length;
}

var printResults = function(text){
	$('.text-report').html('<dt>Word count</dt>'+
            '<dd>' + getWordCount(text) + '</dd>' +
            '<dt>Unique word count</dt>' +
            '<dd>' + getUniqueWordCount(text) + '</dd>' +
            '<dt>Average word length</dt>' +
            '<dd>' + getAvgWordLength(text) + '</dd>' +
            '<dt>Average sentence length</dt>' +
            '<dd>' + getAvgSentenceLength(text) + '</dd>');
}

$(document).ready(function (){
	//get text from input when form is submitted
	$('form').submit(function(event){
		event.preventDefault();
		var text = $('#user-text').val();
		printResults(text);
		$('.text-report').removeClass('hidden');

	})
})