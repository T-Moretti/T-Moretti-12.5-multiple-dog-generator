
function formSubmission() {
    $('form').submit(event => {
        event.preventDefault();
        let number = $('#dog-amount').val();
        produceRandomDogs(number);
    });
}

function produceRandomDogs(number) {
    fetch(`https://dog.ceo/api/breeds/image/random/${number}`)
        .then(response => response.json())
        .then(responseJson => showResults(responseJson))
        .catch(error => alert('Oh no! Technical difficulty. Try again later!'));
}

function showResults(responseJson) {
    console.log(responseJson);
    const imageArray = responseJson.message;
    $('#image-holder').html(''); //clearing out html area
    for (let i=0; i < imageArray.length; i++) { 
        $('#image-holder').append(`<img src="${imageArray[i]}" class="results-img">`)
        $('.results').removeClass('hidden')
    }
}

$(function() {
    formSubmission();
});


/*
fetch(`https://dog.ceo/api/breeds/image/random/${number}`)
    .then(function(response) {
        return response.json();
    })
    .then(function(responseJson) {
    	return showResults(responseJson);
    })
    .catch(function(error) {
    	alert('Oh no! Technical difficulty. Try again later!');
    }
}

fetch(`https://dog.ceo/api/breeds/image/random/${number}`)
    .then((response) => {
        return response.json();
    })
    .then((responseJson) => {
    	return showResults(responseJson);
    })
    .catch((error) => {
    	alert('Oh no! Technical difficulty. Try again later!');
    }
}
*/

// I was told that my error is because I need to loop over responseJson. Now where do I do that...

