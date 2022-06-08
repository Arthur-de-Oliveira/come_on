var btn = document.querySelectorAll('.contato__card')[1];

btn.addEventListener('click', function(e) {
    e.preventDefault();

    let textArea = "88987654321";
    
    navigator.clipboard.writeText(textArea);

    alert('Numero copiado para área de transferência!');
});