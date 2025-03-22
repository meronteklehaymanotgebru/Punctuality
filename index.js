
document.getElementById('showdefinition').addEventListener('click', function() {
    var definition = document.getElementById('definition');
    if (definition.style.display ==='none') {
        definition.style.display ='block';
        this.textContent = 'Hide Definition';
    } else {
        definition.style.display = 'none';
        this.textContent = 'Show more';
    }
});